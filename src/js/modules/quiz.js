import Swiper from "swiper";
import { Parallax } from "swiper/modules";

const quizSlider = new Swiper(".quiz-slider", {
	modules: [Parallax],
	speed: 1400,
	loop: false,
	allowTouchMove: false,
	on: {
		init(slider){
			// slider.slides.map(slide => {
			// 	console.log(slide.querySelector('div'));
			// 	slide.querySelector('div').style.padding = '0px ' + (window.innerWidth - document.querySelector('.container').clientWidth) / 2 + 'px'
			// })
			setTimeout(() => {
				slider.el.style.opacity = 1;
				document.querySelector('.spinner').style.display = 'none';
			}, 500);
		}
	}
});

const startBtn = document.querySelector('.start-quiz')
if(startBtn){
	startBtn.addEventListener('click', () => quizSlider.slideNext())
}