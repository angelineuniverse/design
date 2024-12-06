import React, { Component, lazy } from "react";
import { ModelForm } from "./ModelForm";
import clsx from "clsx";
import Skeleton from "../Skeleton/Skeleton";

// const Checkbox = lazy(() => import("../Checkbox/Checkbox"));
// const Input = lazy(() => import("../Input/Input"));
const Select = lazy(() => import("../Select/Select"));
// const SelectSearch = lazy(() => import("../SelectSearch/SelectSearch"));

class Form extends Component<ModelForm> {
  state: Readonly<{
    list: undefined | Array<any>;
    openList: boolean;
    search_value: undefined | string;
    test: string;
  }>;
  constructor(props: any) {
    super(props);
    this.state = {
      list: undefined,
      openList: false,
      search_value: undefined,
      test: "",
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
                  case "select":
                    return (
                      <Select
                        isRequired={item.isRequired}
                        keys={item.key}
                        value={item[item.key]}
                        placeholder={item.placeholder}
                        label={item.label}
                        useClear={item.useClear}
                        description={item.description}
                        readonly={item.readonly ?? false}
                        className={item.className}
                        classNameOption={item.classNameOption}
                        onChange={(event: any) => {
                          if (this.props.onSelect) {
                            this.props.onSelect(event, item.key);
                          }
                        }}
                        onClear={() => {
                          item[item.key] = null;
                        }}
                        onSelected={(value: any) => {
                          item[item.key] = value;
                        }}
                        keyValue={item.list?.keyValue}
                        keyOption={item.list?.keyOption}
                        options={item.list?.options}
                      />
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
