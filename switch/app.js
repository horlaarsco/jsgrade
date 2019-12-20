// Score	Letter Grade	Grade Point
// 75-100	A1	4.00
// 70-74	A2	3.50
// 65-69	B1	3.25
// 60-64	B2	3.00
// 55-59	C1	2.75
// 50-54	C2	2.50
// 45-49	D1	2.25
// 40-44	D2	2.00
// 0-39	F	0.00

window.addEventListener("load", function() {
  const body = document.querySelector("body");
  let scoreVariable = document.querySelector("h1");
  let button = document.querySelector("button");

  button.addEventListener("click", () => {
    var x = parseInt(document.getElementById("score").value);
    switch (true) {
      case (x > 100 || x<0):
        scoreVariable.textContent =
          "Wrong Entry Score should be between 0 - 100";
        break;
      case (x > 74):
        scoreVariable.textContent = 'A1'
        break;
      case (x > 69):
        scoreVariable.textContent = 'A2'
        break;
      case (x > 64):
        scoreVariable.textContent = 'B1'
        break;
        case (x > 59):
        scoreVariable.textContent = 'B2'
        break;
        case (x > 54):
        scoreVariable.textContent = 'C1'
        break;
        case (x > 49):
        scoreVariable.textContent = 'C2'
        break;
        case (x > 44):
        scoreVariable.textContent = 'D1'
        break;
        case (x > 39):
        scoreVariable.textContent = 'D2'
        break;
        case (x > 0):
        scoreVariable.textContent = 'F9 OTI FAIL'
        break;
    }
  });
});
