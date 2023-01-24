import React from 'react';

export default function Interface({ setContinent }) {
  return (
    <section className="interface-section">
      <label htmlFor="continent-select">Filter by continent: </label>
      <select name="continent" id="continent-select" onChange={(e) => setContinent(e.target.value)}>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
      </select>
    </section>
  );
}
