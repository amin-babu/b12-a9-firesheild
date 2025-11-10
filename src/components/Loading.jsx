import React from "react";

const Loading = () => (
  <div className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center gap-2">
    <div className="h-10 w-10 animate-spin border-4 border-gray-300 border-t-[#037965] rounded-full"></div>
    <p className="text-sm text-gray-600">Loading...</p>
  </div>
);

export default Loading;
