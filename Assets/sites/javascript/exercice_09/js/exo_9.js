/*
* Exercice 9 : Écrire un algorithme qui affiche
* son plus petit diviseur.
*
* BEGIN
*
* Declarer les elements HTML button, debug, calc, et version.
*
* Declarer les variables number, and result
*
* number = INPUT num "Entrez votre nombre"
*
* number = number * number
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

// Déclarer les variables number, et result.
let number = 0;
let result = 0;

// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = document.getElementById('button').value;
    console.log("Tu viens d'ecrire", number);
    // Afficher le repertoire
    document.getElementById('version').innerHTML = document.getElementById('script').src;
})

// Calculer quelque chose.
calc.addEventListener('click', function () {
    // coder les math ici
    console.log("Le resultat est", result);
})