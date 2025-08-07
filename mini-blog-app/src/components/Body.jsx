import React from "react";
import Card from "./Card";
import { data } from "../utils/config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {

  const blogItems = useSelector(store=>store.blogs.items)

  return (
    <div className="box-border">
      <h1 className="text-center font-bold text-2xl mt-4">
        Welcome to Our Blog Post
      </h1>
      {/* <p>item {blogItems.length}</p>
      {console.log(blogItems)} */}
      <div className="container flex flex-wrap gap-8 p-8 mx-16 box-border">
        {blogItems.map((data) => (
          <Link to={"/blogs/" + data._id} key={data._id}>
            <Card data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
