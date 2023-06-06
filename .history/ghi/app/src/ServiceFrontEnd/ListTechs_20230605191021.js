import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListTechs() {

    const [techs, setTechs] = useState([]);

    const fetchData = async () => {
      const url = ''http://project-beta-inventory-api-1:8000/api/automobiles'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTechs(data.technicians)
        }
      }
      
      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <table className="table table-hover table-secondary table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {techs.map(tech => {
              return (
              <tr className="object-fit" key={tech.id }>
                <td>{ tech.employee_id }</td>
                <td>{ tech.first_name }</td>
                <td>{ tech.last_name }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListTechs;
