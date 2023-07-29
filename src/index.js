

console.log("Hi, just checking to see if the webpack set up worked!");


const header = document.createElement('header');
header.setAttribute("id", "head");
const title = document.createElement("h1");
title.textContent = "ChinaTown Restuaurant";
const navBar = document.createElement("nav");

const ul = document.createElement("ul");
const li = document.createElement("li");

ul.append(li);
ul.append(li);
navBar.append(ul);

const headerText = document.createElement("p");
headerText.textContent = "Proudly serving Denton 15 years of authentic Chinese food";

header.append(title, navBar, headerText);


const getDiv = document.getElementById("content");

getDiv.appendChild(header);

