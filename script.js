const listEl = document.querySelector('#infi-list');

const thersold = 2;
let initialItem = 1;

function addItems(count){
	for(let i=1; i<=count; i++){
		const item = document.createElement('li');
		item.textContent = `Item ${initialItem + i}`;
		listEl.appendChild(item);
	}
	initialItem += count;
}

addItems(10);

listEl.addEventListener('scroll', (e) => {
	const scrollTop = e.target.scrollTop;
	const scrollHeight = e.target.scrollHeight;
	const clientHeight = e.target.clientHeight;

	const remainingScroll = scrollHeight - (scrollTop + clientHeight);

	if(remainingScroll <= thersold){
		addItems(thersold);
	}	
})

