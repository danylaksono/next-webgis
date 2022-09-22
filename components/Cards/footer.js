import React, { useState, useContext } from "react";
import { Context } from "../../context";
import { layers } from "../Data/layerLists";

function FooterComponent() {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="p-4 justify-items-stretch col-span-4 bg-base-100 shadow-xl">
        foot
    </div>
  );
}

export default FooterComponent;
