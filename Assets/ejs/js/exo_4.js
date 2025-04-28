/*
*
* Exercice 4 afficher tous les nombres premiers
*
* START
*
* Declarer la variable number, index.
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
*       IF result mod 2 is not equal to 0
*            IF result mod 3 is not equal to 0
*               IF result mod 5 is not equal to 0
*                      PRINT index
*       
*       index = index + 1
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

// RECUPERER LA VALEURE DE LA VARIABLE
button.addEventListener('change', function () {
    number = document.getElementById('button').value;
    console.log("Tu viens d'ecrire", number);
    // Afficher le repertoire
    document.getElementById('version').innerHTML = document.getElementById('script').src;
})

// CALCULER TOUT LES NOMBRES PAIRS..
calc.addEventListener('click', function () {
    // Compter a partir de zero
    let index = 0;
    let place = 0;
    while ( index <= number ) {
            if ( index %2 !== 0 )
                if ( index %3 !== 0 )
                    if ( index %5 !== 0 )
                        {
                            place = place + 1;
                            console.log( index, "est le ", place, "eme nombre premier" );
                        }
        if ( index === 2 )
            console.log( "primes numbers= 2" )
        if ( index === 3 )
            console.log( "primes numbers= 3" )
        if ( index === 5 )
            console.log( "primes numbers= 5" )

        index = index + 1;

    }
})


debug.addEventListener('click', function () {
    console.log(`
        bouton = ${ button.value }
        ${typeof button }\n
        `)
})
