function run() {
    getCard()
}

function getCard() {
    var randNum = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C","D","H","S"]
    var randSuit = Math.floor(Math.random() * 4)
    document.getElementById("card").innerHTML = "<img src=images/" + randNum + suitArray[randSuit] + ".jpg>" 
}