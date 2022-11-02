const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(catName) {
    return cats.push(catName);
};
destructivelyAppendCat('Ralph');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyPrependCat(catName) {
    return cats.unshift(catName);
};
destructivelyPrependCat('Bob');

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
  };
  destructivelyRemoveLastCat();

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  };

  destructivelyRemoveFirstCat();

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function appendCat(catName) {
    const allCats = [...cats, catName];
    return allCats;
  };
  appendCat('Broom');

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function prependCat(catName) {
    const moreCats = [catName, ...cats];
    return moreCats;
  };
  prependCat('Arnold');

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeLastCat() {
    const wowCats = cats.slice(0, cats.length - 1);
    return wowCats;
  };
  removeLastCat();

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeFirstCat() {
    const holyFuckCats = cats.slice(1);
    return holyFuckCats; 
  };
  removeFirstCat();