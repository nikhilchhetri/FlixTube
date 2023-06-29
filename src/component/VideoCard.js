import React from "react";
import formatViewCount from "../helper/formatViewCount";
import uploadTime from "../helper/uploadTime";
import cropTitle from "../helper/cropTitle";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  const croppedTitle = cropTitle(title,50);
  const formattedViewCount = formatViewCount(statistics.viewCount);
  const time = uploadTime(publishedAt);
  return (
    <div className="p-2 m-2 rounded-lg w-64 hover:shadow-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-1">{croppedTitle}</li>
        <li className="font-medium py-1">{channelTitle}</li>
        <li className="flex justify-between"><p>{formattedViewCount} Views</p>
            <p>{time}</p>
        </li>
        
      </ul>
    </div>
  );
};

export default VideoCard;
