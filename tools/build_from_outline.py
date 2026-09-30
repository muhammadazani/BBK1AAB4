"""Regenerate jadwal.qmd and materi/wNN.qmd from the Alpro course outline workbook.

Usage:
    python3 tools/build_from_outline.py path/to/Alpro_Outline.xlsx

Topic, Sub-CPMK, skills, lesson titles and references come from Sheet1 of the
workbook. Short page titles and the student-facing example (concept, code,
"Tebak Dulu") live in PAGES below, because the outline does not contain them.
Running this overwrites hand edits to the generated files.
"""
import re
import sys
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent

EXAMS = {8: "UTS", 16: "UAS"}
STUDIOS = {7, 14, 15}

PAGES = {
    1: dict(title="Pengenalan Alpro & Berpikir Komputasional", cat="Dasar",
            concept="Algoritma adalah urutan langkah yang jelas dan tidak ambigu untuk menyelesaikan masalah. Program adalah algoritma yang ditulis dalam bahasa formal, dan Python menjalankannya **baris demi baris, dari atas ke bawah**. Jika ada yang salah, galatnya termasuk salah satu dari tiga jenis: *syntax error*, *runtime error*, atau *semantic error*.",
            code='print("Halo, Sistem Informasi!")\nprint(2 + 3 * 4)   # 14: perkalian dikerjakan lebih dulu\nprint(10 / 4)      # 2.5\nprint(10 // 4)     # 2',
            predict=('print("1 + 2")\nprint(1 + 2)', "Baris pertama mencetak `1 + 2` apa adanya karena berada di dalam tanda kutip (string). Baris kedua mencetak `3` karena Python menghitung ekspresinya.")),
    2: dict(title="Variabel, Tipe Data, Operator & Ekspresi", cat="Dasar",
            concept="Variabel adalah **nama yang menunjuk ke sebuah nilai**, bukan kotak yang berisi nilai. Penugasan `x = x + 1` bukan persamaan: Python menghitung ruas kanan dulu, lalu memindahkan panah `x` ke nilai yang baru. Perhatikan juga bahwa `input()` **selalu** menghasilkan string.",
            code='harga = int(input("Harga: "))\njumlah = int(input("Jumlah: "))\ntotal = harga * jumlah\nprint(f"Total bayar: {total}")',
            predict=("a = 3\nb = a\na = 10\nprint(b)", "Hasilnya `3`. `b = a` membuat `b` menunjuk ke nilai yang sama dengan `a` saat itu, yaitu `3`. Ketika `a` dipindahkan ke `10`, panah `b` tidak ikut berpindah.")),
    3: dict(title="Pernyataan Kondisional", cat="Kontrol Alur",
            concept="Pada rangkaian `if/elif/else`, Python memeriksa kondisi dari atas dan **hanya menjalankan cabang pertama yang bernilai `True`**, sehingga urutan kondisi menentukan hasil. *Guard* memeriksa masukan lebih dulu, baru memprosesnya.",
            code='nilai = int(input("Nilai: "))\nif nilai < 0 or nilai > 100:      # guard\n    print("Nilai tidak sah")\nelif nilai >= 80:\n    print("A")\nelif nilai >= 70:\n    print("B")\nelse:\n    print("C")',
            predict=('n = 95\nif n >= 60:\n    print("Lulus")\nelif n >= 90:\n    print("Istimewa")', "Hanya `Lulus` yang tercetak. Kondisi pertama sudah `True`, sehingga cabang `elif` tidak pernah diperiksa. Kondisi yang lebih spesifik harus diletakkan lebih dulu.")),
    4: dict(title="Fungsi I: Fungsi Void", cat="Fungsi",
            concept="Fungsi membungkus langkah-langkah di bawah satu nama. **Definisi** (`def`) hanya mencatat fungsinya; kodenya baru berjalan saat fungsi **dipanggil**. Argumen dipasangkan ke parameter sesuai urutan, dan variabel yang dibuat di dalam fungsi bersifat **lokal**.",
            code='def cetak_garis(panjang):\n    print("-" * panjang)\n\ndef cetak_judul(teks):\n    """Mencetak teks di antara dua garis sepanjang teks."""\n    cetak_garis(len(teks))\n    print(teks)\n    cetak_garis(len(teks))\n\ncetak_judul("Algoritma")',
            predict=("x = 1\n\ndef ubah():\n    x = 99\n\nubah()\nprint(x)", "Hasilnya `1`. `x = 99` di dalam fungsi membuat variabel lokal baru bernama `x`, dan tidak mengubah `x` di luar fungsi.")),
    5: dict(title="Perulangan I: while", cat="Kontrol Alur",
            concept="Setiap perulangan punya tiga bagian: **inisialisasi**, **kondisi**, dan **pemutakhiran**. `while` memeriksa kondisi sebelum setiap putaran. Jika tidak ada yang mengubah variabel di dalam kondisi, loop tidak akan pernah berhenti.",
            code='total = 0                           # akumulator\nangka = int(input("Angka (0 = selesai): "))\nwhile angka != 0:                   # sentinel\n    total = total + angka\n    angka = int(input("Angka (0 = selesai): "))\nprint("Jumlah:", total)',
            predict=('i = 10\nwhile i < 5:\n    print(i)\n    i += 1\nprint("selesai")', "Hanya `selesai` yang tercetak. Kondisi `10 < 5` sudah `False` sejak awal, sehingga badan loop tidak dijalankan sama sekali.")),
    6: dict(title="Perulangan II: for", cat="Kontrol Alur",
            concept="`range(a, b)` menghasilkan bilangan dari `a` sampai **sebelum** `b`. Titik paling rawan minggu ini adalah menggabungkan **guard** dengan **akumulator** di dalam satu perulangan: data yang tidak sah harus dilewati sebelum ikut dihitung.",
            code="total = 0\nbanyak = 0\nfor n in [80, -1, 95, 70]:\n    if 0 <= n <= 100:        # guard\n        total += n           # akumulator\n        banyak += 1          # pencacah\nprint(total / banyak)",
            predict=("for i in range(2, 10, 3):\n    print(i)", "Tercetak `2`, `5`, `8`. Dimulai dari 2, bertambah 3, dan berhenti sebelum mencapai 10.")),
    7: dict(title="Tutorial & Praktikum 1 · Gladi UTS", cat="Praktikum",
            studio=("Kamu mengerjakan mini proyek terbimbing yang menggabungkan variabel, kondisional, fungsi, dan perulangan. Susun dulu rencana fungsinya sebelum mengetik kode. Di akhir lesson, tunjukkan programmu berjalan dan sebutkan pola yang dipakai di tiap fungsi.",
                    "Gladi UTS: satu soal bergaya UTS dikerjakan di SEB dengan batas waktu penuh, lalu dibahas bersama. Setelah itu jendela remedial dibuka.")),
    8: dict(title="UTS", cat="Ujian"),
    9: dict(title="Fungsi II: Fungsi Ber-return", cat="Fungsi",
            concept="`print` menampilkan nilai ke layar, sedangkan `return` **mengirim nilai kembali ke pemanggil** agar bisa dipakai di dalam ekspresi. Fungsi tanpa `return` mengembalikan `None`. Bangun fungsi secara bertahap: tulis sedikit, uji, lalu lanjutkan.",
            code="def luas(p, l):\n    return p * l\n\ndef keterangan(p, l):\n    if luas(p, l) > 100:\n        return \"besar\"\n    return \"kecil\"\n\nprint(luas(4, 5) * 2)      # 40\nprint(keterangan(20, 6))   # besar",
            predict=("def dobel(x):\n    print(x * 2)\n\nhasil = dobel(4)\nprint(hasil)", "Tercetak `8` lalu `None`. `dobel` hanya mencetak dan tidak mengembalikan apa pun, sehingga `hasil` bernilai `None`.")),
    10: dict(title="String", cat="Teks & Koleksi Data",
             concept="Indeks dimulai dari `0`, batas akhir *slicing* tidak ikut diambil, dan indeks negatif menghitung dari belakang. String bersifat **immutable**: metode seperti `upper()` dan `strip()` menghasilkan string baru, bukan mengubah string lama.",
             code='kata = "Telkom"\nprint(kata[0], kata[-1], kata[1:4])   # T m elk\n\nnama = "  budi SANTOSO "\nprint(nama.strip().title())            # Budi Santoso',
             predict=('s = "halo"\ns.upper()\nprint(s)', "Hasilnya tetap `halo`. `upper()` menghasilkan string baru, tetapi hasilnya tidak disimpan ke mana pun. Tulis `s = s.upper()` untuk menyimpannya.")),
    11: dict(title="Koleksi Data I: List & Tuple", cat="Teks & Koleksi Data",
             concept="`b = a` **tidak menyalin** list. Kedua nama menunjuk ke objek list yang sama, sehingga perubahan lewat `b` juga terlihat lewat `a`. Tuple mirip list, tetapi immutable, dan sering dipakai untuk mengembalikan beberapa nilai sekaligus.",
             code="a = [1, 2, 3]\nb = a          # alias: menunjuk list yang sama\nc = a[:]       # salinan: list baru\nb.append(4)\nprint(a, c)    # [1, 2, 3, 4] [1, 2, 3]\n\ndef ringkas(data):\n    return sum(data), len(data)\n\ntotal, n = ringkas([2, 4, 6])   # unpacking",
             predict=("def tambah(lst):\n    lst.append(0)\n\ndata = [5]\ntambah(data)\nprint(data)", "Hasilnya `[5, 0]`. Parameter `lst` menunjuk list yang sama dengan `data`, sehingga `append` di dalam fungsi mengubah list aslinya.")),
    12: dict(title="Koleksi Data II: Dictionary & Set", cat="Teks & Koleksi Data",
             concept="Dictionary memetakan **key** ke **value**, sehingga data bisa diambil lewat namanya, bukan lewat posisinya. Key harus unik. Set menyimpan nilai unik, cocok untuk membuang duplikat.",
             code='kata = "data sains data bisnis data".split()\nfrek = {}\nfor k in kata:\n    frek[k] = frek.get(k, 0) + 1\nprint(frek)        # {\'data\': 3, \'sains\': 1, \'bisnis\': 1}\nprint(set(kata))   # tiga kata unik',
             predict=('stok = {"apel": 5}\nstok["jeruk"] = 3\nstok["apel"] = 7\nprint(len(stok), stok["apel"])', "Hasilnya `2 7`. Menetapkan key baru menambah entri, sedangkan menetapkan key yang sudah ada menimpa nilainya.")),
    13: dict(title="Data Files", cat="Teks & Koleksi Data",
             concept="`with open(...)` menutup file secara otomatis setelah bloknya selesai. Mode `\"w\"` menghapus isi lama, sedangkan `\"a\"` menambahkan di akhir. Bungkus operasi file dengan `try/except` agar program gagal dengan aman.",
             code='try:\n    with open("nilai.txt") as f:\n        for baris in f:\n            print(baris.strip())\nexcept FileNotFoundError:\n    print("File nilai.txt tidak ditemukan.")',
             predict=('try:\n    x = int("tiga")\n    print("A")\nexcept ValueError:\n    print("B")\nprint("C")', "Tercetak `B` lalu `C`. `int(\"tiga\")` memicu `ValueError`, sehingga `print(\"A\")` dilewati dan eksekusi pindah ke blok `except`.")),
    14: dict(title="Tutorial & Praktikum 2", cat="Praktikum",
             studio=("Mini proyek terbimbing kedua: fungsi void dan ber-return, string, dan file. Tulis rencana fungsi dan pilihan struktur datamu sebelum mengetik kode. Setiap bug ditangani dengan hipotesis tertulis sebelum kode diubah. Kumpulkan program yang berjalan beserta catatan debugging-nya.",
                     "Pemeriksaan lisan singkat: kamu menunjukkan satu fungsi, menjelaskan cara kerjanya tanpa catatan, lalu mengubahnya sesuai permintaan dosen. Setelah itu jendela remedial dibuka.")),
    15: dict(title="Tutorial & Praktikum 3 · Gladi UAS", cat="Praktikum",
             studio=("Mini proyek terintegrasi dengan data nyata (CSV) yang mencakup seluruh materi. Petakan masalahnya ke pola yang sudah kamu kenal: guard, akumulator, pencacah, dan best-so-far. Program harus memenuhi seluruh spesifikasi.",
                     "Tinjau skill ledger-mu, lalu ikuti gladi UAS penuh di SEB dengan batas waktu sebenarnya. Setelah pembahasan, jendela remedial terakhir dibuka. Setelah minggu ini ledger ditutup, kecuali untuk skill yang masih bisa dituntaskan lewat UAS.")),
    16: dict(title="UAS", cat="Ujian"),
}

