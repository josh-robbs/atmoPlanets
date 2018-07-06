let url = './planets.json'
fetch(url)
    .then(response => response.json())
    //.then(myData => console.log(myData.data))
    .then(myData => addInfo(myData.data))

function addInfo(data) {
    let allPlanets = document.querySelectorAll('img')
    for(let i=0; i<data.length; i++){
        allPlanets[i].setAttribute("name",data[i].gasA)
        allPlanets[i].addEventListener("click", function(event){
            console.log(event.target.name)
            alert(event.target.name)
        })
}}
