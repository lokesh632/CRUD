import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    description: description,
    price: price,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/users", data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl text-orange-600 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2 mr-4d">ADD DETAILS</h2>
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
          className="bg-white/10 outline-none font-normal border border-zink-400 font-bold text-black py-6 pl-6 mt-4"
          type="description"
          placeholder="Enter food description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 font-bold text-black py-6 pl-6 mt-4"
          type="price"
          placeholder="Enter food price."
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD ITEMS
        </button>
      </form>
    </div>
  );
}

export default Add;
