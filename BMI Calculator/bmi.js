// // Romika Chaudhary
// // BMI Calculator: Day-13
// // Feb 16, 2024

let button = document.getElementById('btn');
button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status = false, wieght_status = false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (weight === '' || isNaN(weight) || (weight <=0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if (bmi < 18.6){
            result.innerHTML = 'Under weight: ' + bmi;
        }
        else if (bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal: ' + bmi;
        }
        else{
            result.innerHTML = 'Over weight: ' + bmi;
        }

    } else {
        alert('The form has error');
        result.innerHTML = '';
    }
});





// window.onload = () => {
//     let button = document.querySelector("#submit");
//     button.addEventListener("click", calculateBMI);
// }

// function calculateBMI() {
//     let height = parseInt(document.querySelector("height").value);
//     let weight = parseInt(document.querySelector("#weight").value);
//     let result = document.querySelector("#result");

//     if (height === "" || isNan(height))
//         result.innerHTML = "Provide a valid height";
    
//     else if (weight === "" || isNaN(weight))
//         result.innerHTML = "Provide a valid weight";
//     else {
//         let bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         if (bmi < 18.6) result.innerHTML =
//             `Under Weight : <span>${bmi}</span>`;
 
//         else if (bmi >= 18.6 && bmi < 24.9) 
//             result.innerHTML = 
//                 `Normal : <span>${bmi}</span>`;
 
//         else result.innerHTML =
//             `Over Weight : <span>${bmi}</span>`;
//     }
// }

// // const btnBmi = document.querySelector("submit");
// // btnBmi.addEventListener("click", 
// //     result = () => {
// //         console.log("clicked");
// //     });

// // const weight = document.getElementById("weight");
// // const inputValue = weight.value;
// // console.log(inputValue);

// // const feet = document.getElementById("ft");
// // const inputValue2 = feet.value;
// // console.log(inputValue2);

// // const inch = document.getElementById("inch");
// // const inputValue3 = feet.value;
// // console.log(inputValue3);

// // document.getElementById("container").addEventListener("submit", function(event){
// //     event.preventDefault();
// //     let bodyWeight = document.getElementById("weight").value;
// //     alert("Hello! Your weight is "+ bodyWeight);
// // });
