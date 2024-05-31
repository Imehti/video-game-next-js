"use client";
import React, { useState } from "react";
import { AutoComplete } from "antd";

const names = [
  "Ali",
  "Mohammad",
  "Sara",
  "Reza",
  "Fatima",
  "Hossein",
  "Zahra",
  "Mahdi",
  //...
];

const SearchBox: React.FC = () => {
  const [options, setOptions] = useState(
    names.map((name) => ({ value: name }))
  );
  const [selectedValue, setSelectedValue] = useState("");

  const onChange = (text: string) => {
    if (text.length > 0) {
      const filteredOptions = names.filter((name) =>
        name.toLowerCase().includes(text.toLowerCase())
      );
      const optionsObjects = filteredOptions.map((name) => ({ value: name }));
      setOptions(optionsObjects);
    } else {
      setOptions(names.map((name) => ({ value: name })));
    }
  };
  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className="relative">
        <AutoComplete
          className="rounded-2xl bg-searchIcon sm:w-64 w-36 sm:pl-10 p-1 pl-8 text-xs sm:text-md font-mono"
          options={options}
          onChange={onChange}
          onSelect={handleSelect}
          placeholder="Discover New Games"
        />
        <span className="absolute sm:left-3 left-1 top-1/2 -translate-y-1/2 text-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default SearchBox;
