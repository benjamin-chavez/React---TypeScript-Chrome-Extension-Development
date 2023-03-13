console.log('Hello from the Chrome Options Page!');

const nameInput = document.getElementById('name-input');
const timeInput = document.getElementById('time-input');
const saveBtn = document.getElementById('save-btn');

// Update Options on "Save Options" Button Click
saveBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;

  chrome.storage.sync.set(
    {
      name: name,
      notificationTime: notificationTime,
    },
    () => {
      // console.log(`Name is set to ${name}`);
      console.log(`Settings have been saved`);
    }
  );
});

// This will run everytime we load the options page because it is not in an event listener
chrome.storage.sync.get(['name', 'notificationTime'], (res) => {
  console.log(res);
  nameInput.value = res.name ?? 'Enter your name';
  timeInput.value = res.notificationTime ?? 1000;
});

setInterval(() => {
  console.log('OPTIONS');
}, 1000);
