import { useState, useEffect, useReducer, createContext } from "react";
import MaplibreComponent from "../maps/maplibre";
import SelectionComponent from "../Cards/selection";
import ButtonsComponent from "../Cards/button";
import DummyMapComponent from "../Cards/dummymap";
import FooterComponent from "../Cards/footer";
import SidebarComponent from "../Sidebar/sidebar";

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
      <SidebarComponent />
    </div> 
    </>
  );
}

export default DashboardLayout;

