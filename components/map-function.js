import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import MVT from 'ol/format/MVT';
import OSM from "ol/source/OSM";
import {Fill, Icon, Stroke, Style, Text} from 'ol/style';
import "ol/ol.css";


const tileurl = 
    'https://geo-server.advanced-infrastructure.co.uk/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=dev:Scottish_Index_of_Multiple_Deprivation&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'

function MapComponent() {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        //new TileLayer({
        //  source: new OSM(),
        //}),
        new VectorTileLayer({
          declutter: true,
          source: new VectorTileSource({
            format: new MVT(),
            url: tileurl,              
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    });
    setMap(initialMap);
  }, []);

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      ref={mapElement}
      className="map-container"
    />
  );
};

export default MapComponent;
