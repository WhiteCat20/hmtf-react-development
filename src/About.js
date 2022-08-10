import React from "react";

function About() {
  return (
    <div className="About">
      <div className="container overflow-hidden container-about">
        <h1 id="tentang-hmtf" className="mb-4 fw-bold">
          Tentang HMTF ITS
        </h1>
        <p id="tentang-hmtf-desc">
          Himpunan Mahasiswa Teknik Fisika (HMTF) adalah forum yang disediakan
          oleh Departemen untuk pengembangan kegiatan kemahasiswaan di FTIRS-ITS
          Departemen Teknik Fisika. Dalam menjalankan roda organisasi, himpunan
          mendapatkan fasilitas seperti ruang sekretariat HMTF dan dana
          operasional sesuai dengan program kerja HMTF setelah mendapatkan
          persetujuan dari Departemen. Karena sifatnya untuk mengakomodasi
          kegiatan mahasiswa di Departemen, HMTF bekerja di bawah bimbingan tim
          TKK yang ditunjuk dan diberhentikan oleh Ketua Departemen. Dengan
          pengawasan TKK, setiap kegiatan yang dilakukan oleh HMTF harus
          diketahui dan disahkan oleh tim TKK. Ruang lingkup utama kegiatan HMTF
          menyangkut ranah keprofesian dari Teknik Fisika.
        </p>
        <div id="visi-misi" className="mt-5">
          <h1 id="visi-misi-judul" className="fw-bold mb-3">
            Visi & Misi HMTF
          </h1>
          <p id="visi" className="text-center fst-italic fw-bold">
            <i class="fa-solid fa-quote-left"></i>Terwujudnya HMTF ITS sebagai
            organisasi keprofesian berbasis keteknikfisikaan yang profesional,
            mandiri, kreatif, dinamis, serta bermanfaat bagi almamater dan
            bangsa dengan berlandaskan nilai Ketuhanan Yang Maha Esa dan
            semangat solidarity together forever.{" "}
            <i class="fa-solid fa-quote-right"></i>
          </p>
          <ol id="misi" className="mt-4">
            <li>
              Menciptakan lingkungan HMTF ITS yang bertanggung jawab terhadap
              aturan
            </li>
            <li>
              Menumbuhkan kepekaan warga HMTF ITS terhadap dinamika yang terjadi
              di KM ITS
            </li>
            <li>
              Membangun sikap kepemimpinan dan integritas diri bagi seluruh
              Warga HMTF ITS
            </li>
            <li>
              Mengembangkan potensi warga HMTF ITS dalam bidang yang diatur
              sesuai PPSDM
            </li>
            <li>
              Menumbuhkembangkan kepekaan dan peran aktif HMTF ITS dalam
              permasalahan sosial kebangsaan serta pengembangan IPTEK yang
              berbasis pada keprofesian
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
