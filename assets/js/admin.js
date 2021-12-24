const dropdown = document.getElementById("dropdown-side")
const dropdownMenu = document.getElementById("dropdown-menu-side")
const sideLinks = document.querySelector(".side-links > a")
const sideFoot = document.getElementById("side-foot")

dropdown.addEventListener("click", () => {
    const tinggi = sideLinks.offsetHeight
    const jumlah = dropdownMenu.childElementCount - 1

    const total = (tinggi * jumlah) + "px"

    if (dropdownMenu.style.height == total) {
        dropdownMenu.style.height = "0px"
    } else {
        dropdownMenu.style.height = total
    }

    const dropIcon = document.getElementById("drop-icon")
    dropIcon.classList.toggle("rotate90")
})


const sidebar = document.getElementById("sidebar")

// SIDEBAR


let winSize = () => {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth

    return x
}

const burger = document.getElementById("burger")
const header = document.getElementById("header-admin")
const admin = document.getElementById("admin-main")

let clicked = 0

burger.addEventListener("click", () => {
    sidebar.classList.toggle("collapse")
    header.classList.toggle("collapse")
    admin.classList.toggle("collapse")

    clicked = (clicked + 1) % 2
})


sidebar.addEventListener("mouseenter", () => {
    if (clicked) {
        sidebar.classList.remove("collapse")
    }
})
sidebar.addEventListener("mouseleave", () => {
    if (clicked) {
        sidebar.classList.add("collapse")
    }
})