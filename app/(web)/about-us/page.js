import axios from "axios";
import Link from "next/link";
import React from "react";
const getData = async () => {
  const { status, data, error } = await axios.get(
    `https://dummyjson.com/products`
  );

  return data;
};
const AboutUs = async () => {
  const product = await getData();
  return (
    <div className="grid grid-cols-4 gap-4">
      {product?.products?.map((item) => (
        <div key={item} className="p-6 rounded-md bg-gray-800">
          {item.title} <br /> {item.description}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
