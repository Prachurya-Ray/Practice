import React from "react";
import Card from "./Card";
import { data } from "../config";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4">
        Welcome to Our Blog Post
      </h1>
      {/* {console.log(data)} */}
      <div className="container flex flex-wrap gap-8 p-8 mx-16 box">
        {data.map((data) => (
          <Link to={"/blogs/" + data._id} key={data._id}>
            <Card data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
