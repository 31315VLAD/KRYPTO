console.log('Working')

let $discoverNftsLeftBtnBuyNfts = $('.discover-nfts-left-btn-buy-nfts');
let $discoverNftsLeftBtnSellNfts = $('.discover-nfts-left-btn-sell-nfts');
let $buildYourNftsRightBtn = $('.build-your-nfts-right-btn');
let $yourSmartphoneLeftBtn = $('.your-smartphone-left-btn');
let $kryptoNavMenuBtn = $('.krypto-nav-menu-btn');
let $areYouReady = $('.are-you-ready-btn');
let $popupMenuWrap = $('.popup-menu-wrap');
let opened = 'opened';
let close = 'close';
let $jsPopupMenuBtnClose = $('.js-popup-menu-btn-close')
let $body = $('body');




$yourSmartphoneLeftBtn.on('click', function(){
	$popupMenuWrap.addClass(opened);
	$body.addClass('opacity-body');
});

$buildYourNftsRightBtn.on('click', function(){
	$popupMenuWrap.addClass(opened);
	$body.addClass('opacity-body');
});

$discoverNftsLeftBtnSellNfts.on('click', function(){
	$popupMenuWrap.addClass(opened);
	$body.addClass('opacity-body');
});


$discoverNftsLeftBtnBuyNfts.on('click', function(){
	$popupMenuWrap.addClass(opened);
	$body.addClass('opacity-body');
});


$kryptoNavMenuBtn.on('click', function(){
	$popupMenuWrap.addClass(opened);
	$body.addClass('opacity-body');
});

$areYouReady.on('click', function(){
	$popupMenuWrap.addClass(opened);
	$body.addClass('opacity-body');
});

$jsPopupMenuBtnClose.on('click', function(){
	$popupMenuWrap.removeClass(opened);
	$body.removeClass('opacity-body');
});


$(document).on('keydown', function(e){
	if(e.which === 27){
		$popupMenuWrap.removeClass(opened);
		$body.removeClass('opacity-body');
		e.preventDefault();
		return false;
	}
});

/**/
$('.js-testimonials-slider').slick({
	dots: true,
	arrows: false,
	slidesToShow: 3,
    slidesToScroll: 3
});











