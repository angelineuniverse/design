import { Tab, Tabs } from "@angelineuniverse/design";
import React, { Component, ReactNode } from "react";
class Instalation extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1 className=" font-bold text-3xl text-primary-light font-interbold">
          Instalasi
        </h1>
        <div className="mt-8 text-sm">
          <h6 className=" font-intersemibold text-lg mb-3">Requirement</h6>
          <p>
            Sebelum melakukan instalasi Angeline Design pada project. Kamu perlu
            memastikan beberapa package juga terinstall pada project agar dapat
            digunakan, berikut adalah beberapa package tambahan dalam
            menggunakan Angeline Design :
          </p>
          <ul className=" list-disc list-inside mt-4">
            <li className=" text-gray-400 font-intermedium mb-2">
              <a
                className="text-primary hover:text-primary-dark"
                href="https://react.dev/learn/installation"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Js
              </a>
            </li>
            <li className=" text-gray-400 font-intermedium">
              <a
                className="text-primary hover:text-primary-dark"
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
          <Tabs tabDirection="horizontal" width="block">
            <Tab title="Pakai NPM" children=""></Tab>
            <Tab title="Pakai CDN" children=""></Tab>
          </Tabs>
          <div className="px-5 py-3 bg-gray-900 text-white">
            <code>npm i @angelineuniverse/design</code>
          </div>
        </div>
      </div>
    );
  }
}

export default Instalation;
