document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.burgar-menu');
    let isopen = document.querySelector('.navbar');

    navbar.addEventListener('click', () => {

        if (isopen.classList[1] === undefined) {
            isopen.classList.add('open');

        }

        else if (isopen.classList[1] == 'open') {
            isopen.classList.remove('open');

        } 


    })


})

