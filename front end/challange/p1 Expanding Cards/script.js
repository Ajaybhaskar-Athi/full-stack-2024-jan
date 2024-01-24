const panels = document.querySelectorAll('.panel')
// querySelector which selects anyhting i.e para ,div

// console.log(panels[1])
// by these it shows the 2nd pic coode in console ,if panels[0] then 1st pic 
// so we make n like array

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // 1st move active on other classes and make active other one 
        removeActiveClasses()
        // wtever i click i make it to panelactive
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
        // so it will remove the class active when it is callleld
    })
}