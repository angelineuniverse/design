import React from "react";
import { Model } from "./model";
import Icon from "../Icon";
const CodeBlok: React.FC<Model> = (model: Model) => {
  const [copy, setCopy] = React.useState(false);
  function CopytoClipboard() {
    setCopy(true);
    navigator.clipboard.writeText(model.code);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }
  return (
    <div>
      <div
        className={`${
          model.padding ?? "p-3"
        } rounded-lg text-sm bg-slate-50 font-mono text-gray-900 flex justify-start`}
      >
        <p className="mr-3">{model.code}</p>
        <span
          className="ml-auto text-xs font-euclidregular cursor-pointer mb-auto"
          onClick={() => CopytoClipboard()}
        >
          {copy ? (
            <Icon width={20} height={20} icon="check" />
          ) : (
            <Icon width={15} height={15} icon="copy" />
          )}
        </span>
      </div>
    </div>
  );
};

export default CodeBlok;
