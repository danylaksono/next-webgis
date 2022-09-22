import React, { useState, useContext } from "react";
import { LayerContext } from "../../context";

function DummyMapComponent() {
  const { state, dispatch } = useContext(LayerContext);
  let layers = state.layers;

  function handleLayerSwitch (event) {
    console.log(event.target.value);
  };

  return (
    <div className="h-3/4 flex-shrink bg-slate-200">
        {layers.map((layer) => (
          <div key={layer.id} className="label">
            <span className="label-text">{layer.name} is {JSON.stringify(layer.visible)} and {layer.opacity}%</span>   
          </div>
        ))}
    </div>
  );
}

export default DummyMapComponent;
