const makeBigger = () => {
   alert('make bigger!');
   document.querySelector('.content').style.fontSize = '3em';
   document.querySelector('.content').style.backgroundColor = 'hotpink';
};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector('.content').style.fontSize = '1.2em';
   document.querySelector('.content').style.backgroundColor = 'white';
};


document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
