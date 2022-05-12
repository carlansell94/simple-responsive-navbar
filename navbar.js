window.addEventListener('load', () => {
    const navMenu = document.querySelector('nav');
    const button = document.querySelector('button');
    const dropdowns = document.querySelectorAll('.dropdown-menu');

    dropdowns.forEach((dropdown) => {
        const expandButton = dropdown.parentNode?.querySelector('.nav-link-icon');

        if (expandButton) {
            expandButton.parentNode.addEventListener('click', () => {
                if (dropdown.style.display == 'block') {
                    hideDropDown(dropdown);
                    expandButton.style.removeProperty('transform');
                } else {
                    showDropDown(dropdown);
                    expandButton.style.transform = "rotate(180deg)";
                }
            });
        }

        dropdown.parentNode.addEventListener('mouseover', () => {
            if (window.innerWidth > 992) {
                showDropDown(dropdown);
            }
        });

        dropdown.parentNode.addEventListener('mouseout', () => {
            if (window.innerWidth > 992) {
                hideDropDown(dropdown);
            }
        });
    });

    button.addEventListener('click', () => {
        navMenu.style.display == 'flex' ? navMenu.style.display = 'none' : navMenu.style.display = 'flex';
    });

    window.addEventListener('resize', () => {
        if (navMenu.style.display == 'none' && window.innerWidth > 992) {
            navMenu.style.display = 'flex';
        } else if (navMenu.style.display == 'flex' && window.innerWidth <= 992) {
            navMenu.style.display = 'none';
        }
    });
});

function showDropDown(dropdown) {
    dropdown.parentNode.classList.add('active-menu');
    dropdown.style.display = 'block';
}

function hideDropDown(dropdown) {
    dropdown.parentNode.classList.remove('active-menu');
    dropdown.style.display = 'none';
}