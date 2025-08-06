import React from "react";
import Card from "./Card";
import { data } from "../config";

const Body = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4">Welcome to Our Blog Post</h1>
      {/* {console.log(data)} */}
      <div className="container flex flex-wrap gap-8 p-8 mx-16">
        {data.map((data) => (
          <Card data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
