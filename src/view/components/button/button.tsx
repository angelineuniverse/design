import React from "react";
import { Table } from "../../../library";
import PrismCode from "../../../utils/prism";
import { tableColumn, tableData } from "./model";
import ViewButtonSize from "./example";
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
      <div className="mt-10">
        <h1 className="mb-6 font-euclidsemi text-xl">Instalasi</h1>
        <PrismCode
          code={`import { Button } from "@angelineuniverse/design";`}
        />
      </div>
      <div className="mt-10">
        <h1 className="mb-6 font-euclidsemi text-xl">Penggunaan</h1>
        <ViewButtonSize />
      </div>
      <div className="mt-10">
        <h1 className="font-euclidsemi text-xl mb-6">Props</h1>
        <Table
          tableName="props"
          columnstyle="font-euclidsemi text-xs"
          isCompact={true}
          column={tableColumn}
          data={tableData}
        />
      </div>
    </div>
  );
}

export default ViewButton;
