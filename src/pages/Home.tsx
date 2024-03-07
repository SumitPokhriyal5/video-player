import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getAllVideosApi } from "../store/videos.api";
import VideoCard from "../components/VideoCard";
import VideoGridSkeleton from "../components/VideoGridSkeleton";

const Home = () => {
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>();
  const { loading, data } = useSelector(
    (store: RootState) => store.videosManager
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalPages = 10;

  useEffect(() => {
    dispatch(getAllVideosApi(`page=${currentPage}`));
  }, [currentPage, dispatch]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log("data:", data);
  if (loading)
    return (
      <div className="grid grid-cols-3 gap-10 items-center justify-center w-11/12 m-auto">
        {[0,1,2,3,4,5].map((el) => (
          <VideoGridSkeleton key={el} />
        ))}
      </div>
    );
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 items-center justify-center w-11/12 m-auto">
        {data?.posts?.map((video) => (
          <VideoCard
            key={video.postId}
            thumbnail={video.submission.thumbnail}
            title={video.submission.title}
            userAvatar={video.creator.pic}
            userName={video.creator.name}
            userHandle={video.creator.handle}
            likeCount={video.reaction.count}
            commentCount={video.comment.count}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded-md ${
            currentPage === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          disabled
          className="px-4 py-2 bg-blue-100 text-black rounded-md"
        >
          {currentPage}
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
