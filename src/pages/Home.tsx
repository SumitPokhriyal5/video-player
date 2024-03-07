import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getAllVideosApi } from "../store/videos.api";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()
  const { loading, data } = useSelector((store: RootState) => store.videosManager); 
  const [page, setPage] = useState<number>(3)
  const [queryUrl, setQueryUrl] = useState<string>(`page=${page}`);

  useEffect(() => {
    dispatch(getAllVideosApi(queryUrl));
  }, [queryUrl, dispatch]);

  console.log("data:", data)
  return (
    <div className="grid grid-cols-3 gap-10 items-center justify-center w-11/12 m-auto">
      {data?.posts?.map((video) => (
        <VideoCard key={video.postId} thumbnail={video.submission.thumbnail} title={video.submission.title} userAvatar={video.creator.pic} userName={video.creator.name} userHandle={video.creator.handle} likeCount={video.reaction.count} commentCount={video.comment.count} />
      ))}
    </div>
  )
}

export default Home