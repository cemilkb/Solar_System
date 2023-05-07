/*
todo:           !-------------------------------------------------- Create and Select --------------------------------------------------!                */
let inp = document.querySelector("#input")
let select = document.querySelector("#select")
let btn = document.querySelector("#btn")
let main = document.querySelector("main")
let img = document.createElement("img")
let err = document.createElement("div")
let description = document.createElement("div")
let summary = document.createElement("div")
let weight = document.createElement("div")

/*
todo:           !-------------------------------------------------- ERR0R --------------------------------------------------!                */

err.setAttribute("class", "error")
err.textContent = "Mass is required"

/*
todo:           !-------------------------------------------------- Description & Summary & Weight --------------------------------------------------!                */

description.setAttribute("class", "desc")
summary.setAttribute("class", "summary")
weight.setAttribute("class", "weight")
description.append(summary)
description.append(weight)


/*
todo:           !-------------------------------------------------- ADD EventListener --------------------------------------------------!                */

btn.addEventListener("click", e => {
    /*
    todo:           !-------------------------------------------------- ERR0R --------------------------------------------------!                */
    if (inp.value == "" || inp.value.match(/[A-Z a-z \W]/g)) {
        main.innerHTML = ""
        main.append(err)
    } else {
        main.innerHTML = ""
        /*
       todo:           !-------------------------------------------------- ADD img --------------------------------------------------!                */
        let planet = select.value
        img.setAttribute("src", `${data[planet][1]}`)
        main.append(img)
        /*
        todo:           !-------------------------------------------------- ADD Summary & Weight --------------------------------------------------!                */
        let kg = inp.value
        let g = data[planet][0]
        let calculate = Math.round(kg * g).toFixed(2)
        summary.innerHTML = `The weight of the object on <span>${select.value.toUpperCase()}</span>`
        weight.innerHTML = `${calculate}N`
        main.append(description)

    }
    e.preventDefault()
})


