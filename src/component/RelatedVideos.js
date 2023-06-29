import React, { useEffect, useState } from "react";
import { RELATED_SEARCH } from "../utils/constants";
import RecommendedVideoCard from "./RecommendedVideoCard";

const RelatedVideos = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const getRelatedVideos = async () => {
    const data = await fetch(RELATED_SEARCH + videoId);
    const json = await data.json();
    setVideoInfo(json?.items);
  };

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  return (
    <div className="m-1 mt-8">
      {videoInfo?.map((info) => (
        <RecommendedVideoCard key={info?.id?.videoId} data={info}/>
      ))}
    </div>
  );
};

export default RelatedVideos;
