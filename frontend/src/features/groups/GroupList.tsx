import React from "react";

const GroupList = () => {
  return (
    <div className="flex max-h-[100vh] flex-col gap-y-6 overflow-y-scroll">
      {Array.from({ length: 20 }).map((item, idx) => (
        <div className="min-h-20 w-full bg-blue-500" key={idx}></div>
      ))}
    </div>
  );
};

export default GroupList;
