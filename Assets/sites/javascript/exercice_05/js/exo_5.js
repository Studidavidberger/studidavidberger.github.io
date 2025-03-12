/*
* Exercice 5 : Ecrire un algorithme qui affiche la table de
* multiplication d'un nombre
*
* PSEUDOCODE EN JAVASCRIPT
*
* BEGIN
*
* Declarer les elements HTML button, et calc.
*
* Declare variables number, index et result
*
* number = INPUT num "Entrez votre nombre"
*
* index = 1
*
* WHILE result is less or equal to number * 9
* ou
* WHILE index is less or equal to 9
*   PRINT result
*   result = number * index
*   index = index + 1
*
* * */
 
// Declarer les elements HTML
// button, button2, debug, calc.
const button = document.getElementById('button');
const debug = document.getElementById('debug');
const calc = document.getElementById('calc');
const version = document.getElementById('version');

// Déclarer les variables number, et result.
let number = 0;
let index = 1;
let result = 0;

// RECUPERER LA VALEURE DE LA VARIABLE
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        console.log("Tu viens d'ecrire", number);
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;
    })
    
// CALCULER LE CARRE.
    calc.addEventListener('click', function () {
        console.log("La table de ", number);
        let index = 1;
        while ( index <= 9 ) {
            result = number * index;
            console.log( result );
            index = index + 1;

        }
    })

debug.addEventListener('click', function () {
    console.log(`
        bouton = ${ button.value }
        ${typeof button }\n
        `)
})
