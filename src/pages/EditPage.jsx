import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    jobs: "",
    ages: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/user/" + id);
        setInput(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:3001/user/" + id,
        input
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-72 mx-auto mt-12 flex flex-col gap-4 justify-center p-1"
      >
        <div className="flex flex-row justify-between">
          <label htmlFor="name">Name :</label>
          <input
            onChange={inputHandler}
            type="text"
            id="name"
            name="name"
            value={input.name}
            className="border border-slate-300 rounded"
          />
        </div>
        <div className="flex flex-row justify-between">
          <label htmlFor="Jobs">Jobs :</label>
          <input
            onChange={inputHandler}
            type="text"
            id="Jobs"
            name="jobs"
            value={input.jobs}
            className="border border-slate-300 rounded"
          />
        </div>
        <div className="flex flex-row justify-between">
          <label htmlFor="Ages">Ages :</label>
          <input
            onChange={inputHandler}
            type="number"
            id="Ages"
            name="ages"
            value={input.ages}
            className="border border-slate-300 rounded"
          />
        </div>
        <button type="submit" className="px-3 py-2 bg-blue-200 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
