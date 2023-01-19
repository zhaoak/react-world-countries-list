import React from 'react';
import { useState } from 'react';
import '../../services/client.js';

import Interface from '../Interface/Interface';
import CountryCard from '../CountryCard/CountryCard';
import useCountries from '../../hooks/useCountries.js';

export default function Main() {
  const [continent, setContinent] = useState(null);
  const allCountries = useCountries();
  console.log(allCountries);
  function filterByContinent(countryList, continentFilter) {
    return countryList.filter((country) => country.continent === continentFilter);
  }

  return (
    <main>
      <Interface continent={continent} setContinent={setContinent} />
      {filterByContinent(allCountries, continent).map((country) => (
        <CountryCard key={country.id} name={country.name} iso2={country.iso2} />
      ))}
      ;
    </main>
  );
}
