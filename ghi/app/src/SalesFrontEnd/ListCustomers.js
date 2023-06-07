import React, { useEffect, useState } from 'react';

function ListCustomers() {

    const [customers, setCustomers] = useState([]);

    const fetchData = async () => {
      const url = 'http://localhost:8090/api/customers/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.customers)
        }
      }
      console.log(customers)
      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <div className="container mt-5"><h1>Customers</h1></div>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {customers.map(customer => {
              return (
              <tr className="object-fit" key={customer.id }>
                <td>{ customer.first_name }</td>
                <td>{ customer.last_name }</td>
                <td>{ customer.phone_number }</td>
                <td>{ customer.address }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListCustomers;
