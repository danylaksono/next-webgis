import DeckGL from "@deck.gl/react";
import { MVTLayer } from "@deck.gl/geo-layers";
import {MVTLoader} from '@loaders.gl/mvt';
import { render } from "react-dom";
import { GeoJsonLayer, TileLayer, BitmapLayer } from "deck.gl";

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const AIR_PORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

const PARKING =
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=dev:Scottish_Index_of_Multiple_Deprivation&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}";

const WMSLayer =
  "https://geo-server.advanced-infrastructure.co.uk/geoserver/dev/wms?service=WMS&version=1.1.0&request=GetMap&layers=dev:brighton_parking&bbox=-3.0980281829834%2C56.4512748718262%2C-2.83564615249634%2C56.5040512084961&width=768&height=330&srs=EPSG%3A4326&styles=&format=geojson&CQL_FILTER=Intermedia='Perth Road'";

const INITIAL_VIEW_STATE = {
  latitude: 51.75, 
  longitude: -1.245184590946568,
  zoom: 10,
  bearing: 0,
  pitch: 0,
};

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YWRtaW46cUh1YXFOa1U0ZlhzODZV");

const layers = [
  new TileLayer({
    // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
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
  new GeoJsonLayer({
    id: "airports",
    data: AIR_PORTS,
    // Styles
    filled: true,
    pointRadiusMinPixels: 2,
    pointRadiusScale: 2000,
    getPointRadius: (f) => 11 - f.properties.scalerank,
    getFillColor: [200, 0, 80, 180],
    // Interactive props
    pickable: true,
    autoHighlight: true,
  }),
  new MVTLayer({
    id: "mvt",
    data: WMSLayer,
    loaders: [MVTLoader],
    loadOptions: {
      credentials: "same-origin",
      fetch: {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow',
        //body: JSON.stringify(requestBody),
        //{
        //  Authorization: `Bearer ${"YWRtaW46cUh1YXFOa1U0ZlhzODZV"}`,
        //},
      },
    },
    // Styles
    getSourcePosition: (f) => [-1.245184590946568, 51.75307306057298], // oxford
    getTargetPosition: (f) => f.geometry.coordinates,
    getFillColor: [50, 50, 255],
    getWidth: 1,
  }),
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
