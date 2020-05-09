
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    // open carousel
    document.querySelector('.preview').className = "preview active";
    // replace image
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    // document.querySelector('.body').style.overflow = 'hidden';

    // const imgURL = activeCard.style.backgroundImage;
    // console.log('the background image of the active element is:', imgURL);
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
document.querySelector('.card').onclick = showPhoto;

// attaches the click to all of the cards
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
};

// PART 3: Close functionality
const close = () => {
    // a. This function should remove the “active” class from the
    //    “.preview_box” element.
    // b. Attach your newly created “close” function to the onclick
    //    event handler of the close button (in the upper right-hand corner).
    console.log('Close Me.')
    document.querySelector('.preview').className = "preview";
};

document.querySelector('#close').onclick = close;

// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
// HINTS:
// 1. update the "activeCard" variable so that it's now the
//    next card in the list.
// 2. Then do the same steps as before (in the showPhoto).
const next = () => {
    activeCard = activeCard.nextElementSibling
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
};

// Disregard the following comment:
// const next = () => {
//     if (activeCard == document.getElementByID('#last_image')) {
//       activeCard = document.getElementByID('#first_image');
//       document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
//     } else {
//       activeCard = activeCard.nextElementSibling
//       document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
//     }
// };


document.querySelector('.next').onclick = next;
// attach next to the entire featured image
document.querySelector('.featured_image').onclick = next;

// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
const prev = () => {
    activeCard = activeCard.previousElementSibling
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
};

document.querySelector('.prev').onclick = prev;
