# Prompt Penjualan — LOTC CV Reviewer

Kumpulan prompt siap pakai. Copy satu blok, tempel ke AI mana pun (ChatGPT, Claude, Gemini),
lalu sesuaikan bagian yang ditandai `[...]`.

---

## 1. Master prompt — semua materi jualan sekaligus

```text
Kamu adalah copywriter performance marketing yang jago menjual produk SaaS ke job seeker
Indonesia. Tulis materi jualan untuk produk berikut.

PRODUK: LOTC CV Reviewer — alat review CV berbasis AI.
Fakta produk (jangan mengarang di luar ini):
- Menilai CV dengan 7 rubrik: parseability ATS, struktur, keyword, impact, clarity,
  consistency, hygiene. Skor akhir 0–100.
- Setiap temuan WAJIB mengutip baris asli dari CV + saran rewrite konkret.
- Bukan pujian kosong: persona-nya "recruiter senior yang tidak punya insentif untuk sopan".
- Upload PDF/DOCX atau tempel teks; parsing file terjadi di browser (isi CV tidak disimpan).
- Hasil keluar dalam ~10 detik. Bisa Bahasa Indonesia atau English.
- Ada analisis kecocokan dengan job description (gap keyword vs lowongan target).
- Bisa dipakai gratis/berulang; CV di bawah 100 kata ditolak supaya tidak buang token.

TARGET: fresh graduate & profesional 1–5 tahun yang sedang melamar kerja, sering
"dighosting" tanpa tahu kenapa, dan tidak punya akses ke recruiter sungguhan.

POSITIONING: "Lihat CV-mu seperti recruiter melihatnya — dalam 6 detik pertama."
Pain point utama: merasa CV sudah bagus tapi tidak pernah dipanggil interview.

OUTPUT (tulis semua, dalam Bahasa Indonesia):
1. Headline landing page (3 varian, maks 12 kata).
2. Subheadline (2 varian, maks 25 kata).
3. 5 bullet benefit (tiap bullet maks 15 kata, konkret, tanpa buzzword).
4. Satu paragraf "cara kerja" 3 langkah (upload → skor & temuan → perbaiki).
5. 3 varian CTA (maks 6 kata).
6. Satu thread Twitter/X 7 tweet untuk awareness.
7. Satu caption Instagram 120 kata + 8 hashtag relevan Indonesia.
8. Satu script video pendek 30 detik (hook 3 detik pertama, demo, CTA).
9. 5 objection + jawabannya (mis. "AI tidak paham industri saya", "data CV saya aman?").
10. Satu pesan WhatsApp broadcast 60 kata untuk share ke grup job seeker.

Aturan: tanpa klaim palsu (jangan bilang "dijamin dapat kerja"), tanpa emoji berlebihan,
kalimat pendek, bahasa Indonesia natural (bukan terjemahan kaku). Sebut angka spesifik
(7 rubrik, ~10 detik) karena itu yang membuat klaim terasa nyata.
```

---

## 2. Prompt iklan pendek (Meta/IG/TikTok Ads)

```text
Tulis 5 varian iklan berbayar untuk LOTC CV Reviewer (review CV berbasis AI, 7 rubrik,
skor ATS 0–100, temuan mengutip baris asli CV, hasil ~10 detik, bisa ID/EN).

Target: profesional Indonesia 22–35 tahun yang sudah melamar 20+ lowongan tanpa
dipanggil interview. Budget kecil, jadi hook harus menohok di 3 kata pertama.

Format tiap varian:
- Primary text (maks 90 karakter untuk yang tampil pertama)
- Headline (maks 40 karakter)
- Deskripsi (maks 30 karakter)
- Satu angle berbeda per varian: (a) rasa sakit "dighosting", (b) bukti/angka,
  (c) rasa ingin tahu "skor ATS-mu berapa?", (d) sebelum-sesudah, (e) FOMO lowongan.

Larang: "dijamin", "100% lolos", superlatif kosong. Boleh tegas dan sedikit nyinyir
(mirip tone produknya: jujur, bukan menyenangkan).
```

---

## 3. Prompt halaman jualan (long-form landing page)

```text
Tulis landing page jualan lengkap (Bahasa Indonesia) untuk LOTC CV Reviewer.

Struktur wajib:
1. Hero: headline + subheadline + CTA + 3 angka kunci (7 rubrik, 0–100 skor, ~10 detik).
2. Masalah: 4 kalimat yang membuat pembaca merasa "ini gue banget" (ghosting, CV
   terasa bagus, tidak tahu salahnya di mana, saran teman cuma "rapikan format").
3. Solusi: apa yang produk lakukan, dibedakan dari (a) review gratisan teman,
   (b) template CV, (c) jasa review mahal.
4. Cara kerja: 3 langkah dengan detail teknis ringan (PDF/DOCX, parsing di browser,
   analisis JD opsional).
5. Bukti: contoh temuan nyata (buat 1 contoh temuan: quote baris CV → masalah → rewrite),
   plus 1 contoh skor kategori.
6. Penawaran & CTA berulang 3x sepanjang halaman.
7. FAQ 8 pertanyaan (privasi data, bahasa, jenis CV, industri, gratis/tidak, batas kata).
8. Penutup: kalimat penutup tegas + CTA.

Gaya: kalimat pendek, ritme tegas, tanpa hiperbola. Hindari kata "revolusioner",
"terbaik", "nomor 1". Gunakan konkret: angka, contoh, nama kategori rubrik.
```

---

## 4. Prompt jualan B2B (kampus, komunitas, bootcamp, HR agregator)

```text
Tulis proposal penjualan 1 halaman untuk menawarkan LOTC CV Reviewer sebagai
white-label / benefit keanggotaan ke [KAMPUS / KOMUNITAS / BOOTCAMP / CAREER CENTER].

Isi:
1. Ringkasan masalah yang dihadapi audiens mereka (angka karir lulusan / alumni).
2. Apa yang mereka dapat: akses alat review CV AI, 7 rubrik, skor ATS, laporan
   per mahasiswa, tanpa integrasi rumit (web app).
3. Nilai bisnis untuk mereka: layanan karir yang terukur, diferensiasi program,
   data agregat kesiapan kerja alumni.
4. Model kerja sama: [lisensi bulanan / per-seat / co-branding] — tulis 2 opsi.
5. Langkah selanjutnya: 1 paragraf CTA untuk meeting 20 menit.

Nada: profesional, ringkas, tanpa jargon berlebihan. Maks 500 kata.
```

---

## 5. Prompt "jual tanpa jualan" untuk konten organik

```text
Buat 10 ide konten pendek (Reels/TikTok/carousel) yang menjual LOTC CV Reviewer
secara tidak langsung, untuk akun personal job-seeker Indonesia.

Aturan:
- 7 dari 10 konten harus benar-benar berguna walau penonton tidak beli apa pun
  (tips CV, contoh before-after, mitos rekrutmen, skor ATS).
- 3 konten boleh promosi halus, produk muncul sebagai "alat yang gue pakai".
- Tiap ide: hook 1 kalimat, isi 3 poin, CTA lembut.
- Sertakan alasan kenapa ide itu berpotensi shareable.
```