var win = Ti.UI.createWindow({
	backgroundColor: '#000000',
	layout: 'vertical'
});

var timeView = Ti.UI.createView({
	top: 0,
	width: '100%',
	height: '30%',
	backgroundColor: '#7FFFD4'
});

var label = Ti.UI.createLabel({
	color: '#5F9EA0',
	text: 'Ready?',
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	Font: {
		fontSize: '55sp',
		fontWeight: 'bold'
	}
});

var buttonsView = Ti.UI.createView({
	width: '100%',
	height: '10%',
	layout: 'horizontal'
});

var buttonStart = Ti.UI.createButton({
	title: 'Start',
	color: '#808080',
	width: '50%',
	height: Ti.UI.FILL,
	backgroundColor: '#E0FFFF',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold',
	}
});

var buttonStop = Ti.UI.createButton({
	title: 'Stop',
	color: '#808080',
	width: '50%',
	height: Ti.UI.FILL,
	backgroundColor: '#E0FFFF',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold',
	}
});


buttonStart.addEventListener('click', function(e){
	stopWatch.start();
});

buttonStop.addEventListener('click', function(e) {
	stopWatch.stop();
	label.text = 'Ready?';
});

var Stopwatch = require('stopwatch');

function stopwatchListener(watch) {
	label.text = watch.toString();
}

var stopWatch = new Stopwatch(stopwatchListener, 10);

timeView.add(label);
buttonsView.add(buttonStop);
buttonsView.add(buttonStart);
win.add(timeview);
win.add(buttonsView);
win.open();
