import React from "react";

function SearchFilters({ filters, setFilters, onSearch }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <input
        name="firstName"
        placeholder="First name"
        onChange={handleInputChange}
      />
      <input
        name="lastName"
        placeholder="Last name"
        onChange={handleInputChange}
      />
      <input
        name="dob"
        placeholder="Date of birth"
        type="date"
        onChange={handleInputChange}
      />
      <input
        name="email"
        placeholder="Email address"
        onChange={handleInputChange}
      />
      <input
        name="phone"
        placeholder="Phone number"
        onChange={handleInputChange}
      />
      <input
        name="address"
        placeholder="Street address"
        onChange={handleInputChange}
      />
      <input
        name="city"
        placeholder="City"
        onChange={handleInputChange}
      />
      <input
        name="state"
        placeholder="State"
        onChange={handleInputChange}
      />
      <input
        name="zip"
        placeholder="Zip code"
        onChange={handleInputChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchFilters;
