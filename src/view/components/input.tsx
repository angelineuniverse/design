import React, { useState } from "react";
import { Input } from "../../library";
import PrismCode from "../../utils/prism";

const ViewInput = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <p className="text-justify">
        Gunakan input teks untuk memungkinkan pengguna memasukkan teks bentuk
        bebas yang pendek. Input ini juga dapat digunakan sebagai input angka
        ketika type="number" diteruskan ke komponen.
      </p>
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Instalasi</h1>
      <PrismCode code={`import { Input } from "@angelineuniverse/design";`} />
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Penggunaan</h1>
      <Input
        value={value}
        size="xs"
        width="wrap"
        max={10}
        type="number"
        placeholder="Placeholder input"
        label="Label Example"
        labelPosition="vertical"
        onValueChange={setValue}
        description="Hallo ini descriotion test di bawah"
      />
      <p>{value}</p>
    </div>
  );
};

export default ViewInput;
