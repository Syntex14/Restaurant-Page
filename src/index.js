// Need to understand
    // webpack and how to load modules
        // Entry Points
        // Output
        // dynamic import
            // default
            // 



import HeaderPhoto from './china-bowl.png';
import './style.css';
import {fetchWeatherData, weatherCity, weatherState, weatherCondition, weatherTemperature, weatherIcon} from './weather.js';
import clearDOM from './moduleLoader.js'
import load from './menu.js';

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

for (const itemText of menuItems) {
    const ol = document.createElement("ol"); 
    const link = document.createElement("a");
    link.textContent = itemText; 
    link.setAttribute("href", "#");
    link.setAttribute("id", `${itemText}`); 
    ol.appendChild(link);  // Append the <a> element to the < li> element
    ul.appendChild(ol);    // Append the <li> element to the <ul> element
}
navBar.appendChild(ul);   // Append the <ul> element to the navigation bar


function navBarClickers() {
    const menuClicker = document.getElementById("Menu").addEventListener("click", () => loadModule('menu.js'));
    console.log(menuClicker);
}

function loadModule () {
    clearDOM();
    load();

}

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

// Creates the Weather section

const locationTitle = document.createElement("h2");
locationTitle.textContent = "Local Weather";

const locationText = document.createElement("p");
locationText.textContent = "Hot or cold, we are always there for you!"

// Creates the City and State inputs
// City -> 
const locationCityName = document.createElement("h3");
const locationStateName = document.createElement("h3");
const locationWeatherCondition = document.createElement("h4");
const locationWeatherTemperature = document.createElement("h4");
const locationWeatherIcon = new Image();


fetchWeatherData().then(() => {

    locationCityName.textContent = weatherCity;
    locationStateName.textContent = weatherState;
    locationWeatherCondition.textContent = weatherCondition;
    locationWeatherTemperature.textContent = weatherTemperature;
    locationWeatherIcon.src = weatherIcon;
});


// Creates the weather div where everything weather-div related is inputted

const locationDiv = document.createElement("div");
locationDiv.setAttribute("id", "location-div");


const imgGifAPI = new Image();
imgGifAPI.setAttribute("id", "gif-image");
imgGifAPI.src = "#";

fetch('https://api.giphy.com/v1/gifs/translate?api_key=w1ra1rONC8I9vp4UFGFmEjTwiBgK9XOI&s=cats')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        imgGifAPI.src = response.data.images.original.url;
    });
locationDiv.append(locationTitle, locationText,locationCityName, locationStateName, locationWeatherCondition, locationWeatherTemperature, locationWeatherIcon, imgGifAPI);

// Gets the content div in index.html and appends each section to the content div

const getDiv = document.getElementById("content");

getDiv.appendChild(header);
getDiv.appendChild(aboutDiv);
getDiv.appendChild(locationDiv);


document.addEventListener("DOMContentLoaded", function () {
    navBarClickers();
});