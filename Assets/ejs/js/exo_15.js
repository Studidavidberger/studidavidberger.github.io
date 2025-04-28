/*
* Écrire un algorithme qui affiche
*  sa suite de Syracuse jusqu'à ce nombre
*
* PSEUDOCODE EN JAVASCRIPT
*
* BEGIN
*
* Declarer les elements HTML :
* button, debug et output
*
* Declare les variables :
* number, index et result
*
* number = INPUT num "Entrez votre nombre"
* index = 0
*
* WHILE index is less or equal to 50
*  {
*   IF number mod 2 equal 0, 2, 4, 6, ou 8
*       number = number / 2
*   } else {
*       number = ( number * 3 ) + 1
*   }
*   PRINT = "iteration numero index"
*   PRINT = "number"
*
*
* OUTPUT number
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
let result = 0;
let index = 0;
    
// RECUPERER LA VALEURE DE LA VARIABLE
    button.addEventListener('change', function () {
        number = document.getElementById('button').value;
        console.log("Tu viens d'ecrire", number);
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;
    })
    
// CALCULER LA SUITE DE SYRACUSE.
    calc.addEventListener('click', function () {
        console.clear();
        while ( number !== 1 )
        {
            console.log( "\n tération numero ", index, number );
            // SI LE NOMBRE EST PAIR
            if ( number % 2 == 0 )
                number = number / 2;
            // SI LE NOMBRE EST IMPAIR
            else
                number = ( number * 3 ) + 1;
            index = index + 1;

        }

        // AFFICHER LE RESULTAT
        output.classList.remove('hide');
        document.getElementById("output").innerHTML = result;
})
