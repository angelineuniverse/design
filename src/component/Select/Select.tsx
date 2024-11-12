import React, { Component, ReactNode } from "react";
import { ModelSelect } from "./ModelSelect";
import clsx from "clsx";
import { get, find } from "lodash";

const sizeLabel = {
  small: "text-[10.5px]",
  medium: "text-[13px]",
  large: "text-[15.5px]",
};

const sizeDesc = {
  small: "text-[9.5px]",
  medium: "text-[11px]",
  large: "text-[13.5px]",
};

const sizeInput = {
  small: "text-[10.5px] px-2 placeholder:text-[10.5px]",
  medium: "text-[13px] px-2.5 placeholder:text-[13px]",
  large: "text-[14.5px] px-3 placeholder:text-[14.5px]",
};
const sizeIcon = {
  small: 15,
  medium: 18,
  large: 19,
};
class Select extends Component<ModelSelect> {
  state: Readonly<{
    open: boolean;
    values: any;
  }>;
  constructor(props: ModelSelect) {
    super(props);
    this.state = {
      open: false,
      values: undefined,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside = (e: any) => {
    if (!e.target.classList.contains("selected")) {
      this.setState({
        open: false,
      });
    }
  };
  componentDidMount(): void {
    const keys = this.props.keyValue;
    const value = this.props.value;
    const finds = this.props.value
      ? find(this.props.options, function (a: any) {
          return a[keys] == value;
        })
      : undefined;
    this.setState({
      values: finds ? get(finds, this.props.keyOption) : undefined,
    });
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  render(): ReactNode {
    return (
      <div className={this.props.className}>
        <p
          className={clsx(
            "mb-1.5 font-intermedium tracking-tight inline-block",
            sizeLabel[this.props.size ?? "medium"]
          )}
        >
          {this.props.isRequired && (
            <span className=" text-red-500 font-intersemibold">*</span>
          )}{" "}
          {this.props.label}
        </p>

        <div
          aria-hidden="true"
          className={clsx(
            "border border-gray-400/70 font-interregular rounded-lg block w-full appearance-none",
            "focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400",
            sizeInput[this.props.size ?? "medium"],
            "bg-no-repeat relative flex flex-row items-center justify-between"
          )}
        >
          <input
            type="text"
            className="pt-[7px] pb-[7px] w-full mr-2 focus:outline-none"
            placeholder={this.props.placeholder ?? "Pilih Item"}
            value={this.state.values ?? undefined}
            onKeyDown={(e) => e.preventDefault()}
            onClick={() => {
              if (!this.props.readonly)
                this.setState((prevState: any) => ({
                  open: !prevState["open"],
                }));
            }}
          />
          {!this.props.readonly && this.state.values && this.props.useClear && (
            <div
              className="cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                this.setState({
                  values: "",
                  open: false,
                });
                this.props.onClear
                  ? this.props.onClear(null)
                  : console.log("nothing on clear");
              }}
            >
              <svg
                viewBox="0 0 24 24"
                height={sizeIcon[this.props.size ?? "medium"]}
                width={sizeIcon[this.props.size ?? "medium"]}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
                    fill="#8f8f8f"
                  ></path>
                </g>
              </svg>
            </div>
          )}
          {this.state.open && (
            <div className="rounded-md absolute list-none py-1 top-11 bg-white z-10 left-0 right-0 font-interregular border-gray-400/70 border">
              {this.props.options.map((item, index) => (
                <option
                  className={clsx(
                    "px-2 py-1.5 selected hover:bg-blue-100 border-b border-gray-200 cursor-pointer",
                    sizeInput[this.props.size ?? "medium"],
                    this.props.classNameOption
                  )}
                  key={item[this.props.keyValue] + index}
                  value={item[this.props.keyValue]}
                  onClick={(event: any) => {
                    if (this.props.onClick) {
                      this.props.onClick(event);
                    }
                    if (this.props.onChange) {
                      this.props.onChange!(event);
                    }
                    this.setState({
                      values: item[this.props.keyOption],
                      open: false,
                    });
                  }}
                >
                  {get(item, this.props.keyOption)}
                </option>
              ))}
            </div>
          )}
        </div>
        <div
          className={clsx(
            "text-gray-600/80 mt-1",
            sizeDesc[this.props.size ?? "medium"]
          )}
        >
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Select;
