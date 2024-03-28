window.onload = () => {
    const container = document.getElementById("page_wrapper")
    const navigation = document.getElementById("navigation")

    container.addEventListener("scroll", (scroll) => {
        if (container.scrollTop <= 5) {
            navigation.classList.remove("not_top")
        } else {
            navigation.classList.add("not_top")
        }
    })

    const variantSelector = document.getElementById("variant_selector")
    const button = document.getElementById("live_example")

    variantSelector.addEventListener("change", event => {
        const variant = variantSelector.value

        button.setAttribute("variant", variant)
        button.innerText = variant
    })

    const openMenu = document.getElementById("open_menu")

    openMenu.addEventListener("click", () => {
        const toggler = new Toggler
        openMenu.getElementsByTagName("i")[0].classList.toggle("fa-xmark")
        toggler.toggleSlide("menu", "right", .2)
    })
}
