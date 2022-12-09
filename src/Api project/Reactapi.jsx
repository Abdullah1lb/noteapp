import React, { useEffect, useState } from "react";

const Reactapi = () => {
  const [sadd, set] = useState([]);
  const popdata = async () => {
    const api = await fetch("https://dummyjson.com/users");
    const response = await api.json();
    console.log(response.users);
    set(response.users);
  };
  useEffect(() => {
    popdata();
  }, []);

  return (
    <>
      <div className="table-responsive">
        <table
          className="table table-striped
    table-hover	
    table-primary
    align-middle"
        >
          <thead className="table-light text-center">
            <tr>
              <th>Image</th>
              <th className="px-1">First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Height</th>
              <th>Street</th>
              <th>Blood Group</th>
            </tr>
            {sadd.map((arr, ind) => {
              return (
                <tr className="table-primary font-weight-normal " key={ind}>
                  <td scope="row">
                    <img src={arr.image} alt="img" height="40" />
                  </td>
                  <td>{arr.firstName}</td>
                  <td>{arr.lastName}</td>
                  <td> {arr.age} </td>
                  <td>{arr.gender}</td>
                  <td>{arr.email}</td>
                  <td>{arr.phone}</td>
                  <td>{arr.height}</td>
                  <td>{arr.university}</td>
                  <td>{arr.bloodGroup}</td>
                </tr>
              );
            })}
          </thead>
          <tbody className="table-group-divider"></tbody>
        </table>
      </div>
    </>
  );
};
export default Reactapi;
/* <tr className="table-primary" key={ind}>
<td scope="row">{arr.id}</td>
<td> {arr.lat} </td>
<td>{arr.lon}</td>
<td>{arr.category}</td>
<td>{arr.name}</td>
<td>{arr.created_on}</td>
<td>{arr.geolocation_degrees}</td>
</tr> */
/* <th>First Light</th>
              <th>Last Light</th>
              <th>Dawn</th>
              <th>Dusk</th>
              <th>Solar Moon</th>
              <th>Day Length</th> */
