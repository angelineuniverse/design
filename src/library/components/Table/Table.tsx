import React from "react";
import { Model } from "./model";
import clsx from "clsx";
import Button from "../Button";
import Tag from "../Tag";
const Table: React.FC<Model> = (model: Model) => {
  const ColumnAlign = {
    start: "text-start",
    center: "text-center",
    justify: "text-justify",
    end: "text-end",
  };
  return (
    <div className="rounded-md border-gray-400/45 border">
      <table
        key={model.tableName}
        aria-describedby={model.tableName}
        className={clsx(
          "w-full border-collapse table-fixed",
          model.isBorder ? "border" : "",
          model.isCompact ? "text-xs" : "text-sm"
        )}
      >
        <thead>
          <tr className={clsx("bg-[#f4f6f8] border-b border-b-slate-400/45")}>
            {model.column.map((element) => (
              <th
                className={clsx(
                  model.columnstyle,
                  "border-b-slate-600 whitespace-nowrap",
                  "py-2 px-3 text-gray-800",
                  ColumnAlign[element.align!],
                  model.isBorder ? "border border-gray-300" : "",
                  element.width ?? "",
                  element.className
                )}
                key={element.key}
                {...element.props!}
              >
                {element.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {model.data.map((element) => (
            <tr key={element.id} className={clsx("border-b break-words")}>
              {model.column.map((item) => (
                <td key={item.key} className={clsx("p-2.5", item.rowStyle)}>
                  {(() => {
                    switch (item.datatype) {
                      case "array_code":
                        return (
                          <div className="flex flex-wrap justify-start gap-2">
                            {element[item.key].map((child: string) => (
                              <Tag type="code" value={child} key={child} />
                            ))}
                          </div>
                        );
                      case "array":
                        return (
                          <div className="gap-y-2">
                            <p className="mb-1 pb-1 border-b font-medium border-b-primary">
                              {element[item.key]}
                            </p>
                            {item.child!.map((itemChild) => (
                              <p
                                className="text-xxs font-regular text-gray-600"
                                key={itemChild.key}
                              >
                                {element[itemChild.key]}
                              </p>
                            ))}
                          </div>
                        );
                      case "action":
                        return (
                          <div className="text-center md:flex justify-center gap-x-2">
                            {item.child!.map((child) => (
                              <div key={child.key}>
                                {(() => {
                                  switch (child.childtype) {
                                    case "show":
                                      return (
                                        <Button
                                          label={child.childtitle!}
                                          size="xxs"
                                          variant="primary"
                                        />
                                      );
                                    case "edit":
                                      return (
                                        <Button
                                          label={child.childtitle!}
                                          size="xxs"
                                          variant="edit"
                                        />
                                      );
                                    case "delete":
                                      return (
                                        <Button
                                          label={child.childtitle!}
                                          size="xxs"
                                          variant="secondary"
                                        />
                                      );
                                    case "download":
                                      return (
                                        <Button
                                          label={child.childtitle!}
                                          size="xxs"
                                          variant="error"
                                          useIcon={true}
                                          iconProps={{
                                            icon: "download",
                                            width: 12,
                                            height: 12,
                                            color: "#ffffff",
                                          }}
                                          iconDirection="right"
                                        />
                                      );
                                    default:
                                      return (
                                        <Button
                                          label={child.childtitle!}
                                          size="xxs"
                                          variant="outline"
                                        />
                                      );
                                  }
                                })()}
                              </div>
                            ))}
                          </div>
                        );
                      default:
                        return <p>{element[item.key]}</p>;
                    }
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
