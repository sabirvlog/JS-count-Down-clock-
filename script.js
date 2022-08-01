const count_down = new Date("Dec 15 2023 08:35:43").getTime();

var x = setInterval(function() {

	let now = new Date().getTime();

	let distance = count_down - now ;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24)) ;
	let hrs = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) ;
	let min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)) ;
	let sec = Math.floor(distance % (1000 * 60) / 1000 ) ;

	document.getElementById('count_time').innerHTML = days + "d "+ hrs+ "hrs " + min +" "+ sec ;

	if (distance < 0) {
		clearInterval(x);
		document.getElementById('count_time').innerHTML = "Time's Up";
	}
});
