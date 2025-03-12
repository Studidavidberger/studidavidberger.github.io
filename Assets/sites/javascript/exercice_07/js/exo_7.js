/*
* Exercice 7 : Ecrire un algorithme qui calcule
* l'inverse d'un nombre
*
* BEGIN
*
* Declarer les elements HTML button, calc, debug et version.
*
* Declarer les variables number, et result
*
* number = INPUT num "Entrez votre nombre"
*
* IF button is clicked
*   number = number - ( number * 2 );
*
* OUTPUT number
*
* * */

// Declarer les elements HTML
// button, et calc.
const button = document.getElementById('button');
const calc = document.getElementById('calc');

// Boutons secondaires
const version = document.getElementById('version');

// Déclarer les variables number, origin et result.
let number = 0;
let result = 0;
let origin = 0;

// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = document.getElementById('button').value;
    console.log("Tu viens d'ecrire", number);
    // Afficher le repertoire
    document.getElementById('version').innerHTML = document.getElementById('script').src;
})

// Calculer quelque chose.
calc.addEventListener('click', function () {
    origin = number;
    number = number - ( number * 2 );
    console.log(`l'inverse de ${ origin }`, " équivaut a ", number);
})
