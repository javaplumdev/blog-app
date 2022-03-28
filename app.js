const row = document.querySelector('.row');

const blogData = [
	{
		title: 'Ang pogi ko',
		subTitle: 'Sample',
		content: 'lorem ipsum doloraaaaaaaaaa',
	},
	{
		title: 'Ang pogi ko',
		subTitle: 'Sample',
		content: 'lorem ipsum doloraaaaaaaaaa',
	},
	{
		title: 'Ang pogi ko',
		subTitle: 'Sample',
		content: 'lorem ipsum doloraaaaaaaaaa',
	},
	{
		title: 'Ang pogi ko',
		subTitle: 'Sample',
		content: 'lorem ipsum doloraaaaaaaaaa',
	},
	{
		title: 'Ang tumae labas ipot',
		subTitle: 'Sample',
		content: 'lorem ipsum doloraaaaaaaaaa',
		content1: 'lorem ipsum doloraaaaaaaaaa',
	},
];

blogData.forEach((element) => {
	const childDIV = document.createElement('div');
	childDIV.classList.add('col-md-4');

	childDIV.innerHTML = `
    <div class="blog-card m-3 p-3">
        <h4 class="title-font">${element.title}</h4>
        <p class="lead">${element.subTitle}</p>
        <p class="lead">${element.content}</p>
        <p class="lead">${element.content1}</p>
    </div>
    `;

	row.appendChild(childDIV);
});

const blogCard = document.getElementsByClassName('blog-card');

for (let i = 0; i <= blogCard.length; i++) {
	const button = blogCard[i];

	button.addEventListener('click', function (event) {
		const buttonClicked = event.target;

		console.log(buttonClicked);
	});
}

// blogCard.addEventListener('click', function () {
// 	console.log('first');
// });
