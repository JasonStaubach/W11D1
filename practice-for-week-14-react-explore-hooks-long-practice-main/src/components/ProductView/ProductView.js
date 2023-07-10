import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useState, useEffect } from "react"

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSidePanelOpen] = useState("true")
  
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSidePanelOpen(true);
  }, [selectedItem]);

  useEffect(() => {
    setSelectedItem(null)
  },[sideOpen])
  

  function toggleSidePanel(){
    if(sideOpen){
      setSidePanelOpen(false);
    } else {
      setSidePanelOpen(true);
    }
  }




  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => setSelectedItem(item)}
              />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => {toggleSidePanel()}}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails product={selectedItem} visible={sideOpen} />
      </div>
    </div>
  );
}

export default ProductView;