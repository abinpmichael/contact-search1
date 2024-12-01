import React, { useState } from "react";
import SearchFilters from "./components/SearchFilters";
import ResultsTable from "./components/ResultsTable";
import data from "./data.json";

function App() {
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(data);
  const [selectedContact, setSelectedContact] = useState(null);

  const filterData = () => {
    const filtered = data.filter((contact) =>
      Object.entries(filters).every(([key, value]) =>
        value ? contact[key]?.toLowerCase().includes(value.toLowerCase()) : true
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Choose a contact</h1>
      <SearchFilters
        filters={filters}
        setFilters={setFilters}
        onSearch={filterData}
      />
      <ResultsTable data={filteredData} onSelect={setSelectedContact} />
      {selectedContact && (
        <div>
          <h3>Selected Contact</h3>
          <p>
            <strong>Name:</strong> {selectedContact.firstName}{" "}
            {selectedContact.lastName}
          </p>
          <p>
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedContact.phone}
          </p>
          <p>
            <strong>Address:</strong> {selectedContact.address}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
