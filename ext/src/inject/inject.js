
chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			console.log("andChill is running. Check out my github @jakewski");

		}
	}, 10);

	getOptionsAndStartInterval(['skipIntro', 'skipCredits', 'keepWatching']);
})

function getOptionsAndStartInterval(options) {
	chrome.storage.sync.get(options, (obj) => {
		console.log('skipIntro', obj[options[0]]);
		console.log('skipCredits', obj[options[1]]);
		console.log('keepWatching', obj[options[2]]);

		startOuterInterval(obj[options[0]], obj[options[1]], obj[options[2]]);

	})
}

function startOuterInterval(skipIntroOn, skipCreditsOn, keepWatchingOn) {
	let notWatching = setInterval(() => {
		if (window.location.href.match('www.netflix.com/watch')) {
			console.log("start inner interval");
			clearInterval(notWatching);
			startInnerInterval(skipIntroOn, skipCreditsOn, keepWatchingOn);
		}
	}, 1000)
}

function startInnerInterval(skipIntroOn, skipCreditsOn, keepWatchingOn) {
	let isWatching = setInterval(() => {
		if(!window.location.href.match('www.netflix.com/watch')){
			console.log("back to outer interval");
			clearInterval(isWatching);
			startOuterInterval(skipIntroOn, skipCreditsOn, keepWatchingOn);
		} else {
			let skipIntro = document.getElementsByClassName('nf-icon-button')[0],
				skipCredits = document.getElementsByClassName('player-postplay-still-hover-container')[0],
				keepWatching = document.getElementsByClassName('continue-playing')[0];

			(skipIntroOn && skipIntro) ? skipIntro.click() : (skipCreditsOn && skipCredits) ? skipCredits.click() : (keepWatchingOn && keepWatching) ? keepWatching.click() : null
		}

	}, 1000);

}