AFRAME.registerComponent('audiohandler', {
  init:function() {
     let playing = true;
     let audio = document.querySelector("#audio");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
})