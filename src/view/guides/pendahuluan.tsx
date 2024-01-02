import React from "react";

const ViewPendahuluan = () => {
  return (
    <div className="md:py-6 font-euclidregular">
      <h1 className=" font-bold text-3xl text-primary font-euclidbold">
        Angeline Design
      </h1>
      <h6 className="mt-5 text-lg">
        Angeline Design dibuat oleh Angeline untuk semua aplikasi website di
        dalam Angeline Universe. Panduannya merupakan kumpulan prinsip, standar,
        dan rekomendasi sumber terbuka untuk mendesain aplikasi didalam Angeline
        Universe. Sebagai bahasa desain, Angeline Design menyediakan tata bahasa
        dan kosakata umum untuk membangun pengalaman yang kohesif, mudah
        diakses, responsif, dan efisien.
      </h6>
      <div className="mt-8">
        <h2 className=" pb-4 border-b mb-5 text-xl border-b-gray-300 font-euclidsemi text-primary">
          Pengalaman yang Kohesif
        </h2>
        <p className=" font-euclidregular text-pretty tracking-wide text-sm">
          Angeline Universe memiliki audiens global. Jutaan orang menggunakan
          semua aplikasi didalam Angeline Universe setiap hari dengan berbagai
          alasan dan dengan berbagai cara. Mereka semua berasal dari latar
          belakang yang berbeda. Kami tidak dapat menyimpulkan kemampuan fisik
          atau kognitif mereka, atau perangkat yang mereka gunakan, atau koneksi
          internet yang mereka miliki. Semua itu perlu dipertimbangkan sebelum,
          selama, dan setelah proses desain.
          <br />
          <br />
          Pola yang sudah dikenal membantu orang secara intuitif menavigasi ke
          informasi yang mereka cari, sekaligus membantu orang menemukan fitur
          baru. Jika halaman dan fitur tidak memiliki metafora yang sama, orang
          akan lebih mudah bingung, dan akan lebih sulit bagi mereka untuk
          memahami fitur yang kita sediakan.
          <br />
          <br />
          Angeline Design berfokus pada pengalaman pengguna sehingga orang dapat
          memperoleh manfaat dari penggunaan platform yang kohesif, di mana pun
          mereka berada. Jika sebuah halaman berperilaku dan terasa familiar,
          hal ini memungkinkan orang untuk fokus pada tugas yang sedang
          dikerjakan, alih-alih mengharuskan mereka untuk mengurai UI yang
          terlihat sama sekali baru.
        </p>
      </div>
      <div className="mt-8">
        <h2 className=" pb-4 border-b mb-5 text-xl border-b-gray-300 font-euclidsemi text-primary">
          Desain yang responsif
        </h2>
        <p className=" font-euclidregular text-pretty tracking-wide text-sm">
          Browser ditemukan di perangkat dengan berbagai bentuk, ukuran,
          kualitas tampilan, dan metode input, jadi kita tidak bisa menganggap
          pengalaman hanya di desktop saja sudah cukup. Mendukung pengalaman
          yang responsif adalah bagian penting dari pengembangan untuk Web saat
          ini. Bahkan, memastikan halaman berfungsi dengan baik pada sebagian
          besar ukuran layar atau tingkat zoom juga merupakan persyaratan
          aksesibilitas.
          <br />
          <br />
          Angeline Design memainkan peran penting dalam menyediakan pola dan
          komponen yang dapat digunakan kembali yang dapat menyederhanakan
          pembuatan desain yang ramah, responsif dan mudah diakses, sehingga tim
          dapat fokus pada masalah yang lebih besar. Proyek di dalam Angeline
          Universe harus memanfaatkan pola-pola ini sehingga dapat memberikan
          pengalaman yang kohesif kepada orang-orang di seluruh platform
          <br />
          <br />
          Angeline Design menggunakan istilah "Desain responsif" untuk merujuk
          pada keputusan desain yang disesuaikan dengan faktor bentuk perangkat
          dan preferensi pengguna.
        </p>
      </div>
      <div className="mt-8">
        <h2 className=" pb-4 border-b mb-5 text-xl border-b-gray-300 font-euclidsemi text-primary">
          Creator
        </h2>
        <ul className="mt-3 list-disc list-inside text-sm font-euclidmedium">
          <li>
            <span className=" text-blue-500 cursor-pointer">
              Prio Dwi Sembodo
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewPendahuluan;
