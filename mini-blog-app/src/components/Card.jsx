import React from "react";

const Card = ({ data }) => {
  const { name, blog } = data;
  return (
    <div className="h-38 w-36 flex flex-col items-center gap-2 rounded-lg bg-amber-100 p-2 py-4">
      <div className="name font-bold text-lg">{name}</div>
      <p className="text-xs text-justify px-1 overflow-hidden">{blog}</p>
      <button className="bg-red-500 text-white w-[50%] rounded-lg px-2 cursor-pointer">Delete</button>
    </div>
  );
};

export default Card;
