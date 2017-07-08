
chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("andChill is running. Check out my github @jakewski");
			// ----------------------------------------------------------

		}
	}, 10);

	getOptionsAndStartInterval(['skipIntro', 'skipCredits', 'keepWatching']);
})

function getOptionsAndStartInterval(options) {
	chrome.storage.sync.get(options, (obj) => {
		console.log('skipIntro', obj[options[0]])
		console.log('skipCredits', obj[options[1]])
		console.log('keepWatching', obj[options[2]])

		startInterval(obj[options[0]], obj[options[1]], obj[options[2]]);
		
	})
}

function startInterval(skipIntroOn, skipCreditsOn, keepWatchingOn) {
	let isWatching = setInterval(() => {
		if (window.location.href.match('www.netflix.com/watch')) {
			console.log("start inner interval")
			clearInterval(isWatching);
			let netflix_skip_always = setInterval(() => {
				let skipIntro = document.getElementsByClassName('nf-icon-button')[0],
					skipCredits = document.getElementsByClassName('player-postplay-still-hover-container')[0],
					keepWatching = document.getElementsByClassName('continue-playing')[0];

				(skipIntroOn && skipIntro) ? skipIntro.click() : (skipCreditsOn && skipCredits) ? skipCredits.click() : (keepWatchingOn && keepWatching) ? keepWatching.click() : null
			}, 1000);
		}
	}, 1000);
}