EXAM_INFO = {
    8: dict(scope="U1.1–U6.5 (minggu 1–7)",
            mix=[("Trace / prediksi", "T", "40%"), ("Menulis kode", "W", "40%"), ("Memilih dan menjelaskan", "X", "20%")],
            note="Komposisi ini memastikan kamu tidak bisa lulus hanya dengan menulis kode; kemampuan membaca dan menjelaskan kode juga diperiksa."),
    16: dict(scope="seluruh skill inti U1.1–U13.5",
             mix=[("Trace / prediksi", "T", "30%"), ("Menulis kode", "W", "45%"), ("Memilih, menjelaskan, dan debugging", "X", "25%")],
             note="Minimal satu soal wajib menggabungkan guard dengan akumulasi di dalam perulangan."),
}

SKILL_TYPE = {"T": "Trace", "W": "Write", "X": "Transfer"}
SKILL_RE = re.compile(r"^(U\d+\.\d+)\s*\(([TWX])\)\s*(.+)$")
LESSON_RE = re.compile(r"Lesson ([AB]) \(.*?\) - (.+?)\nFokus: (.+)")


def clean(s):
    return re.sub(r"\s+", " ", str(s or "")).strip()


def read_outline(path):
    ws = openpyxl.load_workbook(path, data_only=True)["Sheet1"]
    weeks = {}
    for row in ws.iter_rows(min_row=2, values_only=True):
        if row[0] is None:
            continue
        n = int(str(row[0]))
        skills, notes = [], []
        for line in str(row[3] or "").splitlines():
            line = line.strip()
            if not line:
                continue
            m = SKILL_RE.match(line)
            if m:
                skills.append(m.groups())
            else:
                notes.append(line)
        lessons = [(a, clean(t), clean(f)) for a, t, f in LESSON_RE.findall(str(row[4] or ""))]
        refs = [l.strip() for l in str(row[5] or "").splitlines() if l.strip() and l.strip() != "None"]
        weeks[n] = dict(objective=clean(row[2]), skills=skills, notes=notes, lessons=lessons, refs=refs)
    return weeks


