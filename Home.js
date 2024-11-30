let menu = document.querySelector(".menuItem");

menu.addEventListener("onClick", () =>{
    console.log("Menu clicked!");
    menu.addEventListener("click", () =>{
        console.log("Submenu clicked!");
       
        
    })
})
