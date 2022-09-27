import * as React from "react";
import { useState, useContext, useRef, useCallback } from "react";
import Head from "next/head";
import { LayerContext, DataContext } from "../../context";
import Map, {
  Popup,
  Source,
  Layer,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const INITIAL_VIEW_STATE = {
  latitude: 56.47287402822253,
  longitude: -2.970971550038475,
  zoom: 11,
  bearing: 0,
  pitch: 0,
};


function MaplibreComponent() {
  const mapRef = useRef();
  const { state, dispatch } = useContext(LayerContext);

  let layers = state.layers;
  
  const map_layers = layers.map(layer => ({
    id: layer.id,
    source: layer.id,
    "source-layer":layer.id,
    type: layer.styleType,
    layout: {
      "visibility": layer.visible ? "visible":"none",
    },
    paint: {
      [`${layer.styleType}-color`]:"red",
      [`${layer.styleType}-opacity`]:(layer.opacity/100),
    }
  })
  );

  const onHover = useCallback(event => {
    // console.log(event.features);
    const map = event.target;
    map.getCanvas().style.cursor = 'pointer';
    dispatch({
      type: "SET_DATA_CARD",
      payload: event.features[0]
    });
  });

  const onHoverLeave = useCallback(event => {
    const map = event.target;
    map.getCanvas().style.cursor = '';
  });



  return (
    <div className="h-full flex-auto bg-slate-200">
      <Head>
        <title>Map Dashboard Maplibre</title>
      </Head>

      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl}
        hash= {true}
        controller={true}
        ref={mapRef}
        onMouseEnter={onHover}
        onMouseLeave={onHoverLeave}
        interactiveLayerIds={["public.stops"]}
        // style={{ height: "100%", width: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />
        
        {layers.map((lyr) => (
          <Source key={lyr.id} type={lyr.type} scheme="xyz" tiles={[lyr.url]}>
            <Layer {...(map_layers.find((obj => obj.id === lyr.id)))} />
          </Source>
        ))}

        {/* <Source  type="vector" scheme="xyz" tiles={urll}>
          <Layer {...hvlvline} />
        </Source>*/}
      </Map> 

    </div>
  );
}

export default MaplibreComponent;

