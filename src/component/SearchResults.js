import React, { useEffect, useState } from "react";
import SearchVideoCard from "./SearchVideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    getSearchVideos();
  }, [query]);

  const getSearchVideos = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_API + query + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="col-span-10">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
