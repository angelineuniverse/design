import React from "react";
import { Button, Table } from "../../library";
import PrismCode from "../../utils/prism";
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
      <PrismCode code={`import { Button } from "@angelineuniverse/design";`} />
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Penggunaan</h1>
      <div className="flex justify-start gap-x-2">
        <Button
          label="Edit"
          variant="primary"
          size="xxs"
          isLoading={true}
          iconProps={{
            width: 12,
            height: 12,
            icon: "loading",
            color: "#fff",
            props: {
              className: "animate-spin mr-1",
            },
          }}
        />
        <Button label="Edit" variant="secondary" size="xxs" />
        <Button label="Edit" variant="outline" size="xxs" />
        <Button label="Edit" variant="edit" size="xxs" />
        <Button label="Edit" variant="error" size="xxs" />
      </div>
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Props</h1>
      <Table
        tableName="props"
        columnstyle="font-euclidsemi text-xs"
        isCompact={true}
        column={[
          {
            key: "attr",
            title: "Attribute",
            rowStyle: "font-mono",
            align: "start",
            width: "w-28",
          },
          {
            key: "type",
            title: "Type",
            datatype: "array_code",
            align: "start",
            width: "w-28",
          },
          {
            key: "variant",
            title: "Variant",
            datatype: "array_code",
            width: " w-32",
          },
          { key: "desc", title: "Deskripsi" },
          {
            key: "default",
            title: "Default",
            datatype: "array_code",
            width: "w-20",
          },
        ]}
        data={[
          {
            attr: "label",
            type: ["string"],
            variant: [],
            desc: "Label adalah text content pada Button yang menjadi pengenal aksi pada Button",
            default: [],
          },
          {
            attr: "width",
            type: ["string"],
            variant: ["wrap", "block"],
            desc: "Atur panjang dari Button apakah ingin sepanjang text pada Label atau ingin full width",
            default: ["wrap"],
          },
          {
            attr: "type",
            type: ["string"],
            variant: ["button", "submit"],
            desc: "Label adalah text content pada Button yang menjadi pengenal aksi pada Button",
            default: ["button"],
          },
          {
            attr: "size",
            type: ["string"],
            variant: ["xxs", "xs", "sm", "lg", "xl"],
            desc: "Label adalah text content pada Button yang menjadi pengenal aksi pada Button",
            default: ["xxs"],
          },
          {
            attr: "variant",
            type: ["string"],
            variant: ["primary", "secondary", "outline", "error", "edit"],
            desc: "Label adalah text content pada Button yang menjadi pengenal aksi pada Button",
            default: ["primary"],
          },
          {
            attr: "isLoading",
            type: ["boolean"],
            variant: ["true", "false"],
            desc: "Munculkan animasi loading sebagai prefix pada Button",
            default: ["false"],
          },
          {
            attr: "useIcon",
            type: ["boolean"],
            variant: ["true", "false"],
            desc: "Munculkan icon pada Button",
            default: ["false"],
          },
          {
            attr: "iconDirection",
            type: ["string"],
            variant: ["left", "right"],
            desc: "Munculkan prefix atau surfix icon pada Button",
            default: [],
          },
          {
            attr: "iconProps",
            type: ["ModelIcon"],
            variant: [],
            desc: "Panggil icon yang ingin kamu pakai sesuai dengan component icon",
            default: [],
          },
          {
            attr: "prefix",
            type: ["React.ReactNode"],
            variant: [],
            desc: "Gunakan custom prefix pada button",
            default: [],
          },
          {
            attr: "anotherClass",
            type: ["string"],
            variant: [],
            desc: "Gunakan custom className pada Button apabila kamu ingin menggunakan style sendiri",
            default: [],
          },
          {
            attr: "props",
            type: ["React.ButtonHTMLAttributes"],
            variant: ["React.ButtonHTMLAttributes"],
            desc: "Apabila kamu ingin menggunakan attribute lain dari tag Button kamu bisa gunakan Props",
            default: [],
          },
        ]}
      />
    </div>
  );
}

export default ViewButton;
