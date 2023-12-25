import React from "react";
import { Model } from "./model";
const Table: React.FC<Model> = (model: Model) => {
  return (
    <div>
      <table key={model.tableName}>
        <thead>
          {model.column.map((element) => (
            <tr>
              <td key={element.key}>{element.title}</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
