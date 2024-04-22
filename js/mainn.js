
var swiper = new Swiper(".popular-content", {
slidesPerView:3,
spaceBetween:5,
 autoplay: {
	delay: 65500,
	disableOnInteraction: false,
 },
 pagination: {
	el: ".swiper-pagination",
	clickable: true,
 },
 
 navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
 },
 
 breakpoints: {
	 280: {
        slidesPerView: 1.0,
		spaceBetween: 5,
	 },
	 320: {
        slidesPerView: 1.2,
		spaceBetween: 5,
	 },
	 510: {
        slidesPerView: 1.4,
		spaceBetween: 5,
	 },
	  758: {
        slidesPerView: 2.1,
		spaceBetween: 10,
	 },
	  900: {
        slidesPerView: 3.2,
		spaceBetween: 10,
	 },
  },
});

// show video
let playButton = document.querySelector(".play-movie");
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () =>{
	video.classList.add('show-video');	
//auto play click on btn
	myvideo.play();	
};

closebtn.onclick = () =>{
	video.classList.remove('show-video');	
// pause any :lose video
	myvideo.pause();	
};




