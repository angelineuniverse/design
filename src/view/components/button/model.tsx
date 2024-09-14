import { Tag } from "../../../library";
import React from "react";
import { ResponseColumn } from "../../../library/components/Table/model";

export const tableColumn: Array<ResponseColumn> = [
  {
    key: "attr",
    type: "string",
    name: "Attribute",
    className: "text-start font-mono",
  },
  {
    key: "type",
    name: "Type",
    type: "list",
    className: "font-mono",
  },
  {
    key: "variant",
    name: "Variant",
    className: "font-mono mr-1",
    classNameRow: "max-w-32",
    type: "list",
  },
  {
    key: "desc",
    type: "string",
    name: "Deskripsi",
    className: "font-euclidregular",
  },
  {
    key: "default",
    name: "Default",
    type: "list",
    className: "font-mono",
  },
];

export const tableData: Array<any> = [
  {
    attr: (
      <span>
        title
        {/* <Tag
          type="code"
          value="Required"
          className="bg-red-100 border-red-500 text-red-500 font-euclidmedium mt-1"
        /> */}
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
    variant: ["full", "block"],
    desc: "Atur width dari Button apakah ingin sepanjang text pada Label atau ingin full width",
    default: ["block"],
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
    variant: ["extrasmall", "small", "medium", "large"],
    desc: "Ukuran button yang ingin dapat sesuaikan dengan kebutuhan design kamu",
    default: ["extrasmall"],
  },
  {
    attr: "theme",
    type: ["string"],
    variant: ["primary", "secondary", "outline", "error", "edit"],
    desc: [
      <>
        Kamu dapat menggunakan style pada button sesuai dengan theme. atau
        gunakan custom style dengan attribute{" "}
        <Tag type="code" value="className" />
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
        <Tag type="code" value="useIcon" /> dan juga{" "}
        <Tag type="code" value="iconProps" /> secara bersamaan
      </span>
    ),
    default: ["false"],
  },
  {
    attr: "isDisable",
    type: ["boolean"],
    variant: ["true", "false"],
    desc: (
      <span>
        Gunakan <Tag type="code" value="isDisable" /> untuk menutup action klik
        pada button
      </span>
    ),
    default: ["false"],
  },
  {
    attr: "className",
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
