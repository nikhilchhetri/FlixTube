import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "Live",
    "Cricket",
    "Sports",
    "Travel",
    "Technology",
  ];
  return (
    <div className="">
      {buttonList.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
