import React from "react";

function ResultsTable({ data, onSelect }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact) => (
            <tr key={contact.id}>
              <td>{`${contact.firstName} ${contact.lastName}`}</td>
              <td>{contact.dob}</td>
              <td>{contact.address}</td>
              <td>{contact.city}</td>
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onSelect(contact)}>Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;
