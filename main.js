function testimonials() {
	$('.testimonials__block').addClass('hide');
	$('.testimonials__block').removeClass('show');
	$('.testimonials__dot').removeClass('active__dot')

}

$('.testimonials__dot-1').click(function () {
	testimonials();
	$('.testimonials__block1').addClass('show')
	$('.testimonials__dot-1 ').addClass('active__dot')
})	


$('.testimonials__dot-2').click(function () {
	testimonials();
	$('.testimonials__block2').addClass('show')
	$('.testimonials__dot-2 ').addClass('active__dot')
})		


$('.testimonials__dot-3').click(function () {
	testimonials();
	$('.testimonials__block3').addClass('show')
	$('.testimonials__dot-3').addClass('active__dot')
})	



	$('.nav__link').click(function () {
		$(this).next().toggleClass('show__sub-menu')
	})


function toChange(x) {
	x.classList.toggle('change');
}


$('.nav__burger').click(function () {
	$('.mobile__menu-links').toggleClass('mobile__menu-links-show');
})