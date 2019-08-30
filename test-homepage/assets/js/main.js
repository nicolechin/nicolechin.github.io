/*$('.postcard').click(function() {
	console.log('clicked');
	$(this).toggleClass('active');
	$('.bg-modal').toggleClass('active');
});*/


$('.postcard-1').click(function() {
	$('.postcardbw-3, .postcardbw-4, .postcardbw-7, .postcardbw-8').toggleClass('active');
	$('.bg-modal').toggleClass('active');
})

$('.close').click(function() {
	$('.bg-modal, .postcardbw').removeClass('active');
})