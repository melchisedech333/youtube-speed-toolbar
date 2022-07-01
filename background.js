
(function() {

	var url = window.location.href.toString().trim();
    if (url.indexOf('youtube.com') == -1) {
        return;
    }

	console.log("YouTube Speed Toolbar Started - Cristo <3");

	// Insert control.
	var s = document.createElement('div');
	var offset = 200;

	s.innerHTML = `
		<style>
			.yt-toolbar-content {
				position: fixed;
				top: calc((100% / 2) - `+ (offset / 2) +`px);
				right: 0px;
				width: 33px;
				height: `+ offset +`px;
				background-color: rgba(0, 0, 0, 0);
				z-index: 99999;
			}

			input[type=range][orient=vertical] {
				-webkit-appearance: slider-vertical;
				width: 8px;
				height: 175px;
				padding: 0 5px;
				outline: none;
			}

			.yt-range-speed-output {
				font-size: 12px;
				font-weight: bold;
				font-family: Arial, Helvetica, sans-serif;
			}
		</style>

		<div class='yt-toolbar-content' >
			<!--
				YouTube default speed range:
					0.25
					0.5
					0.75
					1 = Normal
					1.25
					1.5
					1.75
					2

				Control:
					$('video').playbackRate = 1
			-->
			<center>
				<input type="range" class="yt-range-speed" min="0.05" max="5" step="0.05" value="1" orient="vertical" ><br>
				<output class="yt-range-speed-output" >1.00</output>
			</center>
		</div>
	`;
	
	document.body.appendChild(s);

	// Controle speed.
	const speed = document.querySelector('.yt-range-speed');
	const output = document.querySelector('.yt-range-speed-output');

	var value = parseFloat(speed.value).toFixed(2);
	output.textContent = value;

	speed.addEventListener('input', function() {
		var value = parseFloat(speed.value).toFixed(2);
		output.textContent = value;

		var speedValue = parseFloat(speed.value);
		console.log('Speed value: '+ speedValue);
		document.getElementsByTagName('video')[0].playbackRate = speedValue;
	});
})();


