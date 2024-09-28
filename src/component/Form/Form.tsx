import React, { Component, lazy, Suspense } from "react";
import { ModelForm } from "./ModelForm";
import clsx from "clsx";
import Skeleton from "../Skeleton/Skeleton";

const Checkbox = lazy(() => import("../Checkbox/Checkbox"));
const Input = lazy(() => import("../Input/Input"));
const Select = lazy(() => import("../Select/Select"));
const SelectSearch = lazy(() => import("../SelectSearch/SelectSearch"));

class Form extends Component<ModelForm> {
  state: Readonly<{
    list: undefined | Array<any>;
    openList: boolean;
    search_value: undefined | string;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      list: undefined,
      openList: false,
      search_value: undefined,
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        {!this.props.form && (
          <div
            className={clsx(
              this.props.classNameLoading ?? "grid grid-cols-1 gap-x-2 gap-y-4"
            )}
          >
            {[...Array(this.props.lengthLoading ?? 5)].map(
              (_item: any, index: number) => (
                <Skeleton type="input" key={index + "a"} />
              )
            )}
          </div>
        )}
        <div className={clsx(this.props.className)}>
          {this.props.form?.map((item: any) => (
            <div key={item.key}>
              {(() => {
                switch (item.type) {
                  case "password":
                  case "number":
                  case "text":
                  case "textarea":
                  case "upload":
                  case "time":
                  case "date":
                  case "datetime-local":
                  case "month":
                    return (
                      <Suspense>
                        <Input
                          isRequired={item.isRequired}
                          placeholder={item.placeholder}
                          key={item.key}
                          description={item.description}
                          filename={item.filename}
                          className={item.className}
                          readonly={item.readonly ?? false}
                          defaultValue={item[item.key ?? ""]}
                          label={item.label}
                          accept={item.accept}
                          autosize={item.autosize}
                          type={item.type}
                          onValueChange={(value: any) => {
                            item[item.key!] = value;
                          }}
                          preview_action={item.key}
                          preview={(value: any, key: string) => {
                            this.props.preview_file(key, value);
                          }}
                        />
                      </Suspense>
                    );
                  case "select":
                    return (
                      <Select
                        isRequired={item.isRequired}
                        key={item.key}
                        placeholder={item.placeholder}
                        label={item.label}
                        className={item.className}
                        classNameOption={item.classNameOption}
                        onClick={(event: any) => {
                          item[item.key!] = event.target.value;
                        }}
                        keyValue={item.list?.keyValue}
                        keyOption={item.list?.keyOption}
                        options={item.list?.options}
                      />
                    );
                  case "select-search":
                    return (
                      <SelectSearch
                        isRequired={item.isRequired}
                        key={item.key}
                        className={item.className}
                        readonly={item.readonly ?? false}
                        placeholder={item.placeholder}
                        label={item.label}
                        value={item[item.key] ?? undefined}
                        value_label={
                          this.state.search_value ?? item.value_label
                        }
                        openChildren={this.state.openList}
                        search_method={(event) =>
                          this.props.search_method
                            ? this.props.search_method(event)
                            : console.log("search_method func Nothing")
                        }
                      >
                        <div>
                          {this.state.list && this.state.openList && (
                            <div className="w-full border border-gray-300 rounded-md">
                              {this.state.list?.map((data) => (
                                <option
                                  className="px-3 py-2 selected hover:bg-blue-100 cursor-pointer text-xs"
                                  key={data[item.list.keyValue ?? ""]}
                                  value={data[item.list.keyValue ?? ""]}
                                  onClick={(_event: any) => {
                                    this.props.select_option(
                                      item.key,
                                      data[item.list.keyValue ?? ""]
                                    );
                                    item[item.key] = data[item.list.keyValue];
                                    this.setState({
                                      list: undefined,
                                      openList: false,
                                      search_value:
                                        data[item.list.keyoption] +
                                        " - " +
                                        data[item.list.keyprefix ?? ""],
                                    });
                                  }}
                                >
                                  {data[item.list.keyoption ?? ""]}{" "}
                                  {item.list.keyprefix && (
                                    <> - {data[item.list.keyprefix ?? ""]}</>
                                  )}
                                </option>
                              ))}
                            </div>
                          )}
                        </div>
                      </SelectSearch>
                    );
                  case "checkbox":
                    return (
                      <Suspense>
                        <Checkbox
                          label={item.label}
                          defaultValue={item[item.key ?? ""]}
                          onValueChange={(value: any) => {
                            item[item.key!] = value;
                          }}
                          type={item.checkboxType}
                        />
                      </Suspense>
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
