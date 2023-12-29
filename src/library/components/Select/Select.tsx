import React from "react";
import { Model } from "./model";

const Select: React.FC<Model> = (model: Model) => {
  return (
    <div>
      <select key={model.key}>
        {model.list.map((item) => (
          <option key={item.key}>{item.title}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
