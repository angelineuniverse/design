import { Link } from "react-router-dom";
import { Tag } from "../../../library";
// import { Columns } from "../../../library/components/Table/model";
import React from "react";

// export const tableColumn: Array<Columns> = [
//   {
//     key: "attr",
//     title: "Attribute",
//     rowStyle: "font-mono",
//     align: "start",
//     width: "w-20",
//   },
//   {
//     key: "type",
//     title: "Type",
//     datatype: "array_code",
//     align: "start",
//     width: "w-[80px]",
//   },
//   {
//     key: "variant",
//     title: "Variant",
//     datatype: "array_code",
//     width: " w-24",
//   },
//   { key: "desc", title: "Deskripsi", width: "w-40" },
//   {
//     key: "default",
//     title: "Default",
//     datatype: "array_code",
//     width: "w-20",
//   },
// ];

export const tableData: Array<any> = [
  {
    attr: (
      <span>
        label{" "}
        <Tag
          type="code"
          value="Required"
          className="bg-red-100 border-red-500 text-red-500 font-euclidmedium"
        />
      </span>
    ),
    type: ["string"],
    variant: [],
    desc: "Label adalah text content pada Button yang menjadi pengenal aksi pada Button",
    default: [],
  },
  {
    attr: "width",
    type: ["string"],
    variant: ["wrap", "block"],
    desc: "Atur width dari Button apakah ingin sepanjang text pada Label atau ingin full width",
    default: ["wrap"],
  },
  {
    attr: "type",
    type: ["string"],
    variant: ["button", "submit"],
    desc: "Type button saat melakukan aksi",
    default: ["button"],
  },
  {
    attr: "size",
    type: ["string"],
    variant: ["xxs", "xs", "sm", "lg", "xl"],
    desc: "Ukuran button yang ingin dapat sesuaikan dengan kebutuhan design kamu",
    default: ["xxs"],
  },
  {
    attr: "variant",
    type: ["string"],
    variant: ["primary", "secondary", "outline", "error", "edit"],
    desc: [
      <>
        Kamu dapat menggunakan style pada button sesuai dengan variant. atau
        gunakan custom style dengan attribute{" "}
        <Tag type="code" value="anotherClass" />
      </>,
    ],
    default: ["primary"],
  },
  {
    attr: "isLoading",
    type: ["boolean"],
    variant: ["true", "false"],
    desc: (
      <span>
        Munculkan animasi loading sebagai prefix pada Button, kamu bisa custom
        icon loading nya dengan menambahkan attribute{" "}
        <Tag type="code" value="useIcnn" /> dan juga{" "}
        <Tag type="code" value="iconProps" /> secara bersamaan
      </span>
    ),
    default: ["false"],
  },
  {
    attr: "useIcon",
    type: ["boolean"],
    variant: ["true", "false"],
    desc: (
      <span>
        Munculkan icon pada Button. Pastikan kamu juga memanggil attribute{" "}
        <Tag type="code" value="iconProps" /> untuk mengatur icon yang akan di
        pakai
      </span>
    ),
    default: ["false"],
  },
  {
    attr: "iconDirection",
    type: ["string"],
    variant: ["left", "right"],
    desc: [
      <>
        Munculkan prefix atau surfix icon pada Button, namun pastikan attribute
        <Tag type="code" value="useIcon={true}" />
      </>,
    ],
    default: [],
  },
  {
    attr: "iconProps",
    type: ["ModelIcon"],
    variant: [],
    desc: [
      <>
        Panggil icon yang ingin kamu pakai sesuai dengan component icon, lihat{" "}
        <Link
          to={"/component/icon"}
          className=" font-euclidmedium text-secondary underline"
        >
          Component Icon
        </Link>
      </>,
    ],
    default: [],
  },
  {
    attr: "prefix",
    type: ["ReactNode"],
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
    type: ["ButtonHTMLAttributes"],
    variant: [],
    desc: "Apabila kamu ingin menggunakan attribute lain dari tag Button kamu bisa gunakan Props",
    default: [],
  },
];
