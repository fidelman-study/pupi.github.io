(function(){

	
	var boxShadowProps = {
		value: 0,
		increment: true
	};

		

	setInterval(function(){

		if (!boxShadowProps.value) {
			boxShadowProps.increment = true;
		} else if(boxShadowProps.value === 100) {
			boxShadowProps.increment = false;
		}

		if(boxShadowProps.increment) {
			boxShadowProps.value += 5;
		} else {
			boxShadowProps.value -= 5;
		}

		

		$('#content .block').css('boxShadow', '0 0 ' + boxShadowProps.value + 'px rgba(0,0,0, .8), inset 0 2px 0 rgba(255,255,255,.4), 0 2px 0 rgba(0,0,0,.1), inset 0 0 20px rgba(0,0,0,.1)');
	}, 50);



})()