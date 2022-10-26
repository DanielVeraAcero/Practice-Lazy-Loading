/* 
<div class="p-4">
    <img class="mx-auto" width="320" src="https://randomfox.ca/images/2.jpg" alt="">
</div>
*/
const addButton = document.querySelector('button')
const mountNode = document.querySelector('#images')

const foxCount = 123;
const randomFoxNumber = () => {
    const randomNumber = Math.ceil(Math.random()*(foxCount));
    console.log(randomNumber);
    return randomNumber
}

const createImgNode = () => {
    const container = document.createElement('div');
    container.classList.add('p-4');

    const image = document.createElement('img');
    image.classList.add('mx-auto');
    image.width = 320;
    image.src = `https://randomfox.ca/images/${randomFoxNumber()}.jpg`;

    container.appendChild(image);

    return container
};

const getFox = () => {
    const newImage = createImgNode();
    mountNode.appendChild(newImage);
}

addButton.addEventListener('click', getFox)
