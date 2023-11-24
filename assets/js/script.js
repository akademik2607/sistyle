"use strict";

function mobileMenuOpenClose() {
  const body = document.querySelector('body'),
    button = document.querySelector('.mobile-menu-button');

  button.addEventListener('click', function() {
    body.classList.toggle('nav-active');
  });

}

mobileMenuOpenClose();