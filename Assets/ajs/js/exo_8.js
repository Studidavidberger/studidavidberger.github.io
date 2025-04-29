/*
* Exercice 8 : Écrire un algorithme qui affiche
* son plus grand diviseur.
*
* BEGIN
*
* Declarer les elements HTML button, et calc.
*
* Declarer les variables number, index, et result
*
* number = INPUT num "Entrez votre nombre"
*
* WHILE ( index <= ( number / 2 ) )
*   WHILE ( index MOD 2 equal to 0 OR index MOD 3 equal to 0 OR index MOD 5  equal to 5 )
*       index = index + 1;
*
* result = index
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
let index = 0;
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
    while( index <= ( number / 2 ) ) {
        while (index % 2 === 0 || index % 3 === 0 || index % 5 === 0) {
            index = index + 1;
            console.log("Le plus grand divieur de ", origin, "equivaut a ", number);
        }
    }
})
