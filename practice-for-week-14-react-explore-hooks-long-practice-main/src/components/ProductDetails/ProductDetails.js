import React from 'react'

function ProductDetails({ product, visible }) {
  if (!visible) return null

  if (!product) return (
    <div className="product-details">
      <p className="product-info">Our Products</p>
      <p>Welcome to our product catalog. Please enjoy exploring.</p>
      <p>Please select a product to view its details.</p>
    </div>
  )

  // const [sidePanelValue, setSidePanelValue] = useState({
  //   name: "",
  //   id:"",
  //   price: "",
  //   discription: "",
  //   details: ""

  // });
  // function setItemValues(item){
  //   // debugger;   
  //   const newObj = {
  //       name: item.name,
  //       id: item.id,
  //       price: item.price,
  //       description: item.description,
  
  //     }
  //   setSidePanelValue(newObj)
  //   return(
  //       newObj
  //       //<h2>{item.name}</h2>
  //   )
  // }

  console.log(product)

  return (
    <div className="product-details">
      <p className="product-info">{product.name}</p>
      <p>{product.description}</p>
      <p className="product-price">{product.price}</p>
      <p>Details</p>
      <ul>
        {product.details.map((item, index) => <li className="product-details-list-item" key={index}>
          {item.label}<br />
          <span className="product-info">{item.value}</span>
        </li>)}
      </ul>
    </div>
  )
}

export default ProductDetails;
