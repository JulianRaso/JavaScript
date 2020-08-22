document.getElementById("showButton").addEventListener("click", function(){
    console.log("wscasdasd");
    let open = document.getElementById("sidebar-show")
    

    if(open.classList.contains("sidebar-show")){
        open.classList.remove("sidebar-show")
        open.classList.add("sidebar-hidden")
    }else{
        open.classList.remove("sidebar-hidden")
        open.classList.add("sidebar-show")
    }
})
