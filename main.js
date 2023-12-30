
let ArrowLeft = document.querySelector('#ArrowLeft');
let ArrowRight = document.querySelector('#ArrowRight');
let product = document.querySelectorAll('.product');

let product_page = Math.ceil(product.length / 4);
let initSlide = 0;
let movePerSlide = 25;
let maxMoveSlide = 300;
// mobile_view
let mob_view = window.matchMedia('(max-width: 768px)');
if (mob_view.matches) {
	movePerSlide = 50.36;
	maxMoveSlide = 600;
}

let right_mover = () => {
	initSlide = initSlide + movePerSlide;
	if (product == 1) {
		initSlide = 0;
	}
	for (const i of product) {
		if (initSlide > maxMoveSlide) {
			initSlide = initSlide - movePerSlide;
		}
		i.style.left = '-' + initSlide + '%';
	}
};
let left_mover = () => {
	initSlide = initSlide - movePerSlide;
	if (initSlide <= 0) {
		initSlide = 0;
	}
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + initSlide + '%';
		}
	}
};

ArrowLeft.addEventListener('click',  left_mover );
ArrowRight.addEventListener('click', right_mover);


