var numberElement = document.getElementById("numberElement");
var number = 0;

for (var i = 0; i < 100; i++) {
  number += 1;

  if (number %3 == 0 && number %5 != 0) {
    numberElement.innerHTML += "Fizz " + "<br>";
  } else if (number %3 != 0 && number %5 == 0) {
    numberElement.innerHTML += "Buzz " + "<br>";
  } else if (number %3 == 0 && number %5 == 0) {
    numberElement.innerHTML += "FizzBuzz " + "<br>";
  } else {
    numberElement.innerHTML += number + "<br>";
  }
}
