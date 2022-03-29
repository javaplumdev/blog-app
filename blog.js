import { blogData } from './blogData.js';

const container = document.querySelector('.container');
const keyId = localStorage.keyId;

blogData.forEach((element) => {
	if (keyId == element.key) {
		console.log(element.content);
	}
});
