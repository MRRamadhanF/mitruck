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

// +++++++++++++
// Tabel
// +++++++++++++
function sortTable(n) {
    // Sorting Table
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("data");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

$(document).ready(function () {
    // Pagination table
    $('#data').after('<div id="pagination"></div>');
    var rowsShown = 5;
    var rowsTotal = $('#data tbody tr').length;
    var numPages = rowsTotal / rowsShown;
    for (i = 0; i < numPages; i++) {
        var pageNum = i + 1;
        $('#pagination').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
    }
    $('#data tbody tr').hide();
    $('#data tbody tr').slice(0, rowsShown).show();
    $('#pagination a:first').addClass('active');
    $('#pagination a').bind('click', function () {

        $('#pagination a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
            css('display', 'table-row').animate({ opacity: 1 }, 300);
    });


    // Search on Table
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#data tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// +++++++++++++
// Tabel
// +++++++++++++