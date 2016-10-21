(function(){


	var imgs = [
		{
			imgUrl: 'images/karina/karina1.png',
			text: 'forever'
		},
		{
			imgUrl: 'images/karina/karina2.png',
			text: 'glorious'
		},
		{
			imgUrl: 'images/karina/karina3.png',
			text: 'timeless'
		},
		{
			imgUrl: 'images/karina/karina4.png',
			text: 'lovely'
		},
		{
			imgUrl: 'images/karina/karina5.png',
			text: 'honey'
		},
		{
			imgUrl: 'images/karina/karina6.png',
			text: 'sweetie'
		},
		{
			imgUrl: 'images/karina/karina7.png',
			text: 'princess'
		},
		{
			imgUrl: 'images/karina/karina8.png',
			text: 'angel'
		},
		{
			imgUrl: 'images/karina/karina9.png',
			text: 'spectacular'
		},
		{
			imgUrl: 'images/karina/karina10.png',
			text: 'awesome'
		}
		,
		{
			imgUrl: 'images/karina/karina11.png',
			text: 'world'
		}
		,
		{
			imgUrl: 'images/karina/karina12.png',
			text: 'dream'
		}
	];


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

		

		$('#content .block').css('boxShadow', '0 0 ' + boxShadowProps.value + 'px rgba(255,0,0,0.8), inset 0 2px 0 rgba(255,255,255,.4), 0 2px 0 rgba(0,0,0,.1), inset 0 0 20px rgba(0,0,0,.1)');
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


	var imgId = 0;
	setInterval(function() {

		$('#img img').attr('src', imgs[imgId].imgUrl);
		$('#img span').text(imgs[imgId].text);

		if(imgId == 11) {
			imgId = 0;
		} else {
			imgId++
		}
	}, 3000);




})()