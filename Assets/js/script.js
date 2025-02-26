/* Exercice 1 : Ecrire un algorithme qui demande à l'utilisateur de saisir un nombre 
                         et qui affiche son carré    /

// MON PSEUDO CODE DAVID BERGER
* initier a zero le premeir nombre
* initier a zero le deuxieme nombre
* 
* verifier quel operation est a calculer
* 
* recuperer l'element du premier nombre
* recuperer l'element du deuxieme nombre
* 
* appliquer la valeure aux deux variable lors 
* de l'evement click
* 
* faire le calcul
* 
* faire apparaitre un element resultat avec le resultat
* * */


// recupere la checkbox
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const power = document.getElementById('power');

// Decocher toutes les checkbocses
multiply.checked = false
divide.checked = false
plus.checked = false
minus.checked = false
power.checked = false

// recuperer l'etat des checkbocses
let multiply_var = multiply.checked;
let divide_var = divide.checked;
let minus_var = minus.checked;
let plus_var = plus.checked;
let power_var = power.checked;

// initier a zero les deux nombres de l'utilisateur
let mario = 0;
let luigi = 0;
let _result = 0;

// recuperer les textarea
const bowser = document.getElementById('mario');
const peach = document.getElementById('luigi');

// recuperer l'element resultat.
const _toad = document.getElementById('toad');

// Ecoute les changement d'etats TRUE ou FALSE de chaque checkbox.
// CHECKBOX MULLTPLIER
multiply.addEventListener('change', function () {
    multiply_var = multiply.checked;

    // Afficher le changement d'état.
    console.log("multiplier=", multiply_var);
})

// CHECKBOX DIVISER
divide.addEventListener('change', function () {
    divide_var = divide.checked;

    // Afficher le changement d'état.
    console.log("diviser=", divide_var);
})

// CHECKBOX ADDITIONNER
plus.addEventListener('change', function () {
    plus_var = plus.checked;

    // Afficher le changement d'état.
    console.log("additionner=", plus_var);
})

// CHECKBOX SOUSTRAIRE
minus.addEventListener('change', function () {
    minus_var = minus.checked;

    // Afficher le changement d'état.
    console.log("soustraire=", minus_var);
})

// CHECKBOX AU CARRE
power.addEventListener('change', function () {
    power_var = power.checked;

    // Afficher le changement d'état.
    console.log("au carré", power_var);
})

// recuperer les deux valeures donnée par l'utilisateur
bowser.addEventListener('change', function () {
    mario = document.getElementById('mario').value;
    console.log("Tu viens d'ecrire", mario);
})
peach.addEventListener('change', function () {
    luigi = document.getElementById('luigi').value;
    console.log("Tu viens d'ecrire", luigi);
})

// Faire le calcul choisi par l'utilisateur d'apres
// les nombres choisi ains que l'operation
const math = document.getElementById('dodamathbutton');
math.addEventListener('click', function () {
    
    // Verifier quelle operation a ete choisie par l'utilisateur
    
    if (multiply.checked)
    {
        _result = mario * luigi;
        console.log("resultat = ", _result);
    }
    
    if(divide.checked)
    {
        _result = mario / luigi;
        console.log("resultat = ", _result);
    }
    
    if(plus.checked)
    {
        _result = mario + luigi;
        console.log("resultat = ", _result);
    }
    
    if(minus.checked)
    {
        _result = mario - luigi;
        console.log("resultat = ", _result);
    }
    
    if(power.checked)
    {
        _result = mario * mario;
        console.log("resultat = ", _result);
    }
    


    // Derniere etape Afficher le resultat
    // Faire apparaitre l'element div en changeant la classe
    _toad.classList.remove('hide');
    document.getElementById("toad").innerHTML=_result;
})

// Afficher l'entiereté des variables
const click_here = document.getElementById('click_here');
click_here.addEventListener('click', function () {
    console.log("multiplier=", multiply_var);
    console.log("diviser=", divide_var);
    console.log("additionner=", plus_var);
    console.log("soustraire=", minus_var);
    console.log("monter a la muissance de=", power_var);
    console.log("1er nombre = ", mario);
    console.log("2eme nombre = ", luigi);
    console.log("resultat = ", _result);
})
