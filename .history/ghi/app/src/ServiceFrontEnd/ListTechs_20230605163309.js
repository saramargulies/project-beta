import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListTechs() {

    const [techs, setTechs] = useState([]);

    const fetchData = async () => {
      const url = 'http://project-beta-services-api-1:8000/api/automobiles'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setOutings(data.outings);
        const years = []
        let i = 2023
        const dates = outings.map(outing =>{
          if (outing.starts.includes(i) && !years.includes(i)){
              years.push(i)
              i++
            }
          })
          setYears(years)
        }
      }
      
      useEffect(() => {
        fetchData();
      }, []);
    function getTabs () {
      outings.reverse.map(outing =>{
        years.map(year =>{
          if (outing.starts.includes(year)) {
            return (
              <tr key={outing.id}>
              <td>{ outing.location }</td>
              <td>{ outing.starts.slice(0,-9) }</td>
              <td>{ outing.starts.slice(-7,-2) }-{ outing.ends.slice(-7) }</td>
              <td>{ outing.groups_invited }
              </td>
              <td className="fixed-side"><Link className="link" to={`${outing.id}`} aria-current='page'>Edit</Link></td>
              <td>{ String(outing.attendance_taken) }</td>
            </tr>
            )
          }

        })
      })
    }

  return (
    <>
      <h1>
        Outing Overview
      </h1>
    <div className="m-3 font-link">
    </div>
      <ul className="nav nav-tabs">
        { years?.map(year => {
          return(
          <li key={year} className="nav-item">
            <a className="nav-link" aria-current="page" href="#">{ year }</a>
          </li>  
        )}) }
    </ul>
    <div className="container shadow table-responsive font-link pt-2">
        <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="">Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Groups Invited</th>
            <th>Edit Outing</th>
            <th>Attendance?</th>
          </tr>
        </thead>
        <tbody>
          {outings?.slice(-30).reverse().map(outing => {
            return(
              <tr key={outing.id}>
                <td>{ outing.location }</td>
                <td>{ outing.starts.slice(0,-9) }</td>
                <td>{ outing.starts.slice(-7,-2) }-{ outing.ends.slice(-7) }</td>
                <td>{ outing.groups_invited }
                </td>
                <td className="fixed-side"><Link className="link" to={`${outing.id}`} aria-current='page'>Edit</Link></td>
                <td>{ String(outing.attendance_taken) }</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ListTechs;
