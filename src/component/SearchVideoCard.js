import React from "react";

const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, channelTitle, title } = snippet;
  return (
    <div className="p-2 m-2 rounded-lg shadow-sm hover:shadow-lg flex flex-row">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="m-5">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SearchVideoCard;
