import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  // require login
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    
    if (!token) {
      navigate("./signup");
    }
  });

  return <>
  <h1>Home</h1></>;
}
