

export default function clearDOM() {
    const getPrimordialDiv = document.getElementById("content");
    getPrimordialDiv.innerHTML = "";
}

// export function displayModule(moduleName) {
//     const getContentDiv = document.getElementById("content");

//     const module = loadModule(moduleName);

//     module.load(getContentDiv);
// }

// export function loadModule(moduleName) {
//     return moduleLoaders[moduleName];
// };

// const moduleLoaders = {
//     menu: loadMenu,
//     weather: loadWeather
// };


