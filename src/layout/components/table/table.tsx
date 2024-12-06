import React, { Component } from "react";
import Table from "../../../components/Table";

class Tables extends Component {
  render() {
    return (
      <div>
        <Table
          column={[
            { name: "Title", type: "string", key: "title", useSort: true },
            { name: "Desc", type: "string", key: "desc", useSort: true },
            { name: "Desc 1", type: "string", key: "desc" },
            { name: "Desc 2", type: "string", key: "desc_one" },
            { name: "Desc 3", type: "string", key: "desc_two" },
            { name: "Desc 4", type: "string", key: "desc_four" },
            { name: "Desc 5", type: "string", key: "desc_five" },
          ]}
          data={[
            {
              title: "Informasi",
              desc: "Hallo World",
              desc_four:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
              desc_two:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
              desc_one:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
              desc_five:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            },
            { title: "Informasi", desc: "Apa kabar" },
          ]}
          property={{
            currentPage: 1,
            totalPage: 1,
            countItem: 10,
            totalItem: 2,
          }}
          classNameTable="w-[120%]"
          useCreate={false}
          useHeadline={false}
          onSort={(type, key) => {
            console.log(type, key);
          }}
        />
      </div>
    );
  }
}

export default Tables;
