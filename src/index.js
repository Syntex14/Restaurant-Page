
import HeaderPhoto from './china-bowl.png';
import './style.css';


// Creates the Header section

const menuItems = ["Menu", "Hours", "Contact Us"]; // used to create individual ol elements using textContent


const header = document.createElement('header');
header.setAttribute("id", "head");

const title = document.createElement("h1");
title.textContent = "ChinaTown Restuaurant";

const myHeaderPhoto = new Image();
myHeaderPhoto.setAttribute("id", "head-photo");
myHeaderPhoto.src = HeaderPhoto;

const navBar = document.createElement("nav");
const ul = document.createElement("ul");

for(const itemText of menuItems) {
    const ol = document.createElement("ol");
    ol.textContent = itemText;
    ul.appendChild(ol);
}
navBar.append(ul);

const headerText = document.createElement("p");
headerText.textContent = "Proudly serving Denton 15 years of authentic Chinese food...";

header.append(title, myHeaderPhoto, navBar, headerText);

// Creates the About Us section

const aboutText = document.createElement("h2");
aboutText.textContent = "About Us";

const aboutTextParagraph = document.createElement("p");
aboutTextParagraph.textContent = "Welcome to our charming Chinese takeout and buffet nestled in the heart of mid-town Denton, TX! With a deep love for genuine flavors and a strong focus on excellent service, we bring the diverse world of Chinese cuisine right to your table. Our establishment takes joy in presenting a wide array of delectable dishes that capture the true essence of traditional Chinese cooking, tailored to suit the distinct preferences of our local community. Whether you're craving the comforting embrace of timeless favorites or ready to explore exciting chef's specials, our skilled culinary team prepares each dish with care and precision. As a cornerstone of Denton's dining scene, we're dedicated to fashioning a welcoming ambiance where families, friends, and individuals can gather to relish the simple joy of sharing a meal. Join us for an adventure that honors both authenticity and innovation, all set against the lively backdrop of mid-town Denton.";

const aboutDiv = document.createElement("div");
aboutDiv.setAttribute("id", "about-div");

aboutDiv.append(aboutText, aboutTextParagraph);

// Creates the Location section

const locationTitle = document.createElement("h2");
locationTitle.textContent = "Our Location";

const locationText = document.createElement("p");
locationText.textContent = "Visit us at your nearest location!"

const locationDiv = document.createElement("div");
locationDiv.setAttribute("id", "location-div");

locationDiv.append(locationTitle, locationText);

// Gets the content div in index.html and appends each section to the content div

const getDiv = document.getElementById("content");

getDiv.appendChild(header);
getDiv.appendChild(aboutDiv);
getDiv.appendChild(locationDiv);

