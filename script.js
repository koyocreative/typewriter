const wordcount = document.querySelector('#wordcount span')
const sentence = document.querySelector('#sentence span')
const date = document.querySelector('#date span')
const time = document.querySelector('#time span')

const type = document.querySelector('#type')

const textarea = document.querySelector('#content');

textarea.addEventListener('keydown', function() {
	type.play()
	wordcount.innerHTML = wordNum()
	sentence.innerHTML = sentenceNum()
	date.innerHTML = currentDate()


});

function wordNum() {
	return textarea.value.split(' ').length
}

function sentenceNum() {
	return textarea.value.split('. ').length
}

function currentDate() {
	let theDate = new Date
	return `${theDate.getDay()}.${theDate.getMonth()}.${theDate.getFullYear()}`
}

function currentTime() {
	let theTime = new Date()
	return `${theTime.getHours()}:${theTime.getMinutes()}:${theTime.getSeconds()}`
}

date.innerHTML = currentDate()

setInterval(() => {
	time.innerHTML = currentTime()
}, 100)