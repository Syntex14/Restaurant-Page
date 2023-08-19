import generalTsoChickenImage from './General-Tso-Chicken.jpg';
import orangeChickenImage from './Orange-Chicken.jpg';
import HeaderPhoto from './china-bowl.png';

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

header.append(title, myHeaderPhoto, navBar);

function recipes (dishName, dishImage, price, description) {


  return { dishName, price, dishImage, description };  
};

const generalTsoChicken = recipes("General Tso's Chicken", generalTsoChickenImage, 11.99, "General Tso's Chicken is a sweet and savory dish that features bite-sized pieces of deep-fried chicken that are crispy on the outside and tender on the inside. The chicken is coated in a flavorful sauce made from soy sauce, hoisin sauce, garlic, ginger, and chili peppers. The sauce has a perfect balance of sweetness, tanginess, and spiciness, making it a favorite among those who enjoy a mix of flavors in their dishes. It's often garnished with sesame seeds and chopped green onions and is served with steamed white rice." );

const orangeChicken = recipes("Orange Chicken", orangeChickenImage, 12.99, "Orange Chicken is a delicious dish that consists of battered and deep-fried chicken pieces tossed in a tangy and slightly sweet orange sauce. The sauce is made with fresh orange juice, soy sauce, ginger, garlic, and a touch of sugar. The combination of crispy chicken and the vibrant orange sauce creates a delightful contrast in textures and flavors. This dish is often enjoyed with a side of steamed vegetables and rice." );


export default function load() {
    const getDiv = document.getElementById("content");

    getDiv.appendChild(header);
}