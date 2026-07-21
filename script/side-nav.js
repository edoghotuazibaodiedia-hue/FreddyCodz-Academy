const navBar = document.getElementById("navbar")
const closeIcon = document.getElementById("closeIcon")

function open(){
    navBar.classList.add("open")
    navBar.classList.remove("close")
    closeIcon.style.transform = "rotate(360deg)"
    closeIcon.style.transition = ".5s ease"
}

function close(){
    navBar.classList.add("close")
    navBar.classList.remove("open")
    closeIcon.style.transform = "rotate(-360deg)"
    closeIcon.style.transition = ".5s ease"
}

function openSideNav(){
    open()
    navBar.style.opacity = 1
}

function closeSideNav(){
    close()
    navBar.style.opacity = 0
}