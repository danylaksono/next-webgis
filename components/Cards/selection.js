import React, { useState, useContext } from "react";
import { LayerContext } from "../../context";
import Draggable from 'react-draggable';
import { MdDragHandle, MdFormatPaint, MdPlaylistAdd } from "react-icons/md";

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
      <div className="flex flex-row justify-between items-center px-4 mt-2 mb-2 py-2">
        <h1 className="font-semibold text-xl">List of Layers</h1>
        <div className="flex-none w-4 h-4">
          <div className="rounded-full bg-black-400 hover:bg-blue-200 w-8 h-8 flex items-center justify-center cursor-pointer"> 
            <MdPlaylistAdd className="w-6 h-6"/>
          </div>
        </div>
      </div>
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
          // <Draggable
          //   axis="y"
          //   handle=".handle"
          //   grid={[25, 53]}
          // >
          <div key={layer.id} className="block border-b px-1">
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
                <div className="handle cursor-grab focus:cursor-grabbing">
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
          // </Draggable>
        ))}
      </div>
    </div>
  );
}

export default SelectionComponent;
