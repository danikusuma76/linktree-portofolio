const links =[
    {
        label :"Whatsapp",
        link :"wa.me/6289523677484",
    
    },
    {
        label :"Instagram",
        link :"https://instagram.com/dani_kusuma42",
    
    },
]
const btnContainer = document.getElementById("btn-container");

for (let i = 0; i < link.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-link");
    btn.innerHTML = links[i].label;
    btn.addEventListener("click",()=> clickLink(links[i].link))
    btnContainer.append(btn)
    
}
function clickLink  (url)
{
    window.open(url,"blank");
}
