import React from "react";
import Sidenav from "../utils/sidebar";
import { Link, Outlet } from "react-router-dom";
import Button from "../library/components/Button";
function App() {
  return (
    <div className="h-screen w-full grid grid-cols-6 overflow-hidden">
      <nav className="col-span-full h-12 px-8 bg-white md:flex gap-x-5 justify-start md:text-sm items-center border border-slate-300">
        <h2 className="text-primary font-euclidbold text-lg mr-auto">
          Angeline Design
        </h2>
        <a href="https://github.com/angelineuniverse/design" target="blank">
          <p className="py-auto ml-auto font-euclidmedium">Github</p>
        </a>
        <a
          href="https://github.com/angelineuniverse/design/issues"
          target="blank"
        >
          <p className="py-auto ml-auto font-euclidmedium">Issues</p>
        </a>
        <Link to={"/"}>
          <p className="py-auto ml-auto font-euclidmedium">Tentang</p>
        </Link>
      </nav>
      <div className="md:col-span-1 bg-blue overflow-y-auto h-screen max-h-screen border-r border-r-slate-300 py-3 relative">
        <Sidenav />
      </div>
      <div className="md:col-span-5 overflow-y-auto relative">
        <div className="md:w-9/12 md:px-8 pb-20">
          <Outlet />
        </div>
        <div className="md:fixed bottom-3 right-5 p-5 rounded-lg bg-primary text-white md:w-[15%] text-xs font-euclidregular">
          <h2 className="font-euclidsemi text-sm mb-4">
            Dukung & Donasi untuk Angeline Universe
          </h2>
          <p>
            Kami sangat mengapresiasi semua dukungan dan donasi yang anda
            berikan. Sampai jumpa dengan Angeline di masa depan 😁
          </p>
          <Button
            title="Donasi"
            size="small"
            width="full"
            theme="primary"
            className="mt-5 font-euclidsemi"
            onClick={() =>
              window.open("https://saweria.co/angelineuniverse", "_black")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
