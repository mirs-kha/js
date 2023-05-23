const myList1 = document.querySelector('#parent')
const chapeau = document.querySelector('#chapeau')
var afflife = document.querySelector('#life')
var life = 3

var btns2 = ["oreilles", "cornes", "tentacules", "cheveux", "chapeau", "lunettes", "barbe", "ailes", "moustache", "troisyeux", "deuxyeux", "oeil", "rose", "jaune", "vert", "violet", "multi"]
var btns = document.querySelector('.btn2')

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


btns.addEventListener("click", function () {
    modal.setAttribute("style","display:none;")
})




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {


        if (life > 0) {
            console.log("fuck")
            life = life - 1
            afflife.innerHTML = life
        }
        else {
            document.querySelector('#choix').setAttribute("disabled", "true")
            console.log(btns)
        }
    })

}




afflife.innerHTML = life





class PERSONNAGE {
    constructor(name, chapeau, oreilles, lunettes, barbe, image, id, cornes, tentacules, ailes, moustache, troisyeux, deuxyeux, oeil, rose, jaune, vert, violet, multi, cheveux, trouve) {
        this.name = name
        this.chapeau = chapeau
        this.oreilles = oreilles
        this.lunettes = lunettes
        this.barbe = barbe
        this.image = image
        this.id = id
        this.cornes = cornes
        this.tentacules = tentacules
        this.ailes = ailes
        this.moustache = moustache
        this.troisyeux = troisyeux
        this.deuxyeux = deuxyeux
        this.oeil = oeil
        this.rose = rose
        this.jaune = jaune
        this.vert = vert
        this.violet = violet
        this.multi = multi
        this.cheveux = cheveux
        this.trouve = trouve

    }
}


let Character1 = new PERSONNAGE('harry', false, false, true, false, 'harry.png', 1, true, false, false, false, false, false, true, false, false, true, false, false, false, false);
let Character2 = new PERSONNAGE('serge', false, true, false, false, 'serge.png', 2, false, true, false, false, false, true, false, true, false, false, false, false, false, false);
let Character3 = new PERSONNAGE('Julie', true, false, false, false, 'julie.png', 3, true, false, false, false, false, false, true, false, false, true, false, false, false, false);
let Character4 = new PERSONNAGE('Mathilde', false, true, false, false, 'mathilde.png', 4, false, true, false, false, true, false, false, false, true, false, false, false, true, false);
let Character5 = new PERSONNAGE('Marie', false, false, false, false, 'marie.png', 5, true, false, false, false, false, false, true, false, false, false, true, false, false, false);
let Character6 = new PERSONNAGE('Ben', true, true, false, false, 'ben.png', 6, true, false, false, false, true, false, false, false, true, false, false, false, false, false);
let Character7 = new PERSONNAGE('Laura', false, true, false, false, 'laura.png', 7, false, true, false, false, false, true, false, false, false, false, true, false, false, false);
let Character8 = new PERSONNAGE('Fred', false, true, false, false, 'fred.png', 8, true, true, false, false, false, false, true, false, true, false, false, false, false, false);
let Character9 = new PERSONNAGE('Sylvie', false, false, false, false, 'sylvie.png', 9, false, true, true, false, true, false, false, false, false, false, true, false, false, false);
let Character10 = new PERSONNAGE('Homer', false, true, false, true, 'homer2.png', 10, false, false, false, false, false, true, false, false, false, false, false, true, false, false);
let Character11 = new PERSONNAGE('Leona', false, true, false, false, 'leona.png', 11, false, true, false, false, false, false, true, true, false, false, false, false, true, false);
let Character12 = new PERSONNAGE('Vick', false, true, false, true, 'vick.png', 12, true, false, false, false, true, false, false, false, false, false, true, false, false, false);
let Character13 = new PERSONNAGE('Donatello', false, false, false, false, 'donatello.png', 13, false, true, true, false, false, true, false, false, false, true, false, false, false, false);
let Character14 = new PERSONNAGE('Strauss', false, true, false, false, 'strauss.png', 14, true, true, false, false, false, true, false, true, false, false, false, false, false, false);
let Character15 = new PERSONNAGE('Johny', false, true, true, false, 'johny.png', 15, false, false, false, false, true, false, false, false, true, false, false, false, true, false);
let Character16 = new PERSONNAGE('Cosmix', false, false, false, false, 'cosmix.png', 16, true, false, false, true, false, false, true, false, false, true, false, false, false, false);
let Character17 = new PERSONNAGE('Jeff', false, true, true, false, 'jeff.png', 17, false, false, true, false, false, false, true, false, false, false, false, true, false, false);




let Characters = [Character1, Character2, Character3, Character4, Character5, Character6, Character7, Character8, Character9, Character10, Character11, Character12, Character13, Character14, Character15, Character16, Character17]


// creation des divs
Characters.forEach(creadiv => {


    const creacard = document.createElement("div")
    creacard.classList.add(`div${creadiv.id}`)
    creacard.setAttribute("id", `${creadiv.name}`)

    creacard.innerHTML = ` <img width="200px" src="views/assets/imgs/${creadiv.image}">  
    
    `
    myList1.append(creacard)



});



