import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setName(res.data.name);
      setDescription(res.data.description);
      setPrice(res.data.price);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    description: description,
    price: price,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl text-orange-600 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2 mr-4d">Items Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 font-bold text-black py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter food name"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 font-bold text-black py-6 pl-6 mt-4"
          type="description"
          placeholder="Enter food description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 font-bold text-black py-6 pl-6 mt-4"
          type="price"
          placeholder="Enter food price"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE ITEMS
        </button>
      </form>
    </div>
  );
}

export default Edit;
