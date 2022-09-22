import React, { useState, useContext } from "react";
import { LayerContext } from "../../context";
import { MdDragHandle, MdFormatPaint } from "react-icons/md";

function SelectionComponent() {
  const { state, dispatch } = useContext(LayerContext);
  let layers = state.layers;



  function handleLayerSwitch(event) {
    dispatch({
      type: "TOGGLE_VISIBILITY",
      payload: event.target.value,
    });
  }

  const handleOpacity = (event, layername) => {
    // let payload = {
    //   name: layername,
    //   opacity: event.target.value
    // }
    // console.log("the whole things", payload);
    // console.log("the layer", layername);
    dispatch({
      type: "TOGGLE_OPACITY",
      payload: {
        name: layername,
        opacity: event.target.value
      },
    });
  }

  return (
    <div className="w-64 bg-purple-100 shadow-xl">
      <p className="px-2"> List of Layers </p>
      <div className="flex flex-col overflow-y-auto p-2">
        {/* {layers.map((layer) => (
            <div key={layer.id}>
              <label className="label cursor-pointer justify-start">
                <input
                  type="checkbox"
                  value={layer.name}
                  onChange={handleLayerSwitch}
                  checked={layer.visible}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text p-2">
                  {layer.name} is {JSON.stringify(layer.visible)}
                </span>
              </label>
            </div>
          ))} */}
        {layers.map((layer) => (
          <div key={layer.id} className="block border-b pt-1">
            <div className="border-l-2 border-transparent hover:bg-blue-200 space-y-2">
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-red-250">
                  <input
                    type="checkbox"
                    value={layer.name}
                    onChange={handleLayerSwitch}
                    checked={layer.visible}
                    className="checkbox checkbox-primary"
                  />
                </div>
                <div className="flex-grow text-sm truncate">{layer.name}</div>
                <div className="cursor-pointer">
                  <MdFormatPaint />
                </div>
                <div className="cursor-grab focus:cursor-grabbing">
                  <MdDragHandle />
                </div>
              </div>

              <div className="flex flex-row items-center space-x-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={layer.opacity}
                  onChange={(e) => handleOpacity(e, layer.name)}
                  className="w-full cursor-pointer"
                />
                <span className="text-xs"> {layer.opacity}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectionComponent;
