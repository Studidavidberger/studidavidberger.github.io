/*
* Exercice 1 : Ecrire un algorithme qui affiche
* la suite de Fibonacci.
*
* PSEUDOCODE EN JAVASCRIPT
*
* BEGIN
*
* Declarer les elements HTML :
* button

* Declarer les variables :
* 
* index = 0
* 
* number = 1
* number2 = 1
* 
* 
* clear console
* WHILE index is less than 100
*  {
*       number = number + number2
*       number2 = number2 + number
*   }
*   index = index + 1
*   PRINT = "iteration numero index, = number"
*
* * */
 
// Declarer les elements HTML
// button, button2, debug, calc.
const debug = document.getElementById('debug');
const calc = document.getElementById('calc');
const version = document.getElementById('version');

// Déclarer les variables number, index et result.
let number = 1;
let number2 = 1;
let index = 0;

// CALCULER LA SUITE DE FIBONACCI.
    calc.addEventListener('click', function () {
        // Afficher le repertoire
        document.getElementById('version').innerHTML = document.getElementById('script').src;

        while ( index <= 10 )
        {
            console.log("\nItération numero", index, "=", number, number2);
            number = number + number2;
            number2 = number + number2;
            index++;
        }
        
        // AFFICHER LE RESULTAT
        output.classList.remove('hide');
        document.getElementById("output").innerHTML = result;
    })
