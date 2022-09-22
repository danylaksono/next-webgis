import * as React from "react";
import { useState, useMemo, useRef, useCallback } from "react";
import Head from "next/head";
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

const scottish_index = [
  "https://tq9cdmx7si.execute-api.eu-west-2.amazonaws.com/dev/maps/tegolamap/scottish_index_of_multiple_deprivation/{z}/{x}/{y}.pbf"
  //"https://geo-server.advanced-infrastructure.co.uk/tile/public.scottish_index_of_multiple_deprivation/{z}/{x}/{y}.pbf"
  //"https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:scottish_index_of_multiple_deprivation@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const est_datasets = [
  //"https://tq9cdmx7si.execute-api.eu-west-2.amazonaws.com/dev/maps/tegolamap/est_dataset/{z}/{x}/{y}.pbf"
  "https://sq5v6jzc51.execute-api.eu-west-2.amazonaws.com/dev/maps/est_dataset/est_dataset/{z}/{x}/{y}.pbf"
  //"https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:est_datasets@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const network_dundee = [
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:network_dundee@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const off_gas_postcodes = [
  "https://tq9cdmx7si.execute-api.eu-west-2.amazonaws.com/dev/maps/tegolamap/off_gas_postcodes/{z}/{x}/{y}.pbf"
  //  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:off_gas_postcodes@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const hv_lv_lines = [
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:hv_lv_lines@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];


const scottishIndexLayer = {
  id: "scottish_index_of_multiple_deprivation",
  source: "scottish_index_of_multiple_deprivation",
  "source-layer": "scottish_index_of_multiple_deprivation",
  type: "fill",
  "maxzoom": 16,
  paint: {
    //"fill-color":"red",
    "fill-color": [
      "interpolate",
      ["linear"],
      ["to-number", ["get","crime_rate"]],
      250,
      "#fef0d9",
      500,
      "#fdcc8a",
      750,
      "#fc8d59",
      1000,
      "#e34a33",
      1250,
      "#b30000",
    ],
    "fill-opacity": 0.7,
    "fill-outline-color": "#3b3331",
  },
};

const estDatasetLayer = {
  id: "est_datasets",
  source: "est_datasets",
  "source-layer": "est_datasets",
  type: "circle",
  "minzoom": 16,
  paint: {
    "circle-color": "#5e2901",
    "circle-opacity": 0.9,
    "circle-radius": 8,
  },
};

const networkDundeeLayer = {
  id: "network_dundee",
  source: "network_dundee",
  "source-layer": "network_dundee",
  type: "line",
  "minzoom": 16,
  paint: {
    "line-width": 3,
    "line-color": "red",
    "line-opacity": 0.9
  },
};

const offGasPostcodesLayer = {
  id: "off_gas_postcodes",
  source: "off_gas_postcodes",
  "source-layer": "off_gas_postcodes",
  type: "fill",
  //"minzoom": 15,
  paint: {
    //'fill-color':'red',
    'fill-color': ['match', ['string', ['get', 'gas_supply']], 'True', 'green', 'False', 'red', 'gray'],
    "fill-opacity": 0.7,
    "fill-outline-color": "black",
  },
};

function MaplibreComponent() {
  const mapRef = useRef();
  const [showPopup, setShowPopup] = useState(true);
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const index_md = event.features && event.features[0];
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      props: index_md && index_md.properties.UPRN,
    });
  }, []);

  const hoveredIndex = (hoverInfo && hoverInfo.props) || "";

  return (
    <div className="col-span-3 row-span-2 h-full bg-base-100 shadow-xl">
      <Head>
        <title>Map Dashboard Maplibre</title>
      </Head>

      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl}
        hash= {true}
        controller={true}
        ref={mapRef}
        // style={{ height: "100%", width: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        
 
        <Source type="vector" scheme="xyz" tiles={scottish_index}>
          <Layer {...scottishIndexLayer} />
        </Source>
        {/* Layers List
        <Source type="vector" scheme="tms" tiles={est_datasets}>
          <Layer {...estDatasetLayer} />
        </Source>

        <Source type="vector" scheme="xyz" tiles={off_gas_postcodes}>
          <Layer {...offGasPostcodesLayer} />
        </Source>
                */}
      </Map>

    </div>
  );
}

export default MaplibreComponent;
