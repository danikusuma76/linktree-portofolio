const links =[
    
    {
        label :"Instagram",
        link :"https://instagram.com/dani_kusuma42",
    
    },
    {
        label :"Github",
        link :"https://github.com/danikusuma76",
    
    },
    {
        label :"Facebook",
        link :"https://www.facebook.com/dani.deardlord/",
    
    },
    {
        label :"Linkedin",
        link :"https://linkedin.com/in/dani-kusuma-aji-a52935208",
    
    },
    {
        label :"OnlyFans",
        link :"https://onlyfans.com/daniku4236",
    
    },
];
const btnContainer = document.getElementById("btn-container");

for (let i = 0; i < links.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-link");
    btn.innerHTML = links[i].label;
    btn.addEventListener("click", () => clickLink(links[i].link));
    btnContainer.append(btn);
}

function clickLink(url) {
    window.open(url, "_blank");
}
