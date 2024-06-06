document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.card');
    const screenWidth = window.innerWidth;
    const isMobileResolution = screenWidth < 768;

    if (isMobileResolution) {
        projectCards.forEach(card => {
            card.style.marginRight = "0px";
        });
    } else {
        const numProjects = projectCards.length;
        if (numProjects % 2 !== 0) {
            const lastProject = projectCards[numProjects - 1];
            lastProject.style.marginRight = "70px";
        }
    }

    // // Modal functionality
    // const modal = document.getElementById("projectModal");
    // const closeButton = document.querySelector(".close-button");
    // const heroSection = document.querySelector('.hero');

    // projectCards.forEach(card => {
    //     card.addEventListener("click", function() {
    //         const title = card.querySelector('h2').innerText;
    //         const imageSrc = card.querySelector('img').src;
    //         const description = card.querySelector('p').innerText;
    //         const seeMoreLink = card.querySelector('.left-button').href;
    //         const codeSourceLink = card.querySelector('.right-button').href;

    //         document.getElementById('modalTitle').innerText = title;
    //         document.getElementById('modalImage').src = imageSrc;
    //         document.getElementById('modalDescription').innerText = description;
    //         document.getElementById('modalLink').href = seeMoreLink;
    //         document.getElementById('modalCode').href = codeSourceLink;

    //         modal.style.display = "block";
    //         heroSection.classList.add('blur');
    //     });
    // });

    // closeButton.addEventListener("click", function() {
    //     modal.style.display = "none";
    //     heroSection.classList.remove('blur');
    // });

    // window.addEventListener("click", function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //         heroSection.classList.remove('blur');
    //     }
    // });
});
