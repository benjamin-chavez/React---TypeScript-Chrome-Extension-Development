chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // console.log(details);

    const url = details.url;
    const keywordFilters = [
      'googleadservices',
      'googlesyndication',
      'g.doubleclick',
    ];

    for (const keyword of keywordFilters) {
      if (url.indexOf(keyword) != -1) {
        console.log(url);
        return {
          cancel: true,
        };
      }
    }

    return {
      cancel: false,
    };
  },
  {
    urls: [
      '<all_urls>',
      // '*://*.googleadservices.com/*',
      // '*://*.tpc.googlesyndication.com/*',
      // '*://*.g.doubleclick.net/*',
    ],
  },
  ['blocking']
);
