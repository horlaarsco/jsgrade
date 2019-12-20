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

window.addEventListener('load', function() {
    const body = document.querySelector('body');
    let scoreVariable = document.querySelector('h1');
    let button = document.querySelector('button')


    button.addEventListener('click', () =>{
        let x = document.getElementById("score").value;
        if (x > 100 || x<0){
            scoreVariable.textContent = 'Wrong Entry Score should be between 0 - 100'
        }else if (x > 74){
            scoreVariable.textContent = 'A1'
        }else if (x > 69){
            scoreVariable.textContent = 'A2'
        }else if (x > 64){
            scoreVariable.textContent = 'B1'
        }else if (x > 59){
            scoreVariable.textContent = 'B2'
        }else if (x > 54){
            scoreVariable.textContent = 'C1'
        }else if (x > 49){
            scoreVariable.textContent = 'C2'
        }else if (x > 44){
            scoreVariable.textContent = 'D1'
        }else if (x > 39){
            scoreVariable.textContent = 'D2'
        }else {
            scoreVariable.textContent = 'F9 OTI FAIL'
        }
    })
})