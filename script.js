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
    const vanbUICSS = document.createElement("link")
    vanbUICSS.rel = "stylesheet"
    vanbUICSS.href = "https://csp02.me/vanbUI/vanbUI/vanbUI.css"

    const style = document.createElement("style")
    style.innerText = `
        *{
            margin: 0;
            padding: 0;
        }
        body{
            background-color: rgb(8, 8, 8);
            display: flex;
            justify-content: center;
            align-items: center;
        }`

    const fontAwesome = document.createElement("link")
    fontAwesome.rel = "stylesheet"
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    fontAwesome.crossorigin = "anonymous"
    fontAwesome.referrerpolicy = "no-referrer"

    const iframe = window.frames[0].document
    iframe.head.append(...[vanbUICSS, fontAwesome, style])

    const variantSelector = document.getElementById("variant_selector")

    const button = document.createElement("button")

    button.setAttribute("vanb", "true")
    button.setAttribute("variant", variantSelector.value)
    button.innerText = variantSelector.value

    iframe.body.appendChild(button)


    variantSelector.addEventListener("change", event => {
        iframe.body.innerHTML = ""
        const variant = variantSelector.value
        const button = document.createElement("button")

        button.setAttribute("vanb", "true")
        button.setAttribute("variant", variant)
        button.innerText = variant

        iframe.body.appendChild(button)
    })

    const openMenu = document.getElementById("open_menu")

    openMenu.addEventListener("click", () => {
        const toggler = new Toggler
        openMenu.getElementsByTagName("i")[0].classList.toggle("fa-xmark")
        toggler.toggleSlide("menu", "right", .2)
    })
}