// creation du perso aleatoire
var who = []
Characters.forEach(random => {
    who.push(random)


});
var values = who
var valueToUse = values[Math.floor(Math.random() * values.length)]
let pos = who.indexOf(valueToUse)
var showNameRandom = document.querySelector(".cards")
// showNameRandom.innerText = `${who[pos].name} - chap:${who[pos].chapeau}`

console.log(who[pos].name)





Characters.forEach(element => {

    var btns3 = document.getElementsByClassName(`div${element.id}`)
    for (var i = 0; i < btns3.length; i++) {
        btns3[i].addEventListener("click", function () {
            console.log(element.name)
            if (who[pos].name === element.name){
                life = 0
                alert("vous avez gagné !!!!!")
                document.querySelector('#parent').setAttribute("disabled", "true")
                

            }
            else{
                life = 0
                alert(`vous avez perdu !!!!! il fallait trouver ${who[pos].name}`)
                document.querySelector('#parent').setAttribute("disabled", "true")
                
            }

        })
    }
    // var btns = choix.getElementsByClassName("btn2");

    console.log(element)
    // // iterate over the array that was just queried for
    // for (var i = 0; i < btns.length; i++) {

    //     btns[i].addEventListener("click", function () {
    //         afflife.innerHTML = life - 1

    //         if (JSON.stringify(who[pos].chapeau) !== JSON.stringify(element.chapeau)) {
    //             const creacard = document.querySelector(`#${element.name}`)
    //             creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
    //             console.log(element.name)
    //             creacard.setAttribute("class", `div${element.id} retourne`)
    //             btns[i].setAttribute("disabled", "true")
    //         }
    //         else {
    //         }
    //     })
    // }

    chapeau.addEventListener("click", function () {

        if (who[pos].chapeau !== element.chapeau) {

            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            chapeau.setAttribute("disabled", "true")



        }
        else {
            console.log(element.name)

        }
    })


    lunettes.addEventListener("click", function () {

        if (who[pos].lunettes !== element.lunettes) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.setAttribute("class", `div${element.id} retourne`)
            lunettes.setAttribute("disabled", "true")
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'


        }
        else {
            console.log(element.name)
        }

    })


    barbe.addEventListener("click", function () {

        if (who[pos].barbe !== element.barbe) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.setAttribute("class", `div${element.id} retourne`)
            barbe.setAttribute("disabled", "true")
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'


        }


    })


    oreilles.addEventListener("click", function () {

        if (who[pos].oreilles !== element.oreilles) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.setAttribute("class", `div${element.id} retourne`)
            oreilles.setAttribute("disabled", "true")
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
        }
    })

    tentacules.addEventListener("click", function () {

        if (who[pos].tentacules !== element.tentacules) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            tentacules.setAttribute("disabled", "true")
        }
        else {
        }
    })

    cornes.addEventListener("click", function () {

        if (who[pos].cornes !== element.cornes) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            cornes.setAttribute("disabled", "true")
        }
        else {
        }
    })

    cheveux.addEventListener("click", function () {

        if (who[pos].cheveux !== element.cheveux) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            cheveux.setAttribute("disabled", "true")
        }
        else {
        }
    })

    ailes.addEventListener("click", function () {

        if (who[pos].ailes !== element.ailes) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            ailes.setAttribute("disabled", "true")
        }
        else {
        }
    })


    moustache.addEventListener("click", function () {

        if (who[pos].moustache !== element.moustache) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            moustache.setAttribute("disabled", "true")
        }
        else {
        }
    })

    troisyeux.addEventListener("click", function () {

        if (who[pos].troisyeux !== element.troisyeux) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            troisyeux.setAttribute("disabled", "true")
        }
        else {
        }
    })

    deuxyeux.addEventListener("click", function () {

        if (who[pos].deuxyeux !== element.deuxyeux) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            deuxyeux.setAttribute("disabled", "true")
        }
        else {
        }
    })

    oeil.addEventListener("click", function () {

        if (who[pos].oeil !== element.oeil) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            oeil.setAttribute("disabled", "true")
        }
        else {
        }
    })

    rose.addEventListener("click", function () {

        if (who[pos].rose !== element.rose) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            rose.setAttribute("disabled", "true")
        }
        else {
        }
    })

    jaune.addEventListener("click", function () {

        if (who[pos].jaune !== element.jaune) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            jaune.setAttribute("disabled", "true")
        }
        else {
        }
    })

    vert.addEventListener("click", function () {

        if (who[pos].vert !== element.vert) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            vert.setAttribute("disabled", "true")
        }
        else {
        }
    })

    violet.addEventListener("click", function () {

        if (who[pos].violet !== element.violet) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            violet.setAttribute("disabled", "true")
        }
        else {
        }
    })

    multi.addEventListener("click", function () {

        if (who[pos].multi !== element.multi) {
            const creacard = document.querySelector(`#${element.name}`)
            creacard.innerHTML = '<img src="views/assets/imgs/retourne.png">'
            creacard.setAttribute("class", `div${element.id} retourne`)
            multi.setAttribute("disabled", "true")
        }
        else {
        }
    })

});




