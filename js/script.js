
$('.page-scroll').on('click', function(e){

// ambil isi dari href
	var tujuan = $(this).attr('href');

// tangkap element yang bersangkutan 
	var elementTujuan = $(tujuan);
	
// pindahkan scroll
	$('html').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1200, 'easeInOutExpo')

	e.preventDefault();
});



// PARALAX
// paralax ktika di refresh untuk about
/* jqueri carikan window yang ketika(on), di load/refreash/dibuka, 
	maka jalankan fungsi berikut */
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});




// paralax ketika di scroll
/*	java script($), tolong carikan element window(semua yang tampil di layar), 
	ketika di scroll maka jalankan fungsi(function) berikut*/
$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

// jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll/1.2 +'%)'
	});

// thumbnail
	/* jika elemen window lebih besar dari elemen portfolio maka akan menemukan jarak dari sesion portfolio keatas
		ketika top minus 250 gambar thumbnail akan muncul */
	if(wScroll > $('.portfolio').offset().top - 250){

		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});


		
	}

});