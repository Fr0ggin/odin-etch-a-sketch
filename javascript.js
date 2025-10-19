
const wrapper = document.querySelector(".wrapper")


//create a 16 by 16 grid of square divs outer loop for columns inner loop for items in column
for(let i = 0; i <16; i++){
    let divColumn = document.createElement("div")
    divColumn.classList.add("divColumn")
    divColumn.id = i
    wrapper.appendChild(divColumn)

    for( let j = 0; j < 16; j++){
        let divGrid = document.createElement("div")
        divGrid.classList.add("divGrid")
        // divGrid.classList.add(i)
        document.getElementById(i).appendChild(divGrid)
    }
}

// create mousevent on mouse entry
const allGrid = document.querySelectorAll(".divGrid")
allGrid.forEach(divGrid => {
    divGrid.addEventListener("mouseenter",() =>{
        divGrid.style.backgroundColor = "green"
    })
    divGrid.addEventListener("mouseleave",() =>{
        divGrid.style.backgroundColor = "lightblue"
    })
})

// mouse event changes color of the div
// create mouse event on mouse exit
// mouse event reverts color back