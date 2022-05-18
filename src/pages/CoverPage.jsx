import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
export default function CoverPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/user");
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/user/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="card-container container mx-auto flex justify-evenly flex-wrap gap-5">
        {data?.map((item) => (
          <Card key={item.id} data={item} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
}
