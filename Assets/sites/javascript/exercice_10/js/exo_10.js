/*
* Écrire un algorithme qui affiche
*  son pgcd avec 10
*
* PSEUDOCODE EN JAVASCRIPT
*
* BEGIN
*
* Declarer les elements HTML :
* button
* output
*
* Declarer les variables :
*
* number = 10
* index = 0
* pgcd
*
* WHILE index is less or equal to ( number / 2 )
*
*   IF number mod index = 0
*       pgcd = number
*   PRINT = "pgcd processing"
*   ELSE
*       index++
*   PRINT = "le PGCD de number = pgcd"
*
*
* * */
 
const button = document.getElementById('button');
const calc = document.getElementById('calc');

// Déclarer les variables number, et result.
let number = 10;
let pgcd = 0;
let index = 1;
    
// RECUPERER LA VALEURE DE LA VARIABLE
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        console.log("Tu viens d'ecrire", number);
    })
    
// CALCULER LE CARRE.
    calc.addEventListener('click', function () {
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;
        while ( index <= (number / 2) )
        {
            if ( number % index == 0 ) {
                pgcd = index;
                console.log("PGCD is processing", pgcd);
            }            else
            console.log(index);
        }
        index++;
        console.log("pgcd=", pgcd);


        // AFFICHER LE RESULTAT
        output.classList.remove('hide');
        document.getElementById("output").innerHTML = result;
    })