const rules: {
  [url: string]: () => void;
} = {
  // 'https://www.nytimes.com/': filterNYTTechnology,
  'https://www.nytimes.com/': filterNYTTechnology2,
};

function filterNYTTechnology() {
  return;

  const app = document.getElementById('site-content');
  // const wrapper = document.getElementById('top-wrapper');
  const wrapper = document.getElementById('dfp-ad-top');

  app.removeChild(wrapper);
}

function filterNYTTechnology2() {
  const divs = document.getElementsByTagName('div');

  for (const div of divs) {
    if (div.className.indexOf('ad') != -1) {
      div.style.display = 'none';
    }
  }
}

if (document.URL in rules) {
  console.log(document.URL);
  rules[document.URL]();
}

// const intervalId = setInterval(() => {
//   const app = document.getElementById('site-content');
//   const wrapper = document.getElementById('dfp-ad-top');

//   // if app and wrapper elements exist, remove DOM node and clear timer
//   if (app && wrapper) {
//     app.removeChild(wrapper[0]);
//     clearInterval(intervalId);
//   }
// }, 100);
