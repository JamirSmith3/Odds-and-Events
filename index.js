// TODO: this file! :)

const numBankArr = [];
const numOddArr = [];
const numEvenArr = [];

const output = document.querySelector("#numberBank output");
const outputEven = document.querySelector("#sortedNumbers #evens output");
const outputOdds = document.querySelector("#sortedNumbers #odds output");

const print = () => {
  output.innerHTML = numBankArr;
};

const Evens = () => {
  outputEven.innerHTML = numEvenArr;
};

const Odds = () => {
  outputOdds.innerHTML = numOddArr;
};

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  if (data.get("number") !== "") {
    numBankArr.push(data.get("number"));

    print();

    number.value = "";
  }
});

const isOdd = (number) => {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
};

const sortOneNumBtn = document.querySelector("#numberBank #sortOne");
sortOneNumBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (numBankArr.length !== 0) {
    const currentNumber = numBankArr.shift();
    if (isOdd(currentNumber)) {
      numOddArr.push(currentNumber);

      Odds();

      print();
    } else {
      numEvenArr.push(currentNumber);

      Evens();

      print();
    }
  }
});

const sortAllNumBtn = document.querySelector("#numberBank #sortAll");
sortAllNumBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const numBankArrLength = numBankArr.length;

  for (let i = 0; i < numBankArrLength; i++) {
    console.log(numBankArr.length);
    const currentNumber = numBankArr.shift();

    if (isOdd(currentNumber)) {
      numOddArr.push(currentNumber);
      Odds();
      print();
    } else {
      numEvenArr.push(currentNumber);
      Evens();
      print();
    }
  }
});