def yaml_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def front_matter(n, page, w):
    cats = [page["cat"]] + (["Remedial"] if n in STUDIOS else [])
    return "\n".join([
        "---",
        "title: " + yaml_str(f"Minggu {n} · " + page["title"]),
        f"description: {yaml_str(w['objective'])}",
        f"categories: [{', '.join(cats)}]",
        f"minggu: {n}",
        "---",
        "",
    ])


def skills_table(skills):
    rows = "\n".join(f"| `{code}` | {SKILL_TYPE[t]} ({t}) | {text} |" for code, t, text in skills)
    return f"| Kode | Jenis | Skill |\n|---|---|---|\n{rows}\n\n: {{tbl-colwidths=\"[12,16,72]\"}}\n"


def lessons_table(n, lessons):
    rows = "\n".join(f"| {a} | {title} | {focus} | `W{n:02d}-{a}` |" for a, title, focus in lessons)
    return f"| Lesson | Judul | Fokus skill | Moodle |\n|---|---|---|---|\n{rows}\n"


def exam_page(n, page, w):
    info = EXAM_INFO[n]
    name = EXAMS[n]
    mix = "\n".join(f"| {label} | {t} | {pct} |" for label, t, pct in info["mix"])
    return front_matter(n, page, w) + f"""::: week-meta
<span>Minggu {n}</span><span>{name}</span><span>Live coding terawasi</span>
:::

## Tentang {name}

{w["objective"]} Tidak ada skill baru. {name} memeriksa ulang {info["scope"]} dalam bentuk **soal paralel**, dan skill yang tuntas di {name} **dihitung masuk ke skill ledger**. Jadi {name} juga berfungsi sebagai kesempatan remedial resmi.

## Aturan

- Dikerjakan di **Moodle** melalui **Safe Exam Browser (SEB)**, pada sesi kelas.
- Ada batas waktu; waktunya diumumkan di Moodle.
- **Tanpa AI** dan **tanpa catatan**.

## Komposisi Soal

| Jenis soal | Skill | Porsi |
|---|:---:|---:|
{mix}

{info["note"]}

## Persiapan

- Periksa [skill ledger](../penilaian.qmd#skill-ledger) dan fokus pada skill yang belum tuntas.
- Ulangi soal **Tebak Dulu** di setiap halaman materi tanpa menjalankan kodenya.
- Latih diri menulis kode tanpa bantuan *autocomplete* atau AI.
"""


