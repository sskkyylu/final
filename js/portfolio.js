let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })


var audio = document.getElementById('myAudio');
var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');

playBtn.addEventListener('click', function() {
  audio.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', function() {
  audio.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'inline-block';
});

