// console.log('Background Script Running');

chrome.runtime.onInstalled.addListener((details) => {
  // console.log(details);

  // INITIALIZE DEFAULT VALUES FOR ALL FIELDS THAT THE EXTENSION WILL USE
  chrome.storage.local.set({
    shows: [],
  });

  chrome.contextMenus.create({
    title: 'Search TV Show',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  // TEXT TO SPEECH CHROME API
  chrome.contextMenus.create({
    title: 'Read this text',
    id: 'contextMenu-tts',
    contexts: ['page', 'selection'],
  });

  // Chrome Search API
  // chrome.contextMenus.onClicked.addListener((e) => {
  //   console.log(e);

  //   chrome.search.query({
  //     disposition: 'NEW_TAB',
  //     // text: e.selectionText,
  //     text: `bjj ${e.selectionText}`,
  //   });
  // });

  // Context Menu Child Menus
  // chrome.contextMenus.create({
  //   title: 'Test Context Menu 2',
  //   id: 'contextMenu2',
  //   parentId: 'contextMenu1',
  //   contexts: ['page', 'selection'],
  // });

  // chrome.contextMenus.create({
  //   title: 'Test Context Menu 3',
  //   id: 'contextMenu3',
  //   parentId: 'contextMenu1',
  //   contexts: ['page', 'selection'],
  // });
});

// Chrome Tabs API
chrome.contextMenus.onClicked.addListener((e) => {
  // FIXME: TEXT TO SPEECH WOULDN't WORK FOR SOME REASON
  if (e.menuItemId === 'contextMenu-tts') {
    console.log('SPEAKING');
    console.log(e.selectionText);

    chrome.tts.speak(e.selectionText, {
      rate: 1,
    });
  } else {
    // console.log(e);

    // chrome.tabs.query(
    //   {
    //     currentWindow: true,
    //   },
    //   (tabs_array) => {
    //     console.log(tabs_array);
    //   }
    // );

    // chrome.tabs.create({
    //   url: `https://www.youtube.com/results?search_query=${e.selectionText}`,
    // });

    // FETCH API
    fetch(`https://api.tvmaze.com/search/shows?q=${e.selectionText}`)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => {
        console.log(data);
        chrome.storage.local.set({
          shows: data,
        });
      });
  }
});

// chrome.storage.local.get(['text'], (res) => {
//   console.log('first');
//   console.log(res);
// });

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log(msg);
//   console.log(sender);
//   // console.log(sendResponse);
//   sendResponse('Received message from background!');

//   // SEND MESSAGE TO CONTENT SCRIPT
//   chrome.tabs.sendMessage(sender.tab.id, 'Got your message. - Luv, Background');
// });
