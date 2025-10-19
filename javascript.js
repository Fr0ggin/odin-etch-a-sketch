
const wrapper = document.querySelector(".wrapper")
const buttonRemoveGrid = document.createElement("button")
buttonRemoveGrid.textContent = "Delete excisting grid?"
wrapper.appendChild(buttonRemoveGrid)

//create a 16 by 16 grid of square divs outer loop for columns inner loop for items in column
const createGrid = ((columns) => {
    for(let i = 0; i < columns; i++){
    let divColumn = document.createElement("div")
    divColumn.classList.add("divColumn")
    divColumn.id = i
    wrapper.appendChild(divColumn)

    for( let j = 0; j < columns; j++){
        let divGrid = document.createElement("div")
        divGrid.classList.add("divGrid")
        // divGrid.classList.add(i)
        document.getElementById(i).appendChild(divGrid)
    }
}
})
createGrid(16)

// greate nodelist for mutation on all elements as function for remove button
let allGrid = document.querySelectorAll(".divGrid")
let allColumn = document.querySelectorAll(".divColumn")



// create mousevent on mouse enter and leave
const addMouseHover = () =>{
    allGrid = document.querySelectorAll(".divGrid")
    allGrid.forEach(divGrid => {
    divGrid.addEventListener("mouseenter",() =>{
        divGrid.style.backgroundColor = "green"
     })
    divGrid.addEventListener("mouseleave",() =>{
        divGrid.style.backgroundColor = "lightblue"
     })
    })
}
addMouseHover()

buttonRemoveGrid.addEventListener("click", () =>{
    allColumn = document.querySelectorAll(".divColumn")
    allColumn.forEach(divColumn =>{
        divColumn.remove()
    })
    createGrid(prompt("how many colums do you want?"))
    addMouseHover()
    
})
// mouse event changes color of the div
// create mouse event on mouse exit
// mouse event reverts color back