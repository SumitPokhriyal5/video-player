import { FormEvent, useEffect, useState } from "react";

const Comments = ({ id }: {id:string | undefined}) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const handleCommentSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setComments([...comments, newComment]);
    localStorage.setItem(
      `${id}-comments`,
      JSON.stringify([...comments, newComment])
    );
    setNewComment("");
  };
  useEffect(() => {
    const storedComments = localStorage.getItem(`${id}-comments`);
    if (storedComments) setComments(JSON.parse(storedComments));
  }, [id]);
  return (
    <div className="w-11/12 mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion ({comments.length})
        </h2>
      </div>
      <form className="mb-6" onSubmit={handleCommentSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Post comment
        </button>
      </form>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          All Comments:
        </h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {comments?.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
