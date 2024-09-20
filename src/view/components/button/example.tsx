import React from "react";
import { Tab, Tabs } from "../../../library";
import Button from "@angelineuniverse/design";
import PrismCode from "../../../utils/prism";
const ViewButtonSize: any = () => {
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
            {/* <Button
              width="block"
              title="Button"
              className="h-full"
              theme="primary"
              size="small"
            /> */}
          </div>
        </Tab>
        <Tab title="Code">
          <PrismCode
            code={`<Button
  width="block"
  title="Button"
  className="h-full"
  theme="primary"
  size="small"
  props={{
    // panggil attribute bawaan button element, example :
    // onChange: () => {}
  }}
/>`}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ViewButtonSize;
