function clock(){
	d = new Date(); 
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	hr = 30 * h + m / 2; 
	min = 6 * m;
	sec = 6 * s;

	hour.style.transform = `rotate(${hr}deg)`;
	minute.style.transform = `rotate(${min}deg)`;
	second.style.transform = `rotate(${sec}deg)`;
}

setInterval(clock, 1000);
