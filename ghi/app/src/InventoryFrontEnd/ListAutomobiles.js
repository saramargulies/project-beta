import React, { useEffect, useState } from 'react';

function ListAutoMobiles() {

    const [automobiles, setAutomobiles] = useState([]);

    const soldOrNot = (boolean) => {
        if (boolean) {
            return "Yes"
        } else {
            return "No"
        }
    }

    const fetchData = async () => {
      const url = 'http://localhost:8100/api/automobiles/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAutomobiles(data.autos)
        console.log(data)
        }
      }

      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <div className="container mt-5"><h1>Automobiles</h1></div>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {automobiles.map(automobile => {
              return (
              <tr className="object-fit" key={automobile.id }>
                <td>{ automobile.vin }</td>
                <td>{ automobile.color }</td>
                <td>{ automobile.year }</td>
                <td>{ automobile.model.name }</td>
                <td>{ automobile.model.manufacturer.name }</td>
                <td>{ soldOrNot(automobile.sold) }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListAutoMobiles;
