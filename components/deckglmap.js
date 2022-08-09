import DeckGL from "@deck.gl/react";
import { MVTLayer } from "@deck.gl/geo-layers";
import {MVTLoader} from '@loaders.gl/mvt';
import { render } from "react-dom";
import { GeoJsonLayer, TileLayer, BitmapLayer } from "deck.gl";

const EST_DATA =
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=dev:est_datasets&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}";

const FLOOD_RISK =
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=dev:flood_risk_areas&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}";

const INITIAL_VIEW_STATE = {
  latitude: 56.47287402822253, 
  longitude: -2.982971550038475, 
  zoom: 10,
  bearing: 0,
  pitch: 0,
};

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YWRtaW46cUh1YXFOa1U0ZlhzODZV");

const layers = [
  new TileLayer({
    data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",

    minZoom: 0,
    maxZoom: 19,

    renderSubLayers: (props) => {
      const {
        bbox: { west, south, east, north },
      } = props.tile;

      return new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [west, south, east, north],
      });
    },
  }),
  new MVTLayer({
    id: "wms",
    data: FLOOD_RISK,
    getFillColor: [100, 200, 255, 180],
    getWidth: 1,
    pickable: true,
    autoHighlight: true,
  }),
  new MVTLayer({
    id: "mvt",
    data: EST_DATA,

    //loaders: [MVTLoader],
    //loadOptions: {
    //  credentials: "same-origin",
    //  fetch: {
    //    method: "GET",
    //    headers: myHeaders,
    //    redirect: 'follow',
        //body: JSON.stringify(requestBody),
        //{
        //  Authorization: `Bearer ${"YWRtaW46cUh1YXFOa1U0ZlhzODZV"}`,
        //},
    //  },
    //},
    // Styles
    getFillColor: [200, 0, 80, 180],
    getWidth: 3,
  }),
  new MVTLayer({
    id: "mvt",
    data: FLOOD_RISK,
  })
];

function DeckComponent() {
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    ></DeckGL>
  );
}

export default DeckComponent;
