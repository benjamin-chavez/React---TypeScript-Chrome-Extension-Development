console.log('Content Script is running!');

chrome.runtime.sendMessage('Hello from the Content Script!', (res) => {
  console.log(res);
});
