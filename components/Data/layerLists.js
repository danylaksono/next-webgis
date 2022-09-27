const layers = [
  { order: 1, 
    id: "public.stops",
    type: "vector",
    title: "UK Bus Stops",
    url: "http://localhost/tiles/public.stops/{z}/{x}/{y}.pbf", 
    visible: true,
    styleType: "circle", 
    opacity: 100 
  },
  { order: 2, 
    id: "public.hv_lv_lines",
    type: "vector",
    title: "HV and LV Lines",
    url: "http://localhost/tiles/public.hv_lv_lines/{z}/{x}/{y}.pbf", 
    visible: true,
    styleType: "line", 
    opacity: 100 
  },
  { order: 3, 
    id: "public.off_gas_postcodes",
    type: "vector",
    title: "Off Gas Postcodes",
    url: "http://localhost/tiles/public.off_gas_postcodes/{z}/{x}/{y}.pbf", 
    visible: true,
    styleType: "fill", 
    opacity: 70 
  },
  // { order: 4, 
  //   id: "scottish_index_of_multiple_deprivation",
  //   type: "vector",
  //   title: "scottish_index_of_multiple_deprivation",
  //   url: "https://tq9cdmx7si.execute-api.eu-west-2.amazonaws.com/dev/maps/tegolamap/scottish_index_of_multiple_deprivation/{z}/{x}/{y}.pbf", 
  //   visible: true,
  //   styleType: "fill", 
  //   opacity: 70 
  // },
];

export { layers };
