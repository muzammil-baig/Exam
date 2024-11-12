// import React, { useState } from "react";
// import "./ProductForm.css";

// const ProductTest = () => {
//   const [pname, setPname] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Product Name:", pname);
//     console.log("Product Description:", description);
//     console.log("Product Price:", price);

//     setPname("");
//     setDescription("");
//     setPrice("");
//     setIsSubmitted(true);

//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       <div className="input-container">
//         <h1>Product Catalogue!</h1>
//         <label htmlFor="productName">Product Name:</label>
//         <input
//           type="text"
//           id="productName"
//           placeholder="Name"
//           value={pname}
//           onChange={(e) => setPname(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-container">
//         <label htmlFor="description">Product Name:</label>
//         <textarea
//           id="description"
//           placeholder="Name"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <div className="input-container">
//         <label htmlFor="price">Product Name:</label>
//         <input
//           type="text"
//           id="price"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Add Product</button>
//       {isSubmitted && (
//         <div className="success-message">Product Added Successfull!</div>
//       )}
//     </form>
//   );
// };

// export default ProductTest;

import React, { useState } from 'react'
import './ProductForm.css'

const ProductTest = () => {
    const [pname, setPname] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [submit, setSubmit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Product Name:', pname);
        console.log('Product Description:', description);
        console.log('Product Price:', price);

        setPname('');
        setDescription('')
        setPrice('');
        setSubmit(true);

        setTimeout(() => setSubmit(false), 3000);
    }  

    return(
        <div className="parent">
        <form onSubmit={handleSubmit} className="product-form">
            <div className="input-container">
                <h1>Product Catalogue</h1>
                <label htmlFor="productName">Product Name:</label>
                <input type="text" id='productName' placeholder='Enetr Name' value={pname} onChange={(e) => setPname(e.target.value)}/>
            </div>
            <div className="input-container">
                <label htmlFor="desciption">Product Description:</label>
                <textarea id='desciption' placeholder='Enetr Description of Product' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="input-container">
                <label htmlFor="productName">Product Price:</label>
                <input type="number" id='price' placeholder='Enetr Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <button type='submit'>Add Product</button>
            {submit && <div className="success-message">Product added successfully!</div>}
        </form>
        </div>
    )


    

}
export default ProductTest;