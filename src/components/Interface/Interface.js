import React from 'react';

export default function Interface({ continent, setContinent }) {
  return (
    <section className="interface-section">
      <label htmlFor="continent-select">Filter by continent: </label>
      <select name="continent" id="continent-select" onChange={(e) => setContinent(e.target.value)}>
        <option value="">(none)</option>
        <option value="Africa">Africa</option>
      </select>
    </section>
  );
}
