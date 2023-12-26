import React from "react";
import { CodeBlok, Table } from "../../library";
const ViewTable = () => {
  return (
    <div>
      <p>
        Tabel data adalah struktur data 2 dimensi di mana setiap baris adalah
        item, dan setiap kolom adalah titik data tentang item tersebut.
      </p>
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Instalasi</h1>
      <CodeBlok code={`import { Table } from "@angelineuniverse/design";`} />
      <h1 className="mt-10 mb-6 font-euclidsemi text-xl">Penggunaan</h1>
      <Table
        tableName="example-table"
        isCompact={true}
        column={[
          {
            key: "name",
            title: "Name",
            align: "center",
            datatype: "array",
            child: [{ key: "email" }, { key: "phone" }],
          },
          {
            key: "type",
            title: "Type",
            align: "start",
            datatype: "text",
          },
          {
            key: "description",
            title: "Description",
            align: "end",
            datatype: "text",
          },
          {
            key: "action",
            title: "Action",
            align: "center",
            datatype: "action",
            child: [
              { childtitle: "Lihat", key: "show", childtype: "show" },
              { childtitle: "Delete", key: "delete", childtype: "delete" },
              { childtitle: "Edit", key: "edit", childtype: "edit" },
              {
                childtitle: "Routline",
                key: "outline",
                childtype: "outline",
              },
              {
                childtitle: "Download",
                key: "button",
                childtype: "download",
              },
            ],
          },
        ]}
        data={[
          {
            name: "Anakin Skywalker",
            type: "Car",
            description: "Anakin Skywalker",
            email: "Prop",
            phone: "238294839",
          },
          {
            name: "Anonymouse",
            type: "Motor",
            description: "Anakin Skywalker",
          },
          {
            name: "Nothing",
            type: "Cycle",
            description: "Anakin Skywalker",
          },
        ]}
      />
    </div>
  );
};

export default ViewTable;
