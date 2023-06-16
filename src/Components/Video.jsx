import React from "react";

const Video = ({title, channel, verified, views, time, children}) =>{

  return (
    <>
      <div className=" w-80 mt-10">
        <div className="">
          <img src="https://loremflickr.com/240/260" alt="" />
          <div className="text-2xl">{title}</div>
          <div>
            {channel}
            {verified ? "✅" : null}
          </div>
          <div className=" ">
            {views} Views <span>.</span> {time}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Video;
