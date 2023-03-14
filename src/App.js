import './App.css';
import Video from './Video';
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import video4 from './videos/video4.mp4';

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video 
        video={video1}
        channel="brookemonk_"
        description="Christmas goals🎉🎊🌲"
        song="Justin Beiber - Mistletoe"
        likes={110}
        messages={444}
        shares={84}
        />
        <Video 
        video={video2}
        channel="moyadavid1"
        description="Couples goals. Let's go 💖💥"
        song="Billnas - Puuh"
        likes={220}
        messages={158}
        shares={120}
        />
        <Video 
        video={video3}
        channel="trevorsilaz"
        description="Birthday surprise 🎂🎉🎊"
        song="Jay Melody - Nakupenda"
        likes={555}
        messages={256}
        shares={220}
        />
        <Video 
        video={video4}
        channel="colloblue_udc"
        description="Dancing goals. This girl in on fire 💥🔥"
        song="Deejay_Blaxx Mix"
        likes={999}
        messages={444}
        shares={248}
        />
      </div>
    </div>
  );
}

export default App;
