import * as React from "react";
import { useState, useMemo, useCallback } from "react";
import Head from "next/head";
import Map, {
  Popup,
  Source,
  Layer,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const INITIAL_VIEW_STATE = {
  latitude: 56.47287402822253,
  longitude: -2.982971550038475,
  zoom: 12,
  bearing: 0,
  pitch: 0,
};

const scottish_index = [
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:scottish_index_of_multiple_deprivation@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const est_datasets = [
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:est_datasets@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const network_dundee = [
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:network_dundee@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];
const off_gas_postcodes = [
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/tms/1.0.0/dev:off_gas_postcodes@EPSG:900913@pbf/{z}/{x}/{y}.pbf",
];


const scottishIndexLayer = {
  id: "scottish_index_of_multiple_deprivation",
  source: "scottish_index_of_multiple_deprivation",
  "source-layer": "scottish_index_of_multiple_deprivation",
  type: "fill",
  paint: {
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
  paint: {
    "circle-color": "#5e2901",
    "circle-opacity": 0.9,
    "circle-radius": 2,
  },
};

const networkDundeeLayer = {
  id: "network_dundee",
  source: "network_dundee",
  "source-layer": "network_dundee",
  type: "line",
  paint: {
    'line-width': 0.6,
    'line-color': "red"
  },
};

const offGasPostcodesLayer = {
  id: "off_gas_postcodes",
  source: "off_gas_postcodes",
  "source-layer": "off_gas_postcodes",
  type: "fill",
  paint: {
    "fill-color": "yellow",
    "fill-opacity": 0,
    "fill-outline-color": "gray",
  },
};

function MaplibreComponent() {
  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const index_md = event.features && event.features[0];
    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      uprn_code: index_md && index_md.properties.UPRN,
    });
  }, []);

  const hoveredIndex = (hoverInfo && hoverInfo.uprn_code) || "";

  return (
    <div>
      <Head>
        <title>Map Dashboard Maplibre</title>
      </Head>

      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl}
        controller={true}
        onMouseMove={onHover}
        interactiveLayerIds={["est_datasets"]}
        style={{ height: "100vh", width: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        <Source type="vector" scheme="tms" tiles={scottish_index}>
          <Layer {...scottishIndexLayer} />
        </Source>
        <Source type="vector" scheme="tms" tiles={est_datasets}>
          <Layer {...estDatasetLayer} />
        </Source>
        <Source type="vector" scheme="tms" tiles={network_dundee}>
          <Layer {...networkDundeeLayer} />
        </Source>

        {hoveredIndex && (
          <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            offset={[0, -10]}
            closeButton={false}
            className="county-info"
          >
            UPRN: {hoveredIndex}
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MaplibreComponent;
