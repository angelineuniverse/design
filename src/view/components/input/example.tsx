import React from "react";
import { Input, Tab, Tabs } from "../../../library";
import PrismCode from "../../../utils/prism";
const InputExample: any = () => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <Tabs
        tabDirection="vertical"
        tabSpace={"gap-x-2"}
        width="wrap"
        classTitle=" font-euclidsemi"
      >
        <Tab title="Example" className="">
          <div className="rounded-lg border border-gray-200 p-5 flex justify-center items-center gap-x-4 flex-col flex-wrap md:flex-row">
            <Input
              defaultValue={value}
              size="small"
              type="text"
              placeholder="Placeholder input"
              label="Disini Label"
              onValueChange={setValue}
              description="Hallo ini description test di bawah"
            />
          </div>
        </Tab>
        <Tab title="Code">
          <PrismCode
            code={`<Input
    defaultValue={value}
    size="small"
    type="text"
    placeholder="Placeholder input"
    label="Disini Label"
    onValueChange={setValue}
    description="Hallo ini description test di bawah"
/>`}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default InputExample;
