import { blogData } from './blogData.js';

const blogSuggestions = document.querySelector('.blogSuggestions');

const title = document.querySelector('.title');
const content = document.querySelector('.content');
const keyId = localStorage.keyId;

const filtered = blogData.filter((data) => {
	if (data.key != keyId) {
		return data;
	}
});

blogData.forEach((element) => {
	if (keyId == element.key) {
		title.innerHTML = `
		<img src=${element.image} class="mb-3"/>
		${element.title}
		`;
		content.innerHTML = `${element.content}`;
	}
});

filtered.forEach((element) => {
	let newStr = element.content.slice(0, 101);

	const chilDIV = document.createElement('div');
	chilDIV.innerHTML = `
		<div class="blog-card p-3 mt-3">
				<img src=${element.image} class="mb-3"/>
				<h4 class="title-font fw-bold">${element.title}</h4>
				<p class="lead">${newStr}...</p>
				<button class="readBtn btn btn-dark">Read more</button>
		</div>
	`;

	blogSuggestions.appendChild(chilDIV);
});

const blogBtn = document.getElementsByClassName('readBtn');

console.log(blogBtn);

for (let i = 0; i <= blogBtn.length; i++) {
	const button = blogBtn[i];

	button.addEventListener('click', function (event) {
		const buttonClicked = event.target;

		const uniqueImage = buttonClicked.parentElement.children[0].src;

		for (let i = 0; i <= blogData.length; i++) {
			if (blogData[i].image === uniqueImage) {
				console.log(blogData[i].key);
				localStorage.setItem('keyId', blogData[i].key);

				location.href = `blog.html`;
			}
		}
	});
}
