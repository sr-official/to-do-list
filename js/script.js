
const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');

let emptyMsg = document.getElementById('empty-box');
let rowAlert = document.getElementById('row');

let addTask = () => {
	if(inputBox.value === ''){
		// let alert = document.getElementById('empty-box');
		emptyMsg.innerHTML = 'You must write something';
		rowAlert.style.borderColor = 'red'
	}else{
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
		inputBox.value = '';
		emptyMsg.innerHTML = '';
		rowAlert.style.borderColor = 'transparent'

	}
	saveData();
}

listContainer.addEventListener('click', function(e){
	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('checked');
		saveData();
	}else if (e.target.tagName === 'SPAN'){
		e.target.parentElement.remove();
		saveData();
	}
}, false);


let saveData = () => {
	localStorage.setItem('data', listContainer.innerHTML);
}

let showTask = () => {
	listContainer.innerHTML = localStorage.getItem('data');
}

showTask();


inputBox.addEventListener('keypress', function(event){
	if(event.key === 'Enter'){
		event.preventDefault();
		document.getElementById('addTask').click();
	}
});
