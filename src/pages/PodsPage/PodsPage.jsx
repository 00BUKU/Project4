import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import tokenService from "../../utils/tokenService";
import "./PodsPage.css";

const PodsPage = () => {
  const navigate = useNavigate();
  const token = tokenService.getToken();
  const [pods, setPods] = useState([]);

  useEffect(() => {
    const fetchPods = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        console.log(data.pods);
        setPods(data.pods);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPods();
  }, []);
  if (!token) {
    navigate("/login");
    return <h1>UNAUTHORIZED</h1>;
  } else {
    if (!Array.isArray(pods)) {
      return <h1>Loading...</h1>;
    }

    if (pods.length === 0) {
      return <p>No pods to display</p>;
    }
    return (
      <div>
        <h1>Pods</h1>
        <ul>
          {pods.map((pod) => (
            <li key={pod._id}>
              <Link to={`/pod/${pod._id}`}>
                Pod Number: {pod.podNumber} | Price: {pod.price}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default PodsPage;
