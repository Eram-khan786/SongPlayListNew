
const songs = [
    { name: "bad romance", audio: "./songs/bad romance.mp3" },
    { name: "believer", audio: "./songs/Believer.mp3" },
    { name: "Bella Ciao", audio: "./songs/bellaChao.mp3" },
    {name:"let me love you",audio:"./songs/letmeloveyou.mp3"},
    {name:"Living Hell",audio:"./songs/living hell.mp3"},
    {name:"Love-Me-Like-you-Do",audio:"./songs/lovemelikeyoudo.mp3"},
    {name:"Scars",audio:"./songs/Scars.mp3"},
    {name:"unstopable",audio:"./songs/unstopable.mp3"}

  ];

  let currentAudio = null;

  function addSongsToPlaylist() {
    const images = document.querySelectorAll(".image");

    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        if (currentAudio && !currentAudio.paused) {
          if (currentAudio.src === songs[index].audio) {
          //   toggleSong(index);
          playSong(index);
          } else {
            stopSong(index);
          }
        } else {
          playSong(index);
        }
      });
    });
  }

  function playSong(index) {
    const audio = new Audio(songs[index].audio);
    audio.play();
    currentAudio = audio;
  }

  // function toggleSong() {
  //   if (currentAudio.paused) {
  //     currentAudio.play();
  //   } else {
  //     currentAudio.pause();
  //   }
  // }

  function stopSong() {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  window.addEventListener("DOMContentLoaded", addSongsToPlaylist);






  