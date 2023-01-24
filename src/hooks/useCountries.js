import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/client.js';

export default function useCountries() {
  // set up state variables
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch from supabase, store data in state
    const fetchData = async () => {
      try {
        const response = await fetchCountries();
        setCountries(response);
      } catch (e) {
        setError('Oh no, fetching the data failed!');
      }
    };
    fetchData();
  }, []);
  // return state
  return countries;
}
