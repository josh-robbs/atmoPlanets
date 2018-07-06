let url = './planets.json'
fetch(url)
    .then(response => response.json())
    .then(myData => console.log(myData.data))
    //.then(myData => addInfo(myData))

// function addInfo(data) {

// }



console.log('ello')

