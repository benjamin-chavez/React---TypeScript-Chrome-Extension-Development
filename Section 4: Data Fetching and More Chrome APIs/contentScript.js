// console.log('Hello from the content Script');
// confirm('Hello from the content Script');

const text = [];
const aTags = document.getElementsByTagName('a');

for (const tag of aTags) {
  // tag.textContent = 'Hello World!';

  // if (tag.textContent.includes('i')) {
  //   tag.style = 'background-color: red;';
  // }

  text.push(tag.textContent);
}

// TODO: Review this and compare it to chrome.runtime.sendMessage
chrome.storage.local.set({
  text,
});

chrome.runtime.sendMessage(null, text, (response) => {
  console.log("I'm from the send response function: " + response);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
});
