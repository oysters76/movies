window.onload = function (event) {
  if (searchText.value != '') {
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
  }
  initalText = '';
  prefix = 'Find a movie to ';
  adjectives = [
    'get inspired',
    'be dazzled',
    'be amazed',
    ' put number 2',
    ' go to the toilet',
    ' be an idiot',
  ];
  out = prefix + adjectives[0] + '!';
  count = 0;
  waitingTurns = 0;

  setInterval(function () {
    s = '';
    if (initalText == out) {
      if (waitingTurns > 20) {
        count--;
        s = initalText.slice(0, count);
        if (count <= prefix.length) {
          initalText = s;
          waitingTurns = 0;
          out =
            prefix +
            adjectives[Math.floor(Math.random() * adjectives.length)] +
            '!';
        }
      } else {
        s = initalText;
      }
      waitingTurns++;
      subtitle.innerHTML = s;
    } else {
      initalText = out.slice(0, count);
      s = initalText;
      count++;
      subtitle.innerHTML = s;
    }
  }, 80);
};

function performAction(event) {
  if (event.currentTarget.id == 'searchBtn') {
    searchText.focus();
    animateTitleUp();
  }
}

function animateTitleUp() {
  marginTop = 15;
  animation = setInterval(moveTitleUp, 10);
  x = 0;
  maintitle.style.opacity = 1;
  subtitle.style.opacity = 1;
  function moveTitleUp() {
    if (marginTop <= -1) {
      clearInterval(animation);
      maintitle.style.display = 'none';
      subtitle.style.display = 'none';
      showMoviesAnimation();
    } else {
      marginTop -= easeInOutQuart(x);
      maintitle.style.opacity -= 0.1;
      subtitle.style.opacity -= 0.1;
      x += 0.01;
      document.getElementsByClassName('container')[0].style.marginTop =
        marginTop + '%';
    }
  }
}

function showMoviesAnimation() {
  let moviesDivArr = document.querySelectorAll('.movieGrid > div');
  let animations = [];
  let delay = 10;
  for (let i = 0; i < moviesDivArr.length; i++) {
    moviesDivArr[i].style.display = 'block';
    moviesDivArr[i].style.opacity = '0';
    let opacity = 0;
    let t = 0;

    animations.push(setInterval(appearAnimation, delay));
    delay += 5;

    function appearAnimation() {
      opacity = easeInOutQuart(t);
      moviesDivArr[i].style.opacity = '' + opacity;
      t += 0.1;
      if (t >= 1) {
        clearInterval(animations[i]);
      }
    }
  }
}

function easeInOutQuart(x) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}
