let x = 1;
let y = 4;
let z = -1;

let condition1 = document.getElementById("condition1");
    if (x < 2) {
        condition1.innerHTML = "x est plus petit que 2";
    }
    else {
        condition1.innerHTML = "x est supérieur ou égal à 2";
    }

let condition2 = document.getElementById("condition2");
    if (y > 3) {
        condition2.innerHTML = "y est plus grand que 3";
    }
    else {
        condition2.innerHTML = "y est inférieur ou égal à 3";
    }

let condition3 = document.getElementById("condition3");
    if (z <= 0) {
        condition3.innerHTML = "z est inférieur ou égal à zéro";
    }
    else {
        condition3.innerHTML = "z est supérieur à zéro";
    }

let condition4 = document.getElementById("condition4");
    if ((x < 2 && y > 3) || (z <= 0)) {
        condition4.innerHTML = "les 3 conditions sont vraies";
    }
    else {
        condition4.innerHTML = "l'une des conditions x ou y est fausse ou z est plus grand que 0";
    }

let condition5 = document.getElementById("condition5");
    if ((x < 2 && y > 3) || (z === -1)) {
        condition5.innerHTML = "les conditions x et y sont vraies ou z est strictement égal à -1";
    }
    else {
        condition5.innerHTML = "x ou y est fausse ou z n'est strictement pas égal à -1";
    }