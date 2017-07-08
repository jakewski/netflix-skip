const skipIntro = document.getElementById('skipIntro');
const skipCredits = document.getElementById('skipCredits');
const keepWatching = document.getElementById('keepWatching');

setSwitchFromChromeStorage('skipIntro', skipIntro);
setSwitchFromChromeStorage('skipCredits', skipCredits);
setSwitchFromChromeStorage('keepWatching', keepWatching);

document.addEventListener('DOMContentLoaded', function () {
      skipIntro.addEventListener('change', toggleIntro);
      skipCredits.addEventListener('change', toggleCredits);
      keepWatching.addEventListener('change', toggleContinue);
});

function setChromeStorage(switchType, value) {
    let obj = {};
    obj[switchType] = value;
    chrome.storage.sync.set(obj, () => {
        console.log(switchType, (value ? 'on' : 'off'))
    })
}

function setSwitchFromChromeStorage (switchType, toggleSwitch) {
    chrome.storage.sync.get(switchType, (obj) => {
		toggleSwitch.checked = obj[switchType];
	})
}

const toggleIntro = () => {
    setChromeStorage('skipIntro', skipIntro.checked);
}

const toggleCredits = () => {
    setChromeStorage('skipCredits', skipCredits.checked);
}

const toggleContinue = () => {
    setChromeStorage('keepWatching', keepWatching.checked);
}