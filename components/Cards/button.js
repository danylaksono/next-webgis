import React, { useState, useContext } from "react";
import { LayerContext } from "../../context";
import { Dropdown, Breadcrumb, HiHome } from "flowbite-react";

function ButtonsComponent() {
  const { state, dispatch } = useContext(LayerContext);
  return (
    <div className="w-64 p-4 bg-yellow-100 shadow-xl">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item> React</Breadcrumb.Item>
      </Breadcrumb>

      
    </div>
  );
}

export default ButtonsComponent;
