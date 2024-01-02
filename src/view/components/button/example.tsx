import React from "react";
import { Button, Tab, Tabs } from "../../../library";
import PrismCode from "../../../utils/prism";
const ViewButtonSize = () => {
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
            <Button
              label="Button"
              anotherClass="h-full"
              variant="primary"
              size="sm"
            />
          </div>
        </Tab>
        <Tab title="Code">
          <PrismCode
            code={`<Button
  label="Button xxs"
  anotherClass="h-full"
  variant="primary"
  size="xxs"
/>`}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ViewButtonSize;
