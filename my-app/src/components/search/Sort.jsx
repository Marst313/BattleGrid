"use client";

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/Redux/features/users/userSlice";

export const Sort = ({ title, data }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(setFilter({ ...filter, [name]: value }));
  };

  return (
    <select
      id={title}
      className="w-full cursor-pointer rounded-md bg-abu2 px-5 py-2.5 focus:outline-none lg:w-auto"
      defaultValue={data[0].value}
      onChange={handleChange}
      name={title.toLowerCase().replaceAll(" ", "")}
    >
      {title}
      {data.map((item, index) => {
        return (
          <option
            key={index}
            value={item.value}
            disabled={index === 0}
            className="cursor-pointer bg-abu2 py-4"
          >
            {index === 0 ? title : item.label}
          </option>
        );
      })}
    </select>
  );
};
