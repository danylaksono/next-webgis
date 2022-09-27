import React, { useState, useContext } from "react";
import { LayerContext } from "../../context";
import { BarchartComponent } from "../Graphs/barchart";
import { DataCardComponent } from "../Graphs/dataCard";
import { Dropdown, Breadcrumb, HiHome } from "flowbite-react";
import { MdHelp, MdFormatPaint, MdPlaylistAdd } from "react-icons/md";

function ButtonsComponent() {
  const { state, dispatch } = useContext(LayerContext);
  return (
    <div className="w-64 p-2 flex flex-col gap-2 overflow-y-auto bg-yellow-100 shadow-xl">
      <div className="block h-48 border-b bg-red-100 text-xs shadow-x2">
        <BarchartComponent className="w-60 p-2 flex flex-col gap-2" />
      </div>
      <div className="block h-48 border-b bg-red-100 text-xs shadow-x2">
        <DataCardComponent className="w-60 p-2 flex flex-col gap-2"/>
      </div>
      
      <div className="block h-48 border-b pt-1 bg-red-100 text-xs shadow-x2"></div>
      <div className="block h-48 border-b pt-1 bg-red-100 text-xs shadow-x2"></div>
      <div className="block h-48 border-b pt-1 bg-red-100 text-xs shadow-x2"></div>
    </div>
  );
}

export default ButtonsComponent;
