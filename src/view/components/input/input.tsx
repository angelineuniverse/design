import React from "react";
import PrismCode from "../../../utils/prism";
import InputExample from "./example";
import { Table } from "../../../library";
import { tableColumn, tableData } from "./model";

const ViewInput = () => {
  return (
    <div>
      <p className="text-justify">
        Gunakan input teks untuk memungkinkan pengguna memasukkan teks bentuk
        bebas yang pendek. Input ini juga dapat digunakan sebagai input angka
        ketika type="number" diteruskan ke komponent.
      </p>
      <div className="mt-10">
        <h1 className="mb-6 font-euclidsemi text-xl">Instalasi</h1>
        <PrismCode code={`import { Input } from "@angelineuniverse/design";`} />
      </div>
      <div className="mt-10">
        <h1 className="mb-6 font-euclidsemi text-xl">Penggunaan</h1>
        <InputExample />
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
};

export default ViewInput;
