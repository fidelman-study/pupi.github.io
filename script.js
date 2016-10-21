(function(){


	var boxShadowProps = {
		value: 0,
		increment: true,
		colorAlpha: 0.8
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

		

		$('#content .block').css('boxShadow', '0 0 ' + boxShadowProps.value + 'px rgba(255,0,0, ' + boxShadowProps.colorAlpha + '), inset 0 2px 0 rgba(255,255,255,.4), 0 2px 0 rgba(0,0,0,.1), inset 0 0 20px rgba(0,0,0,.1)');
	}, 50);

	$('#content .block').click(function() {
		swal({
			title: this.dataset.title,
			text: this.dataset.text,
			imageUrl: this.dataset.img
		})
	});

	$('#img img').click(function() {
		var audio = $('audio').get(0);
		if(audio.dataset.play == 'true') {
			audio.pause();
			audio.dataset.play = 'false'
		} else {
			audio.play();
			audio.dataset.play = 'true'
		}
		
	});




})()