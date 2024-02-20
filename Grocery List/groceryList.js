// Romika Chaudhary
// Feb 18, 2024
// Day 15

let myForm = document.querySelector("form");
let items = document.getElementById("items");
let result = document.getElementById("result");
let btn = document.getElementById("submit");

let data = {};

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (items.value === ""){
        alert("Items can not be blank");
        console.log("failure");
    } else {
        // console.log("success");
        // result.innerHTML = "";
        acceptData();
    }
};

let acceptData = () => {
    addItems();
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    items.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let addItems = () => {
    result.innerHTML += `
    <div>
        <p>${items.value}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    items.value = "";
};


// const btn = document.getElementById('submit');
// btn.addEventListener('click', () => {
//     const addItems = document.getElementById('items');
//     const msg = document.getElementById('result');
//     msg.innerHTML += addItems.value;

//     // let count = 1;
//     // for (count = 1; count <= addItems.count; count++){
//     //     msg.innerHTML = addItems.value;

//     // }


//     //Displaying message using backticks
//     // msg.innerHTML = `You have added ${addItems.value} to your list.`;
//     console.log(addItems.value);

// });