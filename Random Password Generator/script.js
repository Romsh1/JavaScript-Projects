// Romika Chaudhary
// Feb 27, 2024
// Day - 25 of Learning JS - Random password generator

let button = document.querySelector(".gen_btn");
let password_gen = document.querySelector(".userInput");

button.addEventListener('click', () => {
        password_gen.value = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (i = 1; i <= 6; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            password_gen.value += str.charAt(char)
        }
        return password_gen.value;
}); 