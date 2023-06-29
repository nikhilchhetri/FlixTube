import React from "react";
import cropTitle from "../helper/cropTitle";
import uploadTime from "../helper/uploadTime";
import { useNavigate } from "react-router-dom";

const RecommendedVideoCard = ({ data }) => {
  const videoData = data?.snippet;
  const title = videoData?.title;
  const maxLength = 40;
  const croppedTitle = cropTitle(title, maxLength);
  const time = uploadTime(videoData?.publishTime);
  const navigate = useNavigate();
  return (
    <div
      className="flex pb-4 gap-2 cursor-pointer"
      onClick={() => navigate("/watch?v=" + data?.id?.videoId)}
    >
      <img
        className="w-60 rounded-md"
        src={videoData?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="pb-2">
        <h1 className="font-semibold">{croppedTitle}</h1>
        <h2>{videoData?.channelTitle}</h2>
        <h2>{time}</h2>
      </div>
    </div>
  );
};

export default RecommendedVideoCard;
