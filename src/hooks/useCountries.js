import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/client.js';

export default function useCountries() {
  // set up state variables
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // fetch from supabase, store data in state
    const fetchData = async () => {
      const response = await fetchCountries();
      setCountries(response);
    };
    fetchData();
  }, []);
  // return state
  return countries;
}
