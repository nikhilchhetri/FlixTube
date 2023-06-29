import React from "react";
import parse from "html-react-parser";

// const COMMENT_DATA = [
//   {
//     name: "Nikhil Chhetri",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     replies: [
//       {
//         name: "Nikhil Chhetri",
//         comment:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//         replies: [],
//       },
//       {
//         name: "Nikhil Chhetri",
//         comment:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//         replies: [
//           {
//             name: "Nikhil Chhetri",
//             comment:
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//             replies: [],
//           },
//         ],
//       },
//       {
//         name: "Nikhil Chhetri",
//         comment:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//         replies: [
//           {
//             name: "Nikhil Chhetri",
//             comment:
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//             replies: [
//               {
//                 name: "Nikhil Chhetri",
//                 comment:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Nikhil Chhetri",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     replies: [],
//   },
//   {
//     name: "Nikhil Chhetri",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     replies: [],
//   },
//   {
//     name: "Nikhil Chhetri",
//     comment:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     replies: [],
//   },
// ];

// const Comment = ({ data }) => {
//   const { name, comment } = data;
//   return (
//     <div className="flex shadow-sm rounded-lg bg-gray-100 p-2 m-5">
//       <div className="h-12 w-12">
//         <img src={UserIcon} alt="" />
//       </div>
//       <div className="px-3">
//         <h1 className="font-bold">{name}</h1>
//         <p>{comment}</p>
//       </div>
//     </div>
//   );
// };

// const CommentList = ({ commentsData }) => {
//   return commentsData.map((commentData, index) => (
//     <div>
//       <Comment key={index} data={commentData} />
//       <div className="ml-5 border border-l-black">
//         <CommentList commentsData={commentData.replies} />
//       </div>
//     </div>
//   ));
// };

const CommentContainer = ({ comment }) => {
  return (
    <div className="p-2 m-2 flex  w-[600px] overflow-hidden ">
      <img
        alt="profile"
        src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        className="rounded-full h-10 my-1"
      />
      <div className="px-4">
        <h1 className="font-semibold">
          @{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </h1>
        <h3>
          {parse(comment?.snippet?.topLevelComment?.snippet?.textDisplay)}
        </h3>
      </div>
    </div>
  );
};

export default CommentContainer;
