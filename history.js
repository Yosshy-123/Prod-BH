(function() {
	const base = location.href.split('#')[0];

	let running = false;
	let counter = 0;
	let intervalId = null;

	function tick() {
		counter++;
		history.pushState(null, '', base + '#' + counter);
	}

	function start() {
		if (running) return;
		running = true;
		const existing = location.hash.replace('#', '');
		counter = existing ? Number(existing) : 0;
		intervalId = setInterval(tick, 25);
	}

	function stop() {
		if (!running) return;
		running = false;
		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	start();

	window.addEventListener('beforeunload', stop);
})();
