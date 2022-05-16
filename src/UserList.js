import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function UserList() {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUSer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div className="container">
        <Carousel>
            {listOfUSer.map((user) => (
                <div>
                    <div key={user.id}>
                        <div className="card">
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                            <p>Works at: {user.company.name}</p>
                            <p>Adress: {user.address.street},{user.address.city}</p><br/>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
    
  );
}

export default UserList;
