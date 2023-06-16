import React from "react";
import Video from "./Components/Video";
import video from "./data/Data";
import PlayButton from "./Components/PlayButton";
const App = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-wrap w-50">
        {video.map((v) => (
          <Video
            key={v.id}
            title={v.title}
            channel={v.channel}
            verified={v.verified}
            views={v.views}
            time={v.time}
          >
            <PlayButton
              nam="Play"
              onPlay={() => console.log("Play", v.title)}
              onPause={() => console.log("Pause", v.title)}
            >
              {v.title}
            </PlayButton>
          </Video>
        ))}
      </div>

      {/* <PlayButton
        nam="PlayButton"
        message="Hi"
        onClick={() => alert('Hi')}
      >Click Here</PlayButton> */}
    </div>
  );
};

export default App;
