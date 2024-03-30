window.onload = () => {
    const openMenu = document.getElementById("open_menu")

    openMenu.addEventListener("click", () => {
        const toggler = new Toggler
        openMenu.getElementsByTagName("i")[0].classList.toggle("fa-xmark")
        toggler.toggleSlide("menu", "right", .2)
    })

    const pageLinks = [...document.getElementsByClassName("page_link")]

    pageLinks.forEach((pageLink, index) => {
        pageLink.addEventListener("click", click => {
            const activeLink = document.getElementsByClassName("active")[0]

            activeLink.classList.replace("active", "inactive")
            pageLink.classList.replace("inactive", "active")

            const page = document.getElementById(`page_${index + 1}`)
            const pages = [...document.getElementsByClassName('page')]

            pages.forEach(page => {
                page.style.zIndex = "0"
            })
            page.style.zIndex = "1"
        })
    });
}