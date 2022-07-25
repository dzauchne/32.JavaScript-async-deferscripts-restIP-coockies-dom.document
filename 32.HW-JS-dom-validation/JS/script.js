"strict use";
// 1) При скролле вниз хэдэр должен менять цвет (цвет на усмотрение), при скролле назад - цвет становится прежним

const header = document.querySelector('header');
window.addEventListener('scroll', function (e) {
	const scrollFromTop = document.querySelector('html').scrollTop
	console.log(scrollFromTop)
	console.log(header)
	header.style.backgroundColor = scrollFromTop > 500 ? 'green' : 'white';
})





// 2) Создать кнопку (или использовать имеющуюся), которая по клику будет выполнять запрос на сервер. Полученные данные необходимо выводить в блок под кнопкой (или рядом с кнопкой)

const buttonDZfirst = document.querySelector('.buttonDZfirst')
const dataInfo = document.querySelector('.dataInfo')
buttonDZfirst.addEventListener('click', () => {
	fetch('https://jsonplaceholder.typicode.com/')
		.then(res => res.json())
		.then(res => {
			dataInfo.textContent = res
		})
})
console.log(buttonDZfirst);






// 3) Создать две кнопки рядом (или использовать имеющиеся), при нажатии на одну, она должна изменять стили (как-то подсвечиваться, выделяться), при нажатии на вторую - вторая подсвечивается, первая принимает дефолтные стили.

const styleButton = document.querySelector(".styleButton");
const resetButton = document.querySelector(".resetButton");
styleButton.addEventListener('click', () => {
	styleButton.classList.add("styleButton_styled");
})
resetButton.addEventListener('click', () => {
	styleButton.classList.remove("styleButton_styled");
})






// 4) Сделать валидацию формы, а также создать чекбокс рядом с кнопкой отправки формы. Если чекбокс выбран (активирован), то кнопку можно нажать, если чекбокс не активирован - копка задизейблена

const subscribeBtn=document.querySelector('.subscribe-button');
console.log(subscribeBtn);
const getInput=document.querySelector('.enter-field__input');
console.log(getInput);
const check_1=document.querySelector('#check_1');
subscribeBtn.addEventListener('change', ()=>{
	if(check_1.checked){
		subscribeBtn.style.pointerEvents='initial'	
	}else{
		subscribeBtn.style.pointerEvents='none'
	}
})
pointerEvents.addEventListener('click',(evt)=>{
evt.preventDefault()
	if (getInput.value.length){
		console.log(true)
	} else {
		console.log(false)
	}
})
