// menu open en dichtklappen
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu-mobile');
    navMenu.classList.toggle('show');
}

// formulier validatie
function validateForm() {
  let x = document.forms["contact"]["name"].value;
  if (x == "") {
    alert("Vul uw naam in aub");
    return false;
  }
}