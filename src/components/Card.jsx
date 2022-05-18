import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data, deleteHandler }) {
  const navigate = useNavigate();
  const editHandler = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <>
      <div className="card border-2 border-blue-200 p-6 mt-5">
        <h1>Name: {data.name}</h1>
        <p>Jobs: {data.jobs}</p>
        <p>Age: {data.ages}</p>
        <div className="flex gap-3 mt-3 flex-row justify-between">
          <button
            onClick={() => editHandler(data.id)}
            className="px-2 py-1 bg-yellow-400"
          >
            edit
          </button>
          <button
            onClick={() => deleteHandler(data.id)}
            className="px-2 py-1 bg-red-400"
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}
