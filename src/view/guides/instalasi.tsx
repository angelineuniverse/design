import React from "react";
import { Tab, Tabs } from "../../library";
import PrismCode from "../../utils/prism";
import { Link } from "react-router-dom";

const ViewInstalasi = () => {
  return (
    <div className="md:py-6 font-euclidregular">
      <h1 className=" font-bold text-3xl text-primary-light font-euclidbold">
        Instalasi
      </h1>
      <div className="mt-8 text-sm">
        <h6 className=" font-euclidsemi text-lg mb-3">Requirement</h6>
        <p>
          Sebelum melakukan instalasi Angeline Design pada project. Kamu perlu
          memastikan beberapa package juga terinstall pada project agar dapat
          digunakan, berikut adalah beberapa package tambahan dalam menggunakan
          Angeline Design :
        </p>
        <ul className=" list-disc list-inside mt-4">
          <li className=" text-gray-400 font-euclidmedium mb-2">
            <a
              className="text-blue-500 hover:text-blue-400"
              href="https://react.dev/learn/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Js
            </a>
          </li>
          <li className=" text-gray-400 font-euclidmedium">
            <a
              className="text-blue-500 hover:text-blue-400"
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8 text-sm">
        <Tabs
          tabDirection="vertical"
          tabSpace={"gap-x-2"}
          width="wrap"
          classTitle=" font-euclidsemi"
        >
          <Tab title="npm">
            <PrismCode code={`npm install @angelineuniverse/design`} />
          </Tab>
          <Tab title="cdn">
            <PrismCode
              code={`/* Copy di dalam tag <head> */

<script src="https://cdn.jsdelivr.net/npm/@angelineuniverse/design@<latest_version>/lib/cjs/index.min.js"></script>`}
            />
          </Tab>
        </Tabs>
      </div>
      <div className="mt-10 text-sm">
        <h6 className=" font-euclidsemi text-lg mb-3">Contoh sederhana</h6>
        <p className="mb-7">
          Setelah melakukan instalasi package tambahan dan Angeline Design pada
          project kamu. Lihat{" "}
          <Link to={"component/button"}>
            <span className=" text-secondary-light font-euclidsemi">
              component
            </span>
          </Link>{" "}
          untuk mulai menggunakan Angeline Design. Dibawah ini adalah contoh
          sederhana bagaimana Implementasi Angeline Design di project kamu.
        </p>
        <PrismCode
          code={`import React from "react";
import { Button } from "@angelineuniverse/design/Button";

const Index = () => {
  return (
    ....
    <Button
      label="Button"
      anotherClass="h-full"
      variant="primary"
      size="sm"
    />
  )
}
export default Index;`}
        />
      </div>
    </div>
  );
};

export default ViewInstalasi;
