export function maplayers(state, action) {
  switch (action.type) {
    case "STORE_LAYERS":
      // payload: whole layer array
      return { ...state, layers: action.payload };
    case "TOGGLE_VISIBILITY":
      // payload: layers' name
      // find object based on payload and change visibility
      const visibilityState = state.layers.map((obj) =>
        obj.name === action.payload
          ? { ...obj, visible: !obj.visible }
          : { ...obj, visible: obj.visible }
      );
      return { ...state, layers: visibilityState };
    case "TOGGLE_OPACITY":
      // payload: layers' name
      // find object based on payload and change opacity
      // const opacityState = state.layers.map((obj) =>
      // obj.name === action.payload.name
      //   ? { ...obj, opacity: action.payload. }
      //   : { ...obj, visible: obj.visible }
      // );
      let objIndex = state.layers.findIndex((obj => obj.name === action.payload.name));
      state.layers[objIndex].opacity = action.payload.opacity;
      return { ...state };
    case "ADD_LAYER":
      // payload: new set of layer
      return { ...state, layers: action.payload };
    default:
      return state;
  }
}
