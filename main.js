const body = document.body;
const btn = document.createElement('button');
const blocksDiv = document.createElement('div');

const handleMouseEnter = ({ target }) => target.style.color = 'white';

const handleMouseLeave = ({ target }) => target.style.color = target.style.backgroundColor;

const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

const handleClick = ({ target }) => target.style.backgroundColor = generateRandomColor();

const handleDbClick = ({ target }) => {
    const id = parseInt(target.id);
    if (id % 2 === 0 && target.nextElementSibling !== null) {
        blocksDiv.removeChild(target.nextElementSibling);
    } else if (id % 2 !== 0 && target.previousElementSibling !== null) {
        blocksDiv.removeChild(target.previousElementSibling);
    } else {
        alert('Nothing to delete');
    }
}

const addBlock = () => {
    const block = document.createElement('div');

    block.classList.add('block');
    block.id = blocksDiv.childElementCount + 1;
    block.appendChild(document.createTextNode(block.id));

    block.addEventListener('mouseenter', handleMouseEnter);
    block.addEventListener('mouseleave', handleMouseLeave);

    block.addEventListener('click', handleClick);
    block.addEventListener('dblclick', handleDbClick);

    blocksDiv.appendChild(block);
}

btn.innerText = 'Add Square';
blocksDiv.classList.add('blocks');

btn.addEventListener('click', addBlock);
body.appendChild(btn);
body.appendChild(blocksDiv);