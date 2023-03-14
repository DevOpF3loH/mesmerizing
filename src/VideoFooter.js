import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({ channel, description, song }) {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
        <h4>@{channel}</h4>
        <p>{description}</p>
        <div className="videoFooter_ticker">
        <MusicNoteIcon /> 
        <p>{song}</p> 
        <img className='videoFooter_record' src='https://static.thenounproject.com/png/934821-200.png' alt=''/>          
        </div>
      </div>
    </div>
  )
}

export default VideoFooter