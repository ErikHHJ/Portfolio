/*const cardWrapper = document.querySelector(".cardWrapper");
const card = document.querySelector(".card");
const highlight = document.querySelector(".highlight");

const mostX = 10;
const mostY = 10;

cardWrapper.addEventListener('mousemove', (e) => {
    card.style.transition = 'none';
    highlight.style.transition = 'none';

    const x = e.offsetX;
    const y = e.offsetY;
    const {width, height} = cardWrapper.getBoundingClientRect();
    const halfWidth = width/2;
    const halfHeight = height/2;

    const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    const rotationX = ((y - halfHeight) / halfHeight) * mostY;

    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
    highlight.style.left = `${(rotationY / mostY * 60) * -1}%`
});

cardWrapper.addEventListener('mouseleave', () => {
    card.style.transition = 'transform .5s ease-in-out';
    highlight.style.transition = 'left .5s ease-in-out, top .5s ease-in-out';

    card.style.transform = 'rotate(0)';
    highlight.style.left = '-20%';
    highlight.style.top = '-13%';

})*/

    const cardWrapper = document.querySelectorAll(".cardWrapper");
    const card = document.querySelectorAll(".card");
    const highlight = document.querySelectorAll(".highlight");

for(let i = 0; i < cardWrapper.length; i++){
    const wrapper = cardWrapper[i]
    const crd = card[i]
    const highlighter = highlight[i]

    const mostX = 10;
    const mostY = 10;

    wrapper.addEventListener('mousemove', (e) => {
        crd.style.transition = 'none';
        highlighter.style.transition = 'none';

        const x = e.offsetX;
        const y = e.offsetY;
        const {width, height} = wrapper.getBoundingClientRect();
        const halfWidth = width/2;
        const halfHeight = height/2;

        const rotationY = ((x - halfWidth) / halfWidth) * mostX;
        const rotationX = ((y - halfHeight) / halfHeight) * mostY;

        crd.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
        highlighter.style.left = `${(rotationY / mostY * 60) * -1}%`
    })
    wrapper.addEventListener('mouseleave', () => {
        crd.style.transform = 'rotate(0)';
        crd.style.transition = 'transform .5s ease-in-out';
        highlighter.style.transition = 'left .5s ease-in-out, top .5s ease-in-out';
    
        highlighter.style.left = '-20%';
        highlighter.style.top = '-13%';

    
    
    })

}

console.log 
