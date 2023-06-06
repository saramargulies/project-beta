import React, { useEffect, useState } from 'react';

function ListModels() {

    const [models, setModels] = useState([]);

    const fetchData = async () => {
      const url = 'http://localhost:8100/api/models/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setModels(data.manufacturers)
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
            {models.map(manufacturer => {
              return (
              <tr className="object-fit" key={manufacturer.id }>
                <td>{ manufacturer.name }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListModels;
