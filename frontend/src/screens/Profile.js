import React, { useEffect, useState } from "react";
import "../css/Profile.css";

export default function Profie() {
  const [user, setUser] = useState("");

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/${JSON.parse(localStorage.getItem("user"))._id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      ).then((res) => res.json())
      .then((result) => {
        setUser(result.user);
      });
    } catch (error) {
      
      console.error("Error fetching user data: ", error);
    }
  };



  useEffect(() => {
    fetchUserData(); 
  }, []);

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}
