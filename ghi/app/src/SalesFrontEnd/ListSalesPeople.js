import React, { useEffect, useState } from 'react';

function ListSalesPeople() {

    const [salespeople, setSalesPeople] = useState([]);

    const fetchData = async () => {
      const url = 'http://localhost:8090/api/salespeople/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSalesPeople(data.salespeople)
        }
      }

      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <div className="container mt-5"><h1>Salespeople</h1></div>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {salespeople.map(salesperson => {
              return (
              <tr className="object-fit" key={salesperson.employee_id }>
                <td>{ salesperson.employee_id }</td>
                <td>{ salesperson.first_name }</td>
                <td>{ salesperson.last_name }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListSalesPeople;
