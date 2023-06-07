import React, { useEffect, useState } from 'react';

function SalesHistory() {

    const [salesPeople, setSalesPeople] = useState([]);
    const [sales, setSales] = useState([]);

    const [salesPerson, setSalesPerson] = useState('');
    const handleSalesPersonChange = (event) => {
        const value = event.target.value
        setSalesPerson(value)
    }

    const filterSales = function(salesList, salesPerson) {
        let result = [];
        for (const sale of salesList) {
            if (sale["salesperson"]["id"] == salesPerson) {
                result.push(sale)
            }
        }
        return result
    }

    const fetchData = async () => {
      const url = 'http://localhost:8090/api/salespeople/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSalesPeople(data.salespeople)
        }
      const salesURL = 'http://localhost:8090/api/sales/'
      const salesResponse = await fetch(salesURL)
      if (salesResponse.ok) {
         const salesData = await salesResponse.json()
         console.log(salesData)
         setSales(salesData.sales)
        }
      }

      useEffect(() => {
        fetchData();
      }, []);

      return (
        <>
        <div className="container mt-5">
            <h1>Salesperson History</h1>
        </div>
        <div className="mb-3">
                  <select onChange={handleSalesPersonChange} value={salesPerson} name="salesperson" id="salesperson" className="form-select" required>
                    <option value="">Choose a salesperson</option>
                    { salesPeople.map(salesperson => {
                    return (
                    <option value={salesperson.id} key={salesperson.id} >
                        { salesperson.first_name } { salesperson.last_name }
                    </option>
                    );
                })}
            </select>
        </div>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>Salesperson</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {filterSales(sales, salesPerson).map(sale => {
              return (
              <tr className="object-fit" key={sale.id }>
                <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                <td>{ sale.automobile.vin }</td>
                <td>${ sale.price }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default SalesHistory;
