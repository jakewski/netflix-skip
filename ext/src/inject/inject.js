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

	// let netflix_skip_always = setInterval(() => {
	// 	let a = document.getElementsByClassName('nf-icon-button')[0], b = document.getElementsByClassName('player-postplay-still-hover-container')[0];
	// 	a ? a.click() : b ? b.click() : null
	// }, 1000);
	console.log('start outer interval')
	let isWatching = setInterval(() => {
		if (window.location.href.match('www.netflix.com/watch')) {
			console.log("start inner interval")
			clearInterval(isWatching);
			let netflix_skip_always = setInterval(() => {
				console.log("running inner")

				let a = document.getElementsByClassName('nf-icon-button')[0],
					b = document.getElementsByClassName('player-postplay-still-hover-container')[0],
					c = document.getElementsByClassName('continue-playing')[0];
				a ? a.click() : b ? b.click() : c ? c.click() : null
			}, 1000);
		}
	}, 1000);


})