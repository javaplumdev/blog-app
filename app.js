import { blogData } from './blogData.js';

const row = document.querySelector('.row');

blogData.forEach((element) => {
	const childDIV = document.createElement('div');
	childDIV.classList.add('col-lg-4');

	let newStr = element.content.slice(0, 101);

	childDIV.innerHTML = `
		<div class="blog-card m-3 p-3">
			<img src=${element.image} class="mb-3"/>
			<h4 class="title-font fw-bold">${element.title}</h4>
			<p class="lead">${newStr}...</p>
			<button class="readBtn btn btn-dark">Read more</button>
		</div>
	`;

	row.appendChild(childDIV);
});

const blogBtn = document.getElementsByClassName('readBtn');

for (let i = 0; i <= blogBtn.length; i++) {
	const button = blogBtn[i];

	button.addEventListener('click', function (event) {
		const buttonClicked = event.target;
		localStorage.setItem('keyId', blogData[i].key);
		location.href = `blog.html`;
		console.log(buttonClicked);
	});
}
