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
    const tooltip = document.getElementById("button_tooltip")

    variantSelector.addEventListener("change", event => {
        const variant = variantSelector.value

        button.setAttribute("variant", variant)
        button.innerText = variant
        tooltip.innerText = variant
    })

    const openMenu = document.getElementById("open_menu")

    openMenu.addEventListener("click", () => {
        const toggler = new Toggler
        openMenu.getElementsByTagName("i")[0].classList.toggle("fa-xmark")
        toggler.toggleSlide("menu", "right", .2)
    })

    const cdnInp = document.getElementById("cdn_inp")
    cdnInp.addEventListener("click", () => {
        const cdn = cdnInp.innerText

        navigator.clipboard.writeText(cdn).then(callback => {
            cdnInp.style.border = "1px solid green"
            document.getElementById("copied").innerText = "Copied"
            
            setTimeout(() => {
                cdnInp.style = ""
                document.getElementById("copied").innerText = "Click to copy"
            }, 3000)
        })
    })
}
