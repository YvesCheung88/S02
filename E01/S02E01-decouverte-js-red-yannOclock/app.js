// Ceci est mon premier commentaire sur une ligne en JavaScript
/*
On peut également écrire de commentaires sur plusieurs lignes
comme on le ferais en CSS par exemple.
Que ce soit les /* ou les //, ce sont des caractères de commentaires assez courants dans les languages de programmation, par exemple en PHP c'est strictement les mêmes caractères.
*/
// On se sert de ces commentaires pour plusieurs choses.
/*
- Baliser un code : c'est à dire définir des étapes de contruction ou de logique. Ils vont éider a organiser et comprendre le structure du code.
- laisser des explications : En cas d'instruction complexe, cela permet de donner plus de sens à elle celle-ci.
- annoter une intention : C'est utile pour faire ce que l'on appel du pseudo-code. C'est à dire écrir en français (par exemple) le tâche que voulez exécuter ensuite en language informatique. Mais cela peut-être également le faite de laisser une note de chose à faire, ou améliorer, plus tard (TODO)
*/

/*
Un code informatique est diviser en plusieurs instruction.
En JavaScript chaque instruction est divisé par un ; et/ou un retour à la ligne.
*/ 

// 1 - Déclaration - let est le mot clé qui permet de créer une variable qui restera modifiable à l'avenir (let : laissé le carton ouvert)
// 2 - Nommage (En anglais la plupart du temps et de façon explicite, mieux vaut un nom long qu'un court incompréhensible) - le nom de la variable, le nom que l'on ecris sur l'etiquette du carton
// 3 - Assignation (optionnelle) - = est le signe qui sert à assigner quelque chose à la varibale, ce que l'on va mettre dans le carton.
// 4 la valeur de du quelquechose que l'on met dans le carton.
let age = 33;

// C'est le même principe que l'instruction précédente mais ici on décide de fermer le carton, c'est à dire que l'on pourra pas modifier la valeur contenu dans cette variable. Cette variable est et sera constante.
const userName = "John";


// Par défaut on utilisera toujours const. On n'utilisera let que dans les cas ou la valeurs devra évoluée.

// Si on a utilser let pour déclarer la variable on peut reassigner (modifier) la valeur de celle-ci. On ne devra pas la redéclaré, juste assigner de nouveau une valeur pour la faire évoluer
age = 34;
// ! Attention on ne doit jamais assigner une valeur sans l'avoir précédement déclarer avec let.


// Afin d'afficher une information dans la console du navigateur je peux utiliser console.log
console.log(age);

// On utilisera toujours le ; car si dans une occasion ou une autre 2 instructions se retrouvaient sur la même ligne il n'y aurait de bug.
let ageChildren = 8;let size = 132;
// Si je désire affiché plusieurs informations avec le console log, je peux séparer chaque information par une virgule
console.log(ageChildren,size);

/*
Les valeurs que l'on peut assigner a une variable peuvent être de différents type:
1 - les nombres (Number) qui sont soit des entiers soit des nombres décimaux
2 - les chaînes de caractères ou texte (String) qui sont n'importe quelles caractères, y compris les nombres, à l'intérieur de guillements (simple ou double)
3 - Les booléens qui n'on que 2 valeurs différents :  vrai ou faux (true, false). On peut les comparer à un interrupteur.
*/

// On peut effectuer différentes opération sur les valeurs en faonction de leur type

// Avec les nombres on peut utiliser tous les opérateurs mathématique possibles et d'autre opérateurs plus complexes qui nécessite des cependant des outils particulier que l'on verra plus tard.

const price = 100;
const tax = 20;
// Un variable constante, si sa valeur n'est pas modifiable, elle tout de même récupérable, c'est à dire qu'on l'utilisé pour exécuter d'autes instructions
// Ici on decide d'utiliser les valeurs des 2 variable afin de stocker le résultat de leur addition dans une nouvelle variable.
const total = price + tax;

// Avec les chaînes de caratères on peut en concténer plusieurs ensemble et effectuer d'auters opérations complexe également que l'on verra plus tard

let userAge = prompt("As tu l'âge pour entrer dans le site ? ")
 
if (userAge >= 17 ) {
    alert("Bienvenue sur le site")
}
else {
    alert("Désolé vous n'avez pas l'âge requis ")
}
