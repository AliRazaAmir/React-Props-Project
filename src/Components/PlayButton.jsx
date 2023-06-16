import React from 'react'

const PlayButton = ({message,children,onPlay, onPause ,}) => {
let playing = true;

  function clickHandler(e) {
    e.stopPropagation()
    playing ? onPause():
    onPlay();

    playing= !playing;
  }

  return (
    <div>
      <button
        className="bg-black rounded-md p-2 w-100 text-white"
        onClick={clickHandler}
      >
        {children}:{playing ? ">" : "II"}
      </button>
    </div>
  );
};

export default PlayButton
