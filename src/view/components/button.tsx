import React from "react";
import { CodeBlok } from "../../library";
function ViewButton() {
  return (
    <div>
      <p className="text-justify">
        Button memungkinkan pengguna untuk memulai suatu tindakan atau perintah
        ketika diklik atau diketuk. Label atau Deskripsi teks button menunjukkan
        tujuan tindakan kepada pengguna. Di Angeline Universe, button adalah
        blok bangunan fundamental dari produk kami. Sering kali, kami
        menggunakan jenis button "Primary", tetapi jenis button lain dapat
        digunakan untuk menunjukkan sesuatu yang khusus tentang hierarki atau
        fungsionalitas button.
      </p>
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Instalasi</h1>
      <CodeBlok code={`import { Button } from "@angelineuniverse/design";`} />
    </div>
  );
}

export default ViewButton;