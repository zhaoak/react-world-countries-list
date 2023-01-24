import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card-container">
      <h3>{name}</h3>
      <img
        src={`https://flagcdn.com/64x48/${iso2.toLowerCase()}.png`}
        width="64"
        height="48"
        alt={`${name}`}
      />
    </div>
  );
}
