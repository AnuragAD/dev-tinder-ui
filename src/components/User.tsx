import React from "react";

const User = ({ request, index, onButtonClick }) => {
  const { firstName, lastName, photoUrl, gender, age } =
    request?.fromUserId ?? request;
  return (
    <>
      <div className="text-4xl font-thin opacity-30 tabular-nums">
        {index + 1}
      </div>
      <div>
        <img className="size-10 rounded-box" src={photoUrl} />
      </div>
      <div className="list-col-grow">
        <div>{firstName + " " + lastName}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {gender} {age} years
        </div>
      </div>
      {/* View user Profile Icon*/}
      {request?.fromUserId && (
        <div>
          <button
            className="btn btn-square btn-ghost tooltip tooltip-info"
            data-tip="View Profile"
            onClick={() => onButtonClick("view", request._id, index)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
              />
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          {/* Remove user Icon*/}
          <button
            className="btn btn-square btn-ghost tooltip tooltip-error"
            data-tip="Reject Connection Request"
            onClick={() => onButtonClick("rejected", request._id, index)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {/* Add user Icon*/}
          <button
            className="btn btn-square btn-ghost tooltip tooltip-success"
            data-tip="Accept Connection Request"
            onClick={() => onButtonClick("accepted", request._id, index)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {!request?.fromUserId && (
        <div>
          <button
            className="btn btn-square btn-ghost tooltip tooltip-info"
            data-tip="View Profile"
            onClick={() => onButtonClick("view", request._id, index)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
              />
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          {/* Remove user Icon*/}
          <button
            className="btn btn-square btn-ghost tooltip tooltip-error"
            data-tip="Block User"
            onClick={() => onButtonClick("block", request._id, index)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default User;
