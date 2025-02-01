import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [formData, setFormData] = useState({});
  const [getcountry, setCountry] = useState('');
  const [getState, setState] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const country = [...new Set(data.map(item => item.country))].sort();

  const handleCountry = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setFormData(prevState => ({
        ...prevState,
        country: selectedCountry
    }));
    // Filter and set unique states
    const states = data
        .filter(item => item.country === selectedCountry)
        .map(item => item.subcountry);

    const uniqueStates = [...new Set(states)].sort();
    setState(uniqueStates);
  };

  const handleState = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    setFormData(prevState => ({
        ...prevState,
        state: selectedState
    }));

    // Filter and set cities
    const filteredCities = data
        .filter(item => item.subcountry === selectedState)
        .map(item => item.name);
    
    setCities(filteredCities);
  };

  const handleCity = (e) => {
    setFormData(prevState => ({
        ...prevState,
        city: e.target.value
    }));
  };

  return (
    <div className='page'>
      <div className='cart-flex'>
        <div className='cart-container-1'>
          <h2 className='center font'>Important Detail</h2>
          <div className='cart-border mt-1'>
            <h4 className=''>Apply Discount Code</h4>
            <div className='rating mt-1 '>
              <input className='input-width-1' type='text' placeholder='Enter coupan code' />
              <button className='btn-width-2'>Apply</button>
            </div>
            <h4 className='mt-1'>Delivery</h4>
            <select className='input-width-1 mt-1' name='country' onChange={handleCountry}>
              <option value=''>Select Country</option>
              {country.map(items => <option key={items} value={items}>{items}</option>)}
            </select>
            <div className='rating mt-1'>
              <select className='input-width-1 mt-1' onChange={handleState}>
                <option value=''>Select State</option>
                {getState.map(items => <option key={items} value={items}>{items}</option>)}
              </select>
              <select className='input-width-1 mt-1' onChange={handleCity}>
                <option value=''>Select City</option>
                {cities.map((items, index) => <option key={index} value={items}>{items}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className='cart-container-1'>
          <h2 className='center font'>Checkout</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