def week_page(n, page, w):
    if n in EXAMS:
        return exam_page(n, page, w)
    body = front_matter(n, page, w)
    body += "::: week-meta\n<span>Minggu " + str(n) + "</span>" + "".join(
        f"<span>Lesson {a}: {t}</span>" for a, t, _ in w["lessons"]) + "\n:::\n"
    if w["notes"]:
        body += '\n::: {.callout-note title="Jendela remedial"}\n' + " ".join(w["notes"]) + \
                ". Daftar skill yang dibuka dan jadwalnya ada di Moodle.\n:::\n"
    # The Sub-CPMK already shows under the title (front-matter description)
    body += f"""
## Skill yang Dinilai

{skills_table(w["skills"])}
## Lesson

{lessons_table(n, w["lessons"])}"""
    if "studio" in page:
        a, b = page["studio"]
        body += f"""
## Yang Kamu Kerjakan

**Lesson A.** {a}

**Lesson B.** {b}
"""
    else:
        body += f"""
## Konsep Kunci

{page["concept"]}

```python
{page["code"]}
```
"""
        pcode, answer = page["predict"]
        body += f"""
## Tebak Dulu

Tanpa menjalankannya, apa keluaran program berikut? Tulis tebakanmu, **baru** buka jawabannya.

```python
{pcode}
```

::: {{.callout-tip collapse="true" title="Lihat jawaban"}}
{answer}
:::
"""
    body += "\n## Bacaan\n\n" + "\n".join(f"- {r}" for r in w["refs"]) + "\n"
    return body


