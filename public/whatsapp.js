const wppButton = document.getElementById('wpp-link');
const mask = document.querySelector('#wpp-fix .mask');
const wppForm = document.getElementById('wppButton');
const closeButton = document.getElementById('close-bt');

wppButton.onclick = function(e) { 
	wppButton.classList.add('hide-this')
};

mask.onclick = function(e) {
	wppButton.classList.remove('hide-this')
};
closeButton.onclick = function(e) {
	wppButton.classList.remove('hide-this')
};

wppForm.addEventListener('submit', function(e) {
	e.preventDefault();
});