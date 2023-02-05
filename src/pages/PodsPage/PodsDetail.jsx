import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import tokenService from '../../utils/tokenService';

const PodDetailPage = () => {
  const [pod, setPod] = useState({});
  const { id } = useParams();
  const token = tokenService.getToken()
  console.log(token)

  useEffect(() => {
    const fetchPod = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        const data = await response.json();
        setPod(data.pod);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPod();
  }, [id]);

  if (!pod) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Pod Detail</h1>
      <p>Pod Number: {pod.podNumber}</p>
      <p>Price: {pod.price}</p>
      <BookingForm id={id}/>
    </div>
  );
};

export default PodDetailPage;
