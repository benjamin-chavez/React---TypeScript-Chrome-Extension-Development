chrome.runtime.onInstalled.addListener((details) => {
  // console.log(details);
  chrome.contextMenus.create({
    title: 'Test Context Menut 1',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.onClicked.addListener((e) => {
    console.log(e);
  });

  chrome.contextMenus.create({
    title: 'Test Context Menu 2',
    id: 'contextMenu2',
    parentId: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.create({
    title: 'Test Context Menu 3',
    id: 'contextMenu3',
    parentId: 'contextMenu1',
    contexts: ['page', 'selection'],
  });
});

console.log('Background Script Running');
