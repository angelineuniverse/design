import React, { Component, ReactNode } from "react";
import { ModelSelect } from "./ModelSelect";
import clsx from "clsx";
import { get } from 'lodash';

const sizeLabel = {
  small: "text-xsm",
  medium: "text-sm",
  large: "text-lg",
};

const sizeInput = {
  small: "text-xsm px-2.5 placeholder:text-xsm",
  medium: "text-sm px-2.5 placeholder:text-sm",
  large: "text-lg px-3 placeholder:text-lg",
};

class Select extends Component<ModelSelect> {
  state: Readonly<{
    open: boolean;
    placeholder: string;
  }>;
  constructor(props: ModelSelect) {
    super(props);
    this.state = {
      open: false,
      placeholder: "Pilih item",
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
    this.setState({ placeholder: this.props.placeholder });
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  render(): ReactNode {
    return (
      <div className={this.props.className}>
        <p
          className={clsx(
            "mb-1.5 text-gray-700 font-intersemibold tracking-tight inline-block",
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
            "border border-gray-400/70 font-interregular rounded-lg block w-full appearance-none px-0",
            "focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400",
            sizeInput[this.props.size ?? "medium"],
            "bg-no-repeat relative"
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")`,
            backgroundPosition: "calc(100% - 0.75rem) center",
          }}
        >
          <p
            className="pt-[9px] pb-[9px]"
            aria-hidden="true"
            onClick={() =>
              this.setState((prevState: any) => ({ open: !prevState["open"] }))
            }
          >
            {this.state.placeholder ?? "Pilih Item"}
          </p>
          {this.state.open && (
            <div className="rounded-md absolute list-none py-1 top-11 bg-white z-10 left-0 right-0 font-interregular border-gray-400/70 border">
              {this.props.options.map((item) => (
                <option
                  className={clsx(
                    "px-2 py-1.5 selected hover:bg-blue-100 border-b border-gray-200 cursor-pointer text-sm",
                    this.props.classNameOption
                  )}
                  key={item[this.props.keyValue]}
                  value={item[this.props.keyValue]}
                  onClick={(event: any) => {
                    this.props.onClick
                      ? this.props.onClick(event)
                      : console.log("onClick func nothing");
                    this.setState({
                      placeholder: item[this.props.keyOption],
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
      </div>
    );
  }
}

export default Select;
