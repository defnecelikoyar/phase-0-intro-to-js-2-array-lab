// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(ralph) {
    return cats.push("Ralph");
};

function destructivelyPrependCat(bob) {
    return cats.unshift("Bob");
};

function destructivelyRemoveLastCat(garfield) {
    return cats.pop();
};

function destructivelyRemoveFirstCat(milo) {
    return cats.shift();
};

function appendCat(broom) {
    return [...cats, "Broom"];
};

function prependCat(arnold) {
    return ["Arnold", ...cats];
};

function removeLastCat(garfield) {
    return cats.slice(0,2);
};

function removeFirstCat(milo) {
    return cats.slice(1);
};