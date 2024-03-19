export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const forest = new Audio("./Sounds/Floresta.wav");
  const cloudy = new Audio("./Sounds/Chuva.wav");
  const coffee = new Audio("./Sounds/Cafeteria.wav");
  const flame = new Audio("./Sounds/Lareira.wav");
  let musics = { forest, cloudy, coffee, flame };

  musics.forest.loop = true;
  musics.cloudy.loop = true;
  musics.coffee.loop = true;
  musics.flame.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function forestMusicOn() {
    musics.forest.play();
    musics.cloudy.pause();
    musics.coffee.pause();
    musics.flame.pause();
  }

  function cloudyMusicOn() {
    musics.forest.pause();
    musics.cloudy.play();
    musics.coffee.pause();
    musics.flame.pause();
  }
  function coffeeMusicOn() {
    musics.forest.pause();
    musics.cloudy.pause();
    musics.coffee.play();
    musics.flame.pause();
  }
  function flameMusicOn() {
    musics.forest.pause();
    musics.cloudy.pause();
    musics.coffee.pause();
    musics.flame.play();
  }

  return {
    pressButton,
    timeEnd,
    forestMusicOn,
    cloudyMusicOn,
    coffeeMusicOn,
    flameMusicOn,
  };
}
/*
  function playAudio(music, musics){
    let isOn = music.classList.contains('on')
    isOn == false ? musics.pause() : musics.play()
  }*/
