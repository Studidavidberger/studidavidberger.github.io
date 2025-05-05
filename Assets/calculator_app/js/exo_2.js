/* Exercice 2 Ecrire un algorithme qui calcule le carré d'un nombre donné
*
* PSEUDOCODE
*
* START
*
* Declarer les elements HTML button et button2, et calc
*
* Declare les variables number, number2, et result
*
* IF num button change
*   PRINT = "Vous avez choisi number"
*
* IF num button2 change
*   PRINT = "Vous avez choisi number2"
*
* IF output is clicked
*   PRINT = "le resultat est result"
*
*
* * */


// Declarer les elements HTML
// button, button2, debug, calc.
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const debug = document.getElementById('debug');
const calc = document.getElementById('calc');

// Déclarer les variables number, et result.
let number = 0;
let number2 = 0;
let result = 0;

// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = Number(document.getElementById('button').value);
    console.log("Tu viens d'ecrire", number);
    // Afficher le repertoire
    document.getElementById('version').innerHTML = document.getElementById('script').src;
})
// RECUPERER LA VALEURE DE LA VARIABLE
button2.addEventListener('change', function () {
    number2 = Number(document.getElementById('button2').value);
    console.log("Tu viens d'ecrire", number2);
})

// CALCULER LE CARRE.
calc.addEventListener('click', function () {
    result = number + number2;
    console.log("Le resultat est", result);

    // AFFICHER LE RESULTAT
    output.classList.remove('hide');
    document.getElementById("output").innerHTML = result;
})

debug.addEventListener('click', function () {
    console.log(`
        bouton = ${ button.value }
        ${typeof button }\n
        `)
})
