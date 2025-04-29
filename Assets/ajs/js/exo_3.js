/*
*
* Exercice 3 affiche tous les nombres pairs compris entre 1 et ce nombre
*
* START
*
* Declarer la variable number, index, et result.
*
* index = 0
*
* Declarer les boutons button, et calc
*
* number = INPUT "Entrez votre nombre"
*
* IF calc is clicked
*   WHILE index is less of equal to number
* {
*       result = index mod 2
*
*       IF result = 0, 2, 4, 6, or 8
*           PRINT index
*       ELSE
*           index = index + 1
* }
*
*
* * */
 
// Declarer les elements HTML button, et calc.
const button = document.getElementById('button');
const calc = document.getElementById('calc');

// Déclarer les elements HTML secondaire
const version = document.getElementById('version');
const debug = document.getElementById('debug');

// Déclarer les variables number, et result.
let number = 0;
let index = 0;
    
// RECUPERER LA VALEURE DE LA VARIABLE
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        console.log("Tu viens d'ecrire", number);
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;
    })
    
// CALCULER TOUT LES NOMBRES PAIRS..
    calc.addEventListener('click', function () {
        index = number % 2;
        while ( index <= number ) {
            if ( index === 0 || 2 || 4 || 6 || 8 )
            {
                console.log("index=", index );
                index = index + 1;
            }
            index = index + 1;

        }
    })


debug.addEventListener('click', function () {
    console.log(`
        bouton = ${ button.value }
        ${typeof button }\n
        `)
})
