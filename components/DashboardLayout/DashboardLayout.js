import { useState, useEffect, useReducer, createContext } from "react";
import MaplibreComponent from "../maps/maplibre";
import SelectionComponent from "../Cards/selection";
import ButtonsComponent from "../Cards/button";
import DummyMapComponent from "../Cards/dummymap";
import FooterComponent from "../Cards/footer";

export function DashboardLayout() {
  const [selectedLayers, setSelectedLayers] = useState([])


  return (
    <>    
    <div className="h-screen flex flex-row justify-start p-1 gap-1">
      <ButtonsComponent />
      <div className="flex-auto w-3/5 flex flex-col bg-blue-200" >
        <DummyMapComponent />
        <div className="flex-auto resize-y"/>
      </div>
      <SelectionComponent />
      <div className="w-12 flex flex-col justify-between items-center flex-none bg-red-200 px-4">
        <div className="flex flex-col space-y-4 w-full items-center pt-5">
        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>

        </div>
        <div className="flex flex-col space-y-4 pb-5">
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
          <a><div className="rounded-full bg-gray-400 w-8 h-8"></div></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default DashboardLayout;