def schedule(weeks):
    rows = []
    for n in sorted(weeks):
        w, page = weeks[n], PAGES[n]
        tag = ""
        if n in EXAMS:
            tag = " [Ujian]{.tag .exam}"
        elif n in STUDIOS:
            tag = " [Remedial]{.tag .remedial}"
        topic = f"[{page['title']}](materi/w{n:02d}.qmd){tag}"
        if n in EXAMS:
            mix = " · ".join(f"{t} {pct}" for _, t, pct in EXAM_INFO[n]["mix"])
            a = f"Live coding di Moodle (SEB)<br><small>{EXAM_INFO[n]['scope']}</small>"
            b = f"<small>{mix}</small>"
        else:
            cells = {l: f"{t}<br><small>{f}</small>" for l, t, f in w["lessons"]}
            a, b = cells.get("A", "—"), cells.get("B", "—")
        rows.append(f"| {n} | {topic} | {a} | {b} |")
    table = "\n".join(rows)
    return f"""---
title: "Jadwal"
subtitle: "16 minggu · 2 lesson per pertemuan · 200 menit"
---

<!-- Generated by tools/build_from_outline.py from the course outline. Edit the outline, then rerun. -->

Setiap pertemuan terdiri atas **Lesson A** (90 menit), istirahat 15 menit, lalu **Lesson B** (90 menit). Kode di bawah judul lesson adalah skill yang menjadi fokusnya. Klik judul minggu untuk membuka materinya.

| Minggu | Topik | Lesson A | Lesson B |
|:---:|---|---|---|
{table}

: {{tbl-colwidths="[8,28,32,32]"}}

::: {{.callout-note}}
Tanggal pasti tiap pertemuan mengikuti kalender akademik Telkom University dan jadwal kelas masing-masing. Perubahan jadwal diumumkan di Moodle.
:::

## Susunan Satu Sesi

| Waktu | Kegiatan |
|---|---|
| 0–90' | Lesson A: satu siklus 5E penuh (Engage → Explore → Explain → Elaborate → Evaluate) |
| 90–105' | Istirahat |
| 105–195' | Lesson B: satu siklus 5E penuh untuk kelompok skill berikutnya |
| 195–200' | Penutup: skill ledger, yaitu skill mana yang sudah tuntas dan mana yang terbuka untuk remedial minggu depan |

## Remedial

Remedial berlangsung pada **20 menit pertama sesi berikutnya**, ditambah jendela remedial pada **minggu 7** (skill U1–U6), **minggu 14** (skill U9–U13), dan **minggu 15** (jendela terakhir, seluruh skill U1.1–U13.5). Lihat aturannya di [Penilaian](penilaian.qmd#remedial).
"""


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    weeks = read_outline(sys.argv[1])
    missing = set(PAGES) - set(weeks)
    if missing:
        sys.exit(f"Outline is missing weeks: {sorted(missing)}")
    for n in sorted(weeks):
        (ROOT / "materi" / f"w{n:02d}.qmd").write_text(week_page(n, PAGES[n], weeks[n]))
    (ROOT / "jadwal.qmd").write_text(schedule(weeks))
    print(f"Wrote jadwal.qmd and {len(weeks)} week pages")


if __name__ == "__main__":
    main()
