import "react-jinke-music-player/assets/index.css";
import ReactJkMusicPlayer from "react-jinke-music-player";

const audioLists = [
  {
    name: "Dile Umeed Tora hai kisi na",
    musicSrc: "https://html.com/wp-content/uploads/flamingos.mp3",
    cover:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440",
    singer: "Atif Aslam",
  },
];

function MusicPlayer() {
  return (
    <ReactJkMusicPlayer
      mode="full"
      preload
      showMediaSession
      showReload={false}
      showDownload={false}
      showPlayMode={false}
      showThemeSwitch={false}
      showLyric={false}
      showDestroy={false}
      showMiniProcessBar={false}
      audioLists={audioLists}
    />
  );
}

export default MusicPlayer;
