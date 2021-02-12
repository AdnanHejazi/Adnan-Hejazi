const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener("click", dropDown);

function dropDown(){
    // alert("hello");
    navLinks.classList.toggle('active');

}



// SideBar Animation

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');


const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(sideCheck, options);

function sideCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        if(entry.isIntersecting){
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('left', `${directions.left}px`);

        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});
