//your code here!

const listEl = document.querySelector('#infi-list');

let itemNumber = 10;
const threshold = 2;

function addItems(count) {
	for (let i = 1; i <= count; i++) {
		const item = document.createElement('li');
		item.textContent = `Item ${itemNumber + i}`;
		listEl.appendChild(item);
	}
	itemNumber += count;
}

addItems(10);

listEl.addEventListener('scroll', (e) => {
	let scrollTop = e.target.scrollTop;
	let scrollHeight = e.target.scrollHeight;
	let clientHeight = e.target.clientHeight;
	let remainingScroll = scrollHeight - ( scrollTop - clientHeight);

	if (remainingScroll <= threshold) {
		addItems(2); // Add 2 more items
	}
});
