// based on https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/

const styleTypes = {
    background: {
        "background-color":"grey",
        "background-opacity":0.8,
        "visibility":"visible",
    },
    fill: {
        "fill-color":"blue",
        "fill-opacity":0.9,
        "fill-outline-color":"hsla(100, 50%, 50%, 1)",
        "visibility":"visible",
    },
    line:{
        "line-color":"red",
        "line-opacity":0.7,
        "line-width":1.5,
        "visibility":"visible",
    },
    symbol:{}, 
    raster:{}, 
    circle:{
        "circle-color":"red",
        "circle-opacity":0.7,
        "circle-radius":1.5,
        "circle-stroke-color":"blue",
        "visibility":"visible",
    },
    "fill-extrusion":{}, 
    heatmap:{},
    hillshade:{},
};


export default styleTypes;