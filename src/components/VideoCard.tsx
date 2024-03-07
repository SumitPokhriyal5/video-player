import React from "react";
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  userAvatar: string;
  userName: string;
  userHandle: string;
  likeCount: number;
  commentCount: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  userAvatar,
  userName,
  userHandle,
  likeCount,
  commentCount,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-3xl" src={thumbnail} alt="Video Thumbnail" />
      <div className="px-6 py-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex items-center mb-2 gap-2">
          <img
            className="w-10 h-10 rounded-full shadow-lg"
            src={userAvatar}
            alt={userName}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {userName}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {userHandle}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FcLike />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {likeCount}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FcComments />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {commentCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
