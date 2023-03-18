console.log('Background Script Running...');

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse('Hello from the Background Script!');
});
