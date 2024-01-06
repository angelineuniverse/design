import { Tag } from "../../../library";
import { Columns } from "../../../library/components/Table/model";
import React from "react";

export const tableColumn: Array<Columns> = [
  {
    key: "attr",
    title: "Attribute",
    rowStyle: "font-mono",
    align: "start",
    width: "w-20",
  },
  {
    key: "type",
    title: "Type",
    datatype: "array_code",
    align: "start",
    width: "w-[100px]",
  },
  {
    key: "variant",
    title: "Variant",
    datatype: "array_code",
    width: " w-24",
  },
  { key: "desc", title: "Deskripsi", width: "w-40" },
  {
    key: "default",
    title: "Default",
    datatype: "array_code",
    width: "w-20",
  },
];

export const tableData: Array<any> = [
  {
    attr: (
      <span>
        value{" "}
        <Tag
          type="code"
          value="Required"
          className="bg-red-100 border-red-500 text-red-500 font-euclidmedium"
        />
      </span>
    ),
    type: ["any"],
    variant: [],
    desc: "Value adalah output yang dihasilkan dari Input yang kamu buat",
    default: [],
  },
  {
    attr: (
      <span>
        type{" "}
        <Tag
          type="code"
          value="Required"
          className="bg-red-100 border-red-500 text-red-500 font-euclidmedium"
        />
      </span>
    ),
    type: ["string"],
    variant: ["text", "number", "password"],
    desc: "Type adalah apa yang ingin kamu atur saat pengguna memasukan nilai pada box Input, secara default type pada input harus di deklarasikan",
    default: [],
  },
  {
    attr: (
      <span>
        size{" "}
        <Tag
          type="code"
          value="Required"
          className="bg-red-100 border-red-500 text-red-500 font-euclidmedium"
        />
      </span>
    ),
    type: ["string"],
    variant: ["xs", "sm", "lg"],
    desc: "Size menunjukan ukuran dari box Input yang dapat kamu sesuaikan dengan design yang kamu buat.",
    default: ["xs"],
  },
  {
    attr: "max",
    type: ["number"],
    variant: [],
    desc: (
      <>
        max berarti panjang character dari nilai yang dimasukan oleh pengguna,
        dan perlu di ingat max hanya berpengaruh apabila{"  "}
        <Tag type="code" value="type='text'" />
      </>
    ),
    default: [999],
  },
  {
    attr: "label",
    type: ["string"],
    variant: [],
    desc: [
      "Label adalah tanda pengenal dari box Input dan menunjukan penggunaan Input yang kamu gunakan",
    ],
    default: [],
  },
  {
    attr: "width",
    type: ["string"],
    variant: ["wrap", "block"],
    desc: (
      <span>
        Apabila kamu ingin box input memiliki panjang sepanjang box form yang
        kamu buat, gunakan {"  "}
        <Tag type="code" value="width='block'" /> , tapi kamu juga dapat atur
        panjang box Input secara default dengan mengatur{"  "}
        <Tag type="code" value="width='wrap'" />
      </span>
    ),
    default: ["false"],
  },
  {
    attr: "isRequired",
    type: ["boolean"],
    variant: ["true", "false"],
    desc: "Kamu dapat munculkan tanda bintang berwarna merah disebelah label dan membuat box Input harus di isi.",
    default: ["false"],
  },
  {
    attr: "isError",
    type: ["boolean"],
    variant: ["true", "false"],
    desc: [
      <>
        Kamu dapat mengubah tampilan box Input menjadi seperti terjadi error,
        namun kamu harus mengatur juga attribute
        <Tag type="code" value="isErrorDescription" /> {"  "} untuk dapat
        menggubah tampilan box Input
      </>,
    ],
    default: ["false"],
  },
  {
    attr: "isErrorDescription",
    type: ["string"],
    variant: [],
    desc: "Kamu dapat menampilkan informasi error untuk pengguna agar mereka mengetahui kesalahan",
    default: [],
  },
  {
    attr: "labelPosition",
    type: ["string"],
    variant: ["horizontal", "vertical"],
    desc: "Kamu dapat mengatur posisi antara label dan box Input",
    default: ["vertical"],
  },
  {
    attr: "placeholder",
    type: ["string"],
    variant: [],
    desc: "Tampilkan informasi bantuan didalam box Input yang kamu gunakan",
    default: [],
  },
  {
    attr: "description",
    type: ["string"],
    variant: [],
    desc: "Informasi bantuan yang lebih lengkap kepada pengguna, kamu dapat gunakan attribute description",
    default: [],
  },
  {
    attr: "onChange",
    type: ["React.ChangeEventHandler"],
    variant: [],
    desc: "Kamu dapat mengembalikan nilai pada setiap aksi yang diberikan didalam box Input",
    default: [],
  },
  {
    attr: "onValueChange",
    type: ["any"],
    variant: [],
    desc: "Kamu dapat mengembalikan nilai langsung tanpa menggunakan perintah tambahan",
    default: [],
  },
  {
    attr: "props",
    type: ["InputHTMLAttributes"],
    variant: [],
    desc: "Apabila kamu ingin menggunakan attribute lain dari box Input kamu bisa gunakan Props",
    default: [],
  },
];
