import React, { useEffect, useState } from 'react';

function ListManufacturers() {

    const [manufacturers, setManufacturers] = useState([]);

    const fetchData = async () => {
      const url = 'http://localhost:8100/api/manufacturers/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers)
        }
      }
      
      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <div className="container mt-5"><h1>Manufacturers</h1></div>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {manufacturers.map(manufacturer => {
              return (
              <tr className="object-fit" key={manufacturer.id }>
                <td>{ tech.employee_id }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListManufacturers;
