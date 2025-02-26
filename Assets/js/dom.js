console.log("DOM loaded!");

// Manipulation des classes
// element.classList.add('classe'); Ajouter une classe
// element.classList.remove('classe'); Supprimer une classe
// element.classList.toggle('classe'); Basculer une classe
// element.classList.contains('classe'); Verifier si une classe existe

//Creation et suppression d'element
// Document.creationElement('div'); Creer un nouvel element
//parent.appendChild(element); Ajoute un element enfant
//parent.removeChild(element); Supprime un element enfant
//element.remove(); Supprime un element

// EXercice
// 1) creer une fonction qui ajoute un nouvel element a la liste
// 2) ajouter un bouton de suppression a chaque element
// 3) implementer la suppression


// Modifier le texte d'un element
//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello World!";

// Creer un compteur
//let counter = 1;
//const number = document.getElementById("counter");
//number.onclick = function(){
//    counter++;
//    console.log(counter);
//}

const box = document.getElementById('box');
// Ajouter un evenement click qui basculera entre carré et rond
box.addEventListener('click', function () {
    if (box.classList.contains('carre')) {
        box.classList.remove('carre');
        box.classList.add('rond');
    } else {
        box.classList.remove('rond');
        box.classList.add('carre');
    }
})


const boutonAjout = document.getElementById('ajout');
const liste = document.getElementById('items');
let compteur = 1;

//1. fonction pour ajouter un nouvel element
function ajouterElement() {
    // Creer les elements
    const li = document.createElement('li')
    const texte = document.getElementById('span');
    const boutonSupprimer = document.createElement('button');

    // COnfigurer le contenu
    texte.textContent = `Element ${compteur}`;
    boutonSupprimer.textContent = 'Supprimer';

    // Ajouter du style
    li.style.display = 'flex'
    li.style.justifyContent = 'space-between';
    li.style.margin = '5px 0';
    boutonSupprimer.style.marginLeft = '10px';

    // 2. Ajouter bouton de suppression
    boutonSupprimer.onclick = function () {
        // Implementer la suppression
        li.remove();
        // liste.removeChild('li')
    }

    // Assembler et ajouter a la liste
    li.appendChild(texte);
    li.appendChild(boutonSupprimer);
    liste.appendChild(li);

    compteur++;
}
// Attacher l'evenement au bouton
boutonAjout.addEventListener('click', ajouterElement)
