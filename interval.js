var counter = 0;

function interval(cb, milliseconds) {
	cbInterval = setInterval(function() { cb(); }, milliseconds);
}

function callback() {
  counter++;
  console.log(counter);

  if (counter >= 5) {
    // Comment out line 13 if you don't want the interval to stop.
    stopInterval(cbInterval);

    // Make sure line 17 is commented in if you want
    // it to loop from 1 to 5 repeatedly.
    counter = 0;
  }

  return counter < 5;
}

function stopInterval(stopwatch) {
  clearInterval(stopwatch);
}

interval(callback, 500);
