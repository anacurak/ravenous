// src/components/Business.js

import React from 'react';
import './Business.css';

import pizzaImage from '../images/pizza.jpg';
import burgerImage from '../images/burger.jpg';
import sushiImage from "../images/sushi.jpg";

// Hardcoded list of businesses
const businesses = [
  {
    id: 1,
    imageSrc: pizzaImage,
    name: 'Pizza Palace',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 2,
    imageSrc: burgerImage,
    name: 'Burger Bonanza',
    address: '456 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    category: 'American',
    rating: 4.0,
    reviewCount: 120
  },
  {
    id: 3,
    imageSrc: sushiImage,
    name: 'Sushi Sensation',
    address: '789 Pine Road',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94101',
    category: 'Japanese',
    rating: 4.8,
    reviewCount: 200
  }
];

// Business component that will display a single business
const Business = ({ business }) => {
  return (
    <div className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}, {business.state} {business.zipCode}</p>
        </div>
        <div className="Business-details">
          <p className="category">Category: {business.category}</p>
          <p className="rating">Rating: {business.rating} stars</p>
          <p className="review-count">{business.reviewCount} Reviews</p>
        </div>
      </div>
    </div>
  );
};

// BusinessList component that renders all businesses
const BusinessList = () => {
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business
          key={business.id} // Unique key for each business component
          business={business} // Pass the business data as props
        />
      ))}
    </div>
  );
};

export default BusinessList;
