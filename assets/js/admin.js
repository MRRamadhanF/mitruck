let winSize = () => {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth

    return x
}


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

const burger = document.getElementById("burger")
const header = document.getElementById("header-admin")
const admin = document.getElementById("admin-main")
const closeSidebar = document.getElementById("close-side")

let clicked = 0

// auto collapse sidebar
let autoCollapse = () => {
    if (winSize() > 1001) {
        sidebar.classList.remove("collapse")
        header.classList.remove("collapse")
        admin.classList.remove("collapse")
        sidebar.classList.remove("translate-x-105")
    } else if (winSize() > 827) {
        sidebar.classList.add("collapse")
        header.classList.add("collapse")
        admin.classList.add("collapse")
        sidebar.classList.remove("translate-x-105")
    } else {
        header.classList.add("collapse")
        admin.classList.add("collapse")
        sidebar.classList.remove("collapse")
        sidebar.classList.add("translate-x-105")
    }
}

window.addEventListener("resize", autoCollapse)
autoCollapse()


burger.addEventListener("click", () => {
    if (winSize() > 1001) {
        sidebar.classList.toggle("collapse")
        header.classList.toggle("collapse")
        admin.classList.toggle("collapse")

        clicked = (clicked + 1) % 2
    } else if (winSize() > 827) {
        sidebar.classList.remove("collapse")
        closeSidebar.classList.remove("d-none")
    } else {
        sidebar.classList.remove("translate-x-105")
        closeSidebar.classList.remove("d-none")
    }
})

closeSidebar.addEventListener("click", () => {
    if (winSize() > 827) {
        sidebar.classList.add("collapse")
        closeSidebar.classList.add("d-none")
    } else {
        sidebar.classList.add("translate-x-105")
        closeSidebar.classList.add("d-none")
    }
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