import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../config";
const Blog = () => {
  const { id } = useParams();
  const blogData = data.find((value)=>value._id==id);
  const {name, blog} = blogData;
  return <div>
    <h1 className="text-2xl font-bold text-center mt-6">{name}</h1>
    <p className="px-16 mt-6 text-justify">{blog}</p>
  </div>;
};

export default Blog;
