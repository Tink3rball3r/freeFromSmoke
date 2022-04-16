const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav');

burger.addEventListener('click', function () {
	navigation.classList.toggle('show');
});
