
function getDate() {
    return document.getElementById('Date').value;
}
var request = ''
function search() {
   var request = `https://api.nasa.gov/planetary/apod?date=`+getDate()+'&api_key=7lqXNAdcwRnaAC3kg9sK6pqghmIkicBeI8bKsihi'
   fetch(request).then(res => res.json()).then(data =>{
    console.log(data)
    document.querySelector('img').src = data.hdurl
    document.querySelector('p').innerHTML = data.explanation
    document.querySelector('h1').innerHTML = `Picture On`+" " + getDate()
    localStorage.setItem('Date' , [document.getElementById('Date').value])
    document.getElementById("d1").innerText = localStorage.getItem("Date")
})
   .catch (err => {
    console.log('error')
   })
}
function find() {
    var request = `https://api.nasa.gov/planetary/apod?date=`+localStorage.getItem("Date")+'&api_key=7lqXNAdcwRnaAC3kg9sK6pqghmIkicBeI8bKsihi'
    fetch(request).then(res => res.json()).then(data =>{
    console.log(data)
    document.querySelector('img').src = data.hdurl
    document.querySelector('p').innerHTML = data.explanation
    document.querySelector('h1').innerHTML = `Picture On`+" " + getDate()
})
}