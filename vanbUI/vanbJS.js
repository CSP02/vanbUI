window.addEventListener("load", load => {
    //? switch inputs functionality
    const switches = document.querySelectorAll('input[vanb="true"][type="checkbox"][variant="switch"]+label');
    switches.forEach(sInputEl => {
        const label = sInputEl;
        const actionIndicator = document.createElement("span");
        const circle = document.createElement('span');
        
        actionIndicator.style = `border-radius: 1.3rem;
            height: 2.3rem;
            width: 4rem;
            background-color:rgb(230, 230, 230);
            padding: 0 .3rem;
            display: flex;
            align-items: center;
            transition: .2s ease-in-out;`;
        circle.style = `border-radius: 50%;
            display: block;
            height: 1.7rem;
            width: 1.7rem;
            background-color:rgb(239, 239, 239);
            box-shadow: rgb(0, 0, 0) 0px 0px 5px 0px;
            transition: .2s ease-in-out;`;

        // console.log(sInputEl.previousElementSibling)
        sInputEl.previousElementSibling.addEventListener("change", e => {
            if(sInputEl.previousElementSibling.checked) {
                circle.style.marginLeft = "calc(100% - 1.7rem)";
                actionIndicator.style.backgroundColor = "rgb(181, 255, 151)";
            }else{
                circle.style.marginLeft = "0";
                actionIndicator.style.backgroundColor = "rgb(230, 230, 230)";
            }
        })
        
        actionIndicator.appendChild(circle);
        label.appendChild(actionIndicator);
    })
    //? end of switch functionality

    //? avatars
    const avatars = document.querySelectorAll('img[type="avatar"][vanb="true"][size="custom"]');
    avatars.forEach(avatar => {
        avatar.style.height = avatar.getAttribute("data-dim") + "px";
        avatar.style.width = avatar.getAttribute("data-dim") + "px";
    })
    //? completed custom avatar
})