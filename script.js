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

    // const effect = setInterval(parallaxEffect, 1000)

    window.addEventListener("mouseover", (scroll) => {
        const background = document.getElementsByTagName("svg")[0]
        const firstSvg = [...background.getElementsByClassName("first")];
        const secondSvg = [...background.getElementsByClassName("second")];
        const thirdSvg = [...background.getElementsByClassName("third")];
        const offset = 5

        firstSvg.forEach(path => {
            const x = (window.innerWidth - scroll.pageX * 1) / offset;
            const y = (window.innerHeight - scroll.pageY * 1) / offset;

            path.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
        secondSvg.forEach(path => {
            const x = (window.innerWidth - scroll.pageX * 2) / offset;
            const y = (window.innerHeight - scroll.pageY * 2) / offset;

            path.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
        thirdSvg.forEach(path => {
            const x = (window.innerWidth - scroll.pageX * 3) / offset;
            const y = (window.innerHeight - scroll.pageY * 3) / offset;

            path.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
        // clearInterval(effect)
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

function parallaxEffect() {
    const background = document.getElementsByTagName("svg")[0]
    const firstSvg = [...background.getElementsByClassName("first")];
    const secondSvg = [...background.getElementsByClassName("second")];
    const thirdSvg = [...background.getElementsByClassName("third")];

    firstSvg.forEach(path => {
        const x = Math.random() * 100
        const y = Math.random() * 100

        path.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    secondSvg.forEach(path => {
        const x = Math.random() * 100
        const y = Math.random() * 100

        path.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    thirdSvg.forEach(path => {
        const x = Math.random() * 100
        const y = Math.random() * 100

        path.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}