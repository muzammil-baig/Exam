import React, { useState } from 'react';
import './ProductForm.css'

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Product Name:', productName);
    console.log('Description:', description);
    console.log('Price:', price);

    // Reset form fields after submission
    setProductName('');
    setDescription('');
    setPrice('');
    setIsSubmitted(true);  // Show success message

    // Optionally, you can reset isSubmitted after some time if you want to show the message for a short period
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="input-container">
      <h1 className='h1'>Product Catalogue</h1>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          placeholder="Enter Name of Product"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter Description About Product"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Enter Price of Product"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
      {isSubmitted && <div className="success-message">Product added successfully!</div>}
    </form>

    
  );
};

export default ProductForm;
