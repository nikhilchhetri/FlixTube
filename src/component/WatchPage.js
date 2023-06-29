import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { COMMENTS_API, SEARCH_BY_ID } from "../utils/constants";
import parse from "html-react-parser";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState();
  const [videoDetails, setVideoDetails] = useState();
  const [showDescription, setShowDescription] = useState(false);
  useEffect(() => {
    dispatch(closeMenu());
  });
  const [searchParams] = useSearchParams();
  const videoIdUrl = searchParams.get("v");
  const getComment = async () => {
    const data = await fetch(COMMENTS_API + videoIdUrl);
    const json = await data.json();
    setComments(json?.items);
  };
  const getVideoDetails = async () => {
    const data = await fetch(SEARCH_BY_ID + videoIdUrl);
    const json = await data.json();
    setVideoDetails(json?.items[0]);
  };

  useEffect(() => {
    getVideoDetails();
    getComment();
  }, [videoIdUrl]);
  return (
    <div className="col-span-8 flex">
      <div className="flex flex-col">
        <iframe
          width="860"
          height="480"
          src={"https://www.youtube.com/embed/" + videoIdUrl + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="m-8"
        ></iframe>
        <h1 className="ml-8 font-bold text-xl">
          {videoDetails?.snippet?.title}
        </h1>
        <hr></hr>
        <div className=" bg-gray-100 shadow-lg rounded-2xl w-[850px] ml-8 p-3">
          <h1 className="font-semibold">Description:</h1>
          {showDescription && (
            <div>{parse(videoDetails?.snippet?.description)}</div>
          )}
          <h3
            className="p-2 font-semibold justify-end"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show less" : "Show more"}
          </h3>
        </div>
        <div className="ml-7">
          <h1 className="text-xl font-semibold m-2">Comments:</h1>
          {comments?.map((comment) => (
            <CommentContainer comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
      <RelatedVideos videoId={videoIdUrl} />
    </div>
  );
};

export default WatchPage;
