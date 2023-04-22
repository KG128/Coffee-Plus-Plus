const navbarElement = document.getElementById("navbar");
const xhr = new XMLHttpRequest();
xhr.open("GET", "/scripts/navbar/navbar.html", true);
xhr.onload = function () {
  navbarElement.innerHTML = xhr.responseText;

  console.log("%cNavbar HTML loaded", "color: green");

  // Call the function to add the "active" class after the navbar HTML has been loaded
  HighlightPageFunction();
};
xhr.send();

function HighlightPageFunction() {
  // Get the current page URL
  const currentUrl = window.location.href;
  console.log("%cCurrent page: " + currentUrl, "color: green");

  // Get the navbar links
  const homeLink = document.getElementById("navbar-home");
  const aboutLink = document.getElementById("navbar-about");
  const contactLink = document.getElementById("navbar-contact");

  //Add the "active" class in home page at the first load time of page
  homeLink.classList.add("active");

  // Add the "active" class to the current link
  if (currentUrl.includes("index.php")) {
    homeLink.classList.add("active");
    console.log("%cActive Page: Index.php", "color:green");
  } else if (currentUrl.includes("aboutpage.php")) {
    aboutLink.classList.add("active");
    homeLink.classList.remove("active");
    console.log("%cActive Page: About.php", "color:green");
  } else if (currentUrl.includes("contactpage.php")) {
    contactLink.classList.add("active");
    homeLink.classList.remove("active");
    console.log("%cActive Page: ContactPage.php", "color:green");
  } else if (currentUrl.includes("cart.php")) {
    homeLink.classList.remove("active");
    console.log("%cActive Page: cart.php", "color:green");
  }

  // Change the user logo when the user picked the dashboard page
  if (currentUrl.includes("userdashboard.php")) {
    const IconSrc = document.querySelector(".User_Logo");
    IconSrc.src = "/Design Elements/icons/person-circle-selected.svg";
    homeLink.classList.remove("active");
  } else {
    const IconSrc = document.querySelector(".User_Logo");
    IconSrc.src = "/Design Elements/icons/person-circle.svg";
  }
}
