import React, { useEffect, useState } from 'react';

function ListSales() {

    const [sales, setSales] = useState([]);

    const fetchData = async () => {
      const url = 'http://localhost:8090/api/sales/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSales(data.sales)
        }
      }
      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <div className="container mt-5"><h1>Sales</h1></div>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>Salesperson Employee ID</th>
              <th>Salesperson</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {sales.map(sale => {
              return (
              <tr className="object-fit" key={sale.id }>
                <td>{ sale.salesperson.employee_id }</td>
                <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                <td>{ sale.automobile.vin }</td>
                <td>{ sale.price }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListSales;
