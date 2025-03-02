import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  const [item, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  console.log(item);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {item && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Food Name
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Food Description
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Price
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {item.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {item.description}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {item.price}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default User;