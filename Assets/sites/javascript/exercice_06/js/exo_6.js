/*
* Exercice 6 : Ecrire un algorithme qui calcule
* la factorielle d'un nombre
*
* BEGIN
*
* Declarer les elements HTML button, et calc.
*
* Declarer les variables number, index and result.
*
* number = INPUT num "Entrez votre nombre"
*
* index = number
*
* WHILE index is greater or equal to 1
*   index = index -1
*   number = number * index
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
let valeure_originelle = 0;
let index = 0;

// RECUPERER LA VALEURE DE LA VARIABLE
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        index = number;
        valeure_originelle = number;
        console.log("Tu viens d'ecrire", number, "index=", index, "number", number );
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;
    })

// Calculer la factorielle.
    calc.addEventListener('click', function () {
        while( index !== 1 ) {
            index = index - 1;
            number = number * index;
        }
        result = number;
        console.log(`Le resultat de la factorielle de ${valeure_originelle} nous amène a monter au niveau`, Number(result));
    })