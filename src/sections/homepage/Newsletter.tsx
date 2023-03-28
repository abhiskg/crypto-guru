import React from "react";

export const Newsletter = () => {
  return (
    <div className="h-20 bg-btn-secondary">
      <div className="custom-container mx-auto flex h-full items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Sign up for our exclusive email newsletter
        </h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Enter Email"
            className="rounded-3xl px-5 py-1"
          />
          <button
            className={`flex w-32 items-center justify-center gap-2 rounded-3xl  bg-btn-primary py-1.5 `}
          >
            <span className="font-semibold">Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="15" y1="16" x2="19" y2="12" />
              <line x1="15" y1="8" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
