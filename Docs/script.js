window.onload = () => {
    const openMenu = document.getElementById("open_menu")

    openMenu.addEventListener("click", () => {
        const toggler = new Toggler
        openMenu.getElementsByTagName("i")[0].classList.toggle("fa-xmark")
        toggler.toggleSlide("menu", "right", .2)
    })

    const pageLinks = [...document.getElementsByClassName("page_link")]

    const nextButton = document.getElementById("next_button")
    const backButton = document.getElementById("back_button")

    pageLinks.forEach((pageLink, index) => {
        pageLink.addEventListener("click", click => {
            const activeLink = document.getElementsByClassName("active")[0]

            activeLink.classList.replace("active", "inactive")
            pageLink.classList.replace("inactive", "active")

            const page = document.getElementById(`page_${index + 1}`)
            const pages = [...document.getElementsByClassName('page')]

            if (index !== 0) backButton.removeAttribute("disabled")
            else backButton.setAttribute("disabled", true)
            if (index !== pageLinks.length - 1) nextButton.removeAttribute("disabled")
            else nextButton.setAttribute("disabled", "true")

            pages.forEach(page => {
                page.style.zIndex = "0"
                page.classList.replace("active_page", "inactive_page")
            })
            page.style.zIndex = "1"
            page.classList.replace("inactive_page", "active_page")
        })
    });

    const codes = document.getElementsByClassName("codes");
    [...codes].forEach(code => {
        code.addEventListener("click", () => {
            const cdn = code.innerText

            navigator.clipboard.writeText(cdn).then(callback => {
                code.style.outline = "1px solid green"
                if (code.getAttribute("tooltip") === true && code.nextSibling.nextSibling)
                    code.nextSibling.nextSibling.innerText = "Copied"

                setTimeout(() => {
                    code.style = ""
                    if (code.getAttribute("tooltip") === true && code.nextSibling.nextSibling)
                        code.nextSibling.nextSibling.innerText = "Click to copy"
                }, 3000)
            })
        })
    })


    nextButton.addEventListener("click", click => {
        backButton.removeAttribute("disabled")
        const activePage = document.getElementsByClassName("active_page")[0]
        const index = parseInt(activePage.id.replace("page_", ""), 10)
        const activePageLink = document.getElementsByClassName("page_link")[index - 1]
        const nextPageLink = document.getElementsByClassName("page_link")[index]

        const nextPage = activePage.nextSibling.nodeType === 3 ? activePage.nextSibling.nextSibling : activePage.nextSibling

        if (nextPage.nextSibling.nextSibling === null) {
            nextButton.setAttribute("disabled", true)
        }

        activePageLink.classList.replace("active", "inactive")
        nextPageLink.classList.replace("inactive", "active")

        nextPage.style.zIndex = "1"
        nextPage.classList.replace("inactive_page", "active_page")
        activePage.style.zIndex = "0"
        activePage.classList.replace("active_page", "inactive_page")
    })

    backButton.addEventListener("click", click => {
        nextButton.removeAttribute("disabled")
        const activePage = document.getElementsByClassName("active_page")[0]
        const index = parseInt(activePage.id.replace("page_", ""), 10)
        const activePageLink = document.getElementsByClassName("page_link")[index - 1]
        const prevPageLink = document.getElementsByClassName("page_link")[index - 2]


        const prevPage = activePage.previousSibling.nodeType === 3 ? activePage.previousSibling.previousSibling : activePage.previousSibling

        if (prevPage.previousSibling.previousSibling === null) {
            backButton.setAttribute("disabled", true)
        }

        activePageLink.classList.replace("active", "inactive")
        prevPageLink.classList.replace("inactive", "active")

        prevPage.style.zIndex = "1"
        prevPage.classList.replace("inactive_page", "active_page")
        activePage.style.zIndex = "0"
        activePage.classList.replace("active_page", "inactive_page")
    })
}