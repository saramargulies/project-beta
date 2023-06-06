import React, { useEffect, useState } from 'react';

function ListAppts() {

    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
      const url = 'http://localhost:8080/api/appointments/'
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments)
        }
      }
      
      useEffect(() => {
        fetchData();
      }, []);
      return (
        <>
        <table className="table table-hover table-striped border border-dark-subtle shadow container-fluid mt-5">
          <thead className="table-group-divider">
            <tr>
              <th>VIN</th>
              <th>VIP?</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="border-top border-dark-subtle">
            {appointments.map(appointment => {
              return (
              <tr className="object-fit" key={appointment.id }>
                <td>{ appointment.vin }</td>
                <td>{ appointment.vin }</td>
                <td>{ appointment.date_time }</td>
                <td>{ appointment.date_time }</td>
              </tr>
            );
            })}
          </tbody>
        </table>
        </>);
      }

export default ListAppts;
