import React, { Component, ReactNode, Suspense } from "react";
import { ResponseColumn, ModelTable } from "./model";
import clsx from "clsx";
import { get } from "lodash";
import { format } from "date-fns";
import Icon from "../Icon/Icon";
const Button = React.lazy(() => import("../Button/Button"));
const Skeleton = React.lazy(() => import("../Skeleton/Skeleton"));
const Pagination = React.lazy(() => import("../Pagination/Pagination"));

const coloring: any = {
  success: " bg-emerald-100  text-emerald-700",
  error: " bg-rose-100  text-rose-700",
  warning: " bg-yellow-100  text-yellow-700",
  info: " bg-blue-100  text-blue-700",
};
class Table extends Component<ModelTable> {
  previewFile(event: any) {
    const link = window.URL.createObjectURL(event);
    window.open(link, "_blank");
  }
  render(): ReactNode {
    return (
      <div>
        <div className={clsx("block", this.props.className)}>
          <div className="flex justify-end items-center w-full">
            {this.props.useBack && (
              <Suspense>
                <Icon
                  icon={"arrow_left"}
                  width={20}
                  height={20}
                  className="mr-3 cursor-pointer"
                  onClick={this.props.onBack}
                />
              </Suspense>
            )}
            {this.props.useHeadline && (
              <div className="block mr-auto">
                <h1 className=" font-interbold text-lg">
                  {this.props?.title ?? "Table Headline"}
                </h1>
                <p className=" font-interregular text-xs">
                  {this.props?.description ?? "Lihat semua informasi"}
                </p>
              </div>
            )}
            {this.props.useCreate && (
              <Button
                title={this.props.createTitle ?? "Buat Baru"}
                theme="primary"
                size="small"
                width="block"
                isLoading={this.props.loadingCreate}
                onClick={this.props.create}
              />
            )}
          </div>
          {this.props.extraHeader}
          <div className="border border-gray-300 md:rounded-md mt-3 overflow-x-auto">
            <table
              aria-describedby="dataTable"
              className={clsx("divide-y divide-gray-300 min-w-full")}
            >
              <thead className=" font-interbold bg-gradient-to-b from-gray-200 to-gray-200">
                {this.props.column.length < 1 && (
                  <tr>
                    <th className="py-3 text-center px-4">
                      <Skeleton type="text" />
                    </th>
                    <th className="py-3 text-center px-4">
                      <Skeleton type="text" />
                    </th>
                    <th className="py-3 text-center px-4">
                      <Skeleton type="text" />
                    </th>
                    <th className="py-3 text-center px-4">
                      <Skeleton type="text" />
                    </th>
                  </tr>
                )}
                {this.props.column.length > 0 && (
                  <tr className=" uppercase">
                    {!this.props.notUseNumberRow && (
                      <th className="py-3 text-center text-xs px-4">No</th>
                    )}
                    {this.props.column?.map((e: any) => {
                      return (
                        <th
                          key={e.name + "-" + e.type}
                          className={clsx(
                            "py-3 text-xs px-4",
                            e.type === "action" ||
                              e.type === "status" ||
                              e.type === "action_status"
                              ? "text-center"
                              : "text-start",
                            e.classNameRow
                          )}
                        >
                          {e.type === "action" ? "action" : e.name}
                        </th>
                      );
                    })}
                  </tr>
                )}
              </thead>
              <tbody>
                {this.props.column.length < 1 &&
                  [...Array(this.props.skeletonRow ?? 4)].map((index) => {
                    return (
                      <Suspense key={index + "key"}>
                        <tr>
                          <td className="py-3 text-center px-4">
                            <Skeleton type="random" />
                          </td>
                          <td className="py-3 text-center px-4">
                            <Skeleton type="random" />
                          </td>
                          <td className="py-3 text-center px-4">
                            <Skeleton type="random" />
                          </td>
                          <td className="py-3 text-center px-4">
                            <Skeleton type="random" />
                          </td>
                        </tr>
                      </Suspense>
                    );
                  })}
                {this.props.data?.map((row, index) => {
                  return (
                    <tr key={"item-" + (row.id ?? index + 1)}>
                      {!this.props.notUseNumberRow && (
                        <td className="py-2.5 text-xs text-center font-intersemibold px-4 border-b border-gray-300">
                          {index + 1}
                        </td>
                      )}
                      {this.props.column?.map((col: ResponseColumn) => {
                        return (
                          <td
                            key={`item-row-${col.type}-${col.key ?? col.name}-${
                              index + 1
                            }-${Math.random()}`}
                            className={clsx(
                              "py-2.5 text-[13px] text-start font-interregular px-4 border-b border-gray-300",
                              col.classNameRow
                            )}
                          >
                            {col.type === "array" && (
                              <div>
                                {col.child?.map(
                                  (item: ResponseColumn, n: number) => {
                                    return (
                                      <div
                                        key={`${item.key}-${item.type}-${
                                          col.name
                                        }-${index + n + 1}`}
                                        className={clsx("w-auto")}
                                      >
                                        {item.type === "string" && (
                                          <p className={clsx(item?.className)}>
                                            {get(row, item.key)}
                                          </p>
                                        )}
                                        {item.type === "status" && (
                                          <div className="text-left">
                                            <p
                                              className={clsx(
                                                "rounded-xl py-1 px-2.5 text-center font-intermedium w-fit",
                                                coloring[
                                                  row[item?.key ?? ""]?.color ??
                                                    "success"
                                                ]
                                              )}
                                            >
                                              {get(row, item.key)?.title}
                                            </p>
                                          </div>
                                        )}
                                        {item.type === "date" && (
                                          <span className={item?.className}>
                                            {format(
                                              get(row, item.key),
                                              "dd MMMM yyyy"
                                            )}
                                          </span>
                                        )}
                                        {item.type === "datetime" && (
                                          <span className={item?.className}>
                                            {format(
                                              get(row, item.key),
                                              "dd MMMM yyyy HH:mm"
                                            )}
                                          </span>
                                        )}
                                        {item.type === "object" && (
                                          <div
                                            className={clsx(
                                              "flex flex-wrap h-fit w-fit items-center text-pretty gap-1",
                                              item.className
                                            )}
                                          >
                                            {item.child?.map(
                                              (
                                                itemx: ResponseColumn,
                                                indexs: number
                                              ) => {
                                                return (
                                                  <div
                                                    key={`${itemx.key}-${
                                                      itemx.type
                                                    }-${col.name}-${
                                                      index + indexs + 1
                                                    }`}
                                                  >
                                                    {itemx.type ===
                                                      "string" && (
                                                      <span
                                                        className={
                                                          itemx?.className
                                                        }
                                                      >
                                                        {get(row, itemx.key)}
                                                      </span>
                                                    )}
                                                    {itemx.type === "date" && (
                                                      <span
                                                        className={
                                                          itemx?.className
                                                        }
                                                      >
                                                        {format(
                                                          get(row, itemx.key),
                                                          "dd MMMM yyyy"
                                                        )}
                                                      </span>
                                                    )}
                                                    {itemx.type ===
                                                      "datetime" && (
                                                      <span
                                                        className={
                                                          itemx?.className
                                                        }
                                                      >
                                                        {format(
                                                          get(row, itemx.key),
                                                          "dd MMMM yyyy HH:mm"
                                                        )}
                                                      </span>
                                                    )}
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        )}
                                        {item.type === "date-prefix" && (
                                          <p>
                                            <span
                                              className={item.classNameprefix}
                                            >
                                              {item.prefix}
                                            </span>
                                            <span>
                                              {format(
                                                get(row, item.key),
                                                "dd MMMM yyyy"
                                              )}
                                            </span>
                                          </p>
                                        )}
                                        {item.type === "date-prefix-custom" && (
                                          <p className={item.className}>
                                            <span
                                              className={item.classNameprefix}
                                            >
                                              {item.prefix}
                                            </span>
                                            <span>
                                              {format(
                                                get(row, item.key),
                                                item?.dateFormat ??
                                                  "dd MMMM yyyy"
                                              )}
                                            </span>
                                          </p>
                                        )}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            )}
                            {col.type === "object" && (
                              <div
                                className={clsx(
                                  "flex flex-wrap h-fit w-fit items-center text-pretty gap-1",
                                  col.className
                                )}
                              >
                                {col.child?.map(
                                  (item: ResponseColumn, j: number) => {
                                    return (
                                      <div
                                        key={`${item.key}-${item.type}-${
                                          index + j + 1
                                        }`}
                                        className="w-fit"
                                      >
                                        {item.type === "string" && (
                                          <span className={item?.className}>
                                            {get(row, item.key)}
                                          </span>
                                        )}
                                        {item.type === "date" && (
                                          <span className={item?.className}>
                                            {format(
                                              get(row, item.key),
                                              "dd MMMM yyyy"
                                            )}
                                          </span>
                                        )}
                                        {item.type === "datetime" && (
                                          <span className={item?.className}>
                                            {format(
                                              get(row, item.key),
                                              "dd MMMM yyyy HH:mm"
                                            )}
                                          </span>
                                        )}
                                        <span>
                                          {" "}
                                          {j !== (col?.child?.length ?? 0) - 1
                                            ? "-"
                                            : " "}
                                        </span>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            )}
                            {col.type === "date" && (
                              <span>
                                {format(row[col?.key ?? ""], "dd MMMM yyyy")}
                              </span>
                            )}
                            {col.type === "datetime" && (
                              <p
                                className={clsx(
                                  "min-w-[160px]",
                                  col?.className
                                )}
                              >
                                {format(
                                  get(row, col.key),
                                  "dd MMMM yyyy HH:mm"
                                )}
                              </p>
                            )}
                            {col.type === "date-prefix" && (
                              <p>
                                <span className={col.classNameprefix}>
                                  {col.prefix}
                                </span>
                                <span>
                                  {format(get(row, col.key), "dd MMMM yyyy")}
                                </span>
                              </p>
                            )}
                            {col.type === "date-prefix-custom" && (
                              <p>
                                <span className={col.classNameprefix}>
                                  {col.prefix}
                                </span>
                                <span>
                                  {format(
                                    get(row, col.key),
                                    col?.dateFormat ?? "dd MMMM yyyy"
                                  )}
                                </span>
                              </p>
                            )}
                            {col.type === "string" && (
                              <p className={`text-pretty ${col.className}`}>
                                {get(row, col.key) ?? "-"}
                              </p>
                            )}
                            {col.type === "listtag" && (
                              <p className="">
                                {row[col.key]?.map((item: any, i: number) => (
                                  <span
                                    key={col.key + "-" + i}
                                    className={clsx(
                                      "w-fit rounded-md mr-1.5 mb-1.5 inline-block",
                                      item
                                        ? "px-1.5 pb-0.5 bg-[#f0f0f0] border border-[#b6b6b6]"
                                        : ""
                                    )}
                                  >
                                    {item}
                                  </span>
                                ))}
                              </p>
                            )}
                            {col.type === "currency" && (
                              <p className={col.className}>
                                {parseInt(get(row, col.key)).toLocaleString(
                                  col?.localecurrency ?? "id-ID",
                                  {
                                    style: "currency",
                                    currency: col?.currency ?? "IDR",
                                    minimumFractionDigits:
                                      col?.minimumFractionDigits ?? 0,
                                  }
                                ) ?? "-"}
                              </p>
                            )}
                            {col.type === "status" && (
                              <div className={`text-center flex gap-5 justify-center ${col.className}`}>
                                <p
                                  className={clsx(
                                    "rounded-xl py-1 px-2.5 text-center font-intermedium w-fit",
                                    coloring[
                                      row[col?.key ?? ""]?.color ?? "success"
                                    ]
                                  )}
                                >
                                  {get(row, col.key)?.title}
                                </p>
                              </div>
                            )}
                            {col.type === "action" && (
                              <div className="flex justify-center flex-row gap-x-2 px-4">
                                {col.ability?.map((ability: string) => {
                                  return (
                                    <Suspense key={`${ability}-${index + 1}`}>
                                      {ability === "DELETE" && (
                                        <Suspense>
                                          <Button
                                            title="Hapus"
                                            theme="error"
                                            size="extrasmall"
                                            width="block"
                                            onClick={() =>
                                              this.props.delete!(row)
                                            }
                                          />
                                        </Suspense>
                                      )}
                                      {ability === "SHOW" && (
                                        <Button
                                          title="Lihat"
                                          theme="warning"
                                          size="extrasmall"
                                          width="block"
                                          onClick={() => this.props.show!(row)}
                                        />
                                      )}
                                      {ability === "EDIT" && (
                                        <Button
                                          title="Ubah"
                                          theme="success"
                                          size="extrasmall"
                                          width="block"
                                          onClick={() => this.props.edit!(row)}
                                        />
                                      )}
                                      {ability === "ADD" && (
                                        <Button
                                          title="Tambah"
                                          theme="primary"
                                          size="extrasmall"
                                          width="block"
                                          onClick={() => this.props.add!(row)}
                                        />
                                      )}
                                    </Suspense>
                                  );
                                })}
                              </div>
                            )}
                            {col.type === "action_status" && (
                              <div className="flex justify-center flex-row gap-x-2 px-4">
                                {col.ability?.map((ability: any) => {
                                  return (
                                    <Suspense
                                      key={`${ability?.key}-${index + 1}`}
                                    >
                                      {get(row, ability.show_by) &&
                                        ability.show_value.find(
                                          (x: any) =>
                                            x === get(row, ability.show_by)
                                        ) && (
                                          <Button
                                            className="uppercase"
                                            title={ability?.title}
                                            theme={ability?.theme ?? "primary"}
                                            size="extrasmall"
                                            width="block"
                                            onClick={() =>
                                              this.props.onEvent?.(
                                                row,
                                                ability.key
                                              )
                                            }
                                          />
                                        )}
                                    </Suspense>
                                  );
                                })}
                              </div>
                            )}
                            {col.type === "custom" && (
                              <div>{this.props.custom?.(row, col?.key)}</div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {this.props.column.length > 0 && this.props.data?.length === 0 && (
              <p className="text-center my-3 font-interregular capitalize text-sm text-gray-500">
                Tidak ada informasi
              </p>
            )}
          </div>
          <div className="mt-5 flex justify-end">
            <Suspense>
              <Pagination
                {...this.props.property}
                lastPage={this.props.lastPage}
                firstPage={this.props.firstPage}
                changePage={(event: number) => {
                  this.props.changePage?this.props.changePage(event) : console.log("change page nothing");
                }}
              />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
