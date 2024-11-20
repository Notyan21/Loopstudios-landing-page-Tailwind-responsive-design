const navHamburgerIcon = document.querySelector('#nav__hamburgerIcon');
const navHamburger = document.querySelector('#nav__menu');
const year = document.querySelector('#year');

const toggleMenu = () => {
  const isMenuHidden = navHamburger.classList.toggle('hidden'); 

  navHamburgerIcon.src = isMenuHidden 
    ? 'images/icon-hamburger.svg' 
    : 'images/icon-close.svg';
  
  navHamburgerIcon.setAttribute('aria-expanded', !isMenuHidden);
};

navHamburgerIcon.addEventListener('click', toggleMenu);

let actualYear = new Date().getFullYear();
year.textContent = actualYear;





const underlineLinks = (containerSelectors) => {
    const containers = document.querySelectorAll(containerSelectors); 
    
    containers.forEach((container) => {
      const links = container.querySelectorAll('li a'); 

      links.forEach((link) => {
        

        link.classList.add(
          'relative',
          'block',
          'before:content-[""]',
          'before:absolute',
          'before:bottom-0',
          'before:left-0',
          'before:w-full',
          'before:h-[0.1em]',
          'before:bg-white',
          'before:opacity-0',
          'before:transform',
          'before:scale-x-0',
          'before:origin-center',
          'before:transition-all',
          'before:duration-300',
          'hover:before:opacity-100',
          'hover:before:scale-x-100',
          'focus:before:opacity-100',
          'focus:before:scale-x-100'
        );
      });
    });
  };
  
  underlineLinks('nav ul, footer ul, .flex ul');

