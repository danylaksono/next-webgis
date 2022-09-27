import React, { useState, useContext } from "react";
import { Map, useMap } from "react-map-gl";
import { LayerContext } from "../../context";

export function DataCardComponent() {
  const { state, dispatch } = useContext(LayerContext);
  let data = state.data;
  const layer_properties = data.properties;

  return (
    <div className="bg-red-100 w-50 h-50 h-full flex flex-col justify-center items-center text-black text-center ">
      <div className="flex text-sm">
        {" "}
        {layer_properties ? layer_properties.commonname : ""}{" "}
      </div>
      <div className="flex text-lg">
        {" "}
        {layer_properties
          ? layer_properties.naptancode
          : "Select to Display"}{" "}
      </div>
    </div>
  );
}

export default DataCardComponent;
