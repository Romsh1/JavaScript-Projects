// Romika Chaudhary
// Feb 18, 2024
// Day 15


const btn = document.getElementById('submit');
btn.addEventListener('click', () => {
    const addItems = document.getElementById('items');
    const msg = document.getElementById('result');
    msg.innerHTML = addItems.value;

    // let count = 1;
    // for (count = 1; count <= addItems.count; count++){
    //     msg.innerHTML = addItems.value;

    // }


    //Displaying message using backticks
    msg.innerHTML = `You have added ${addItems.value} to your list.`;
    console.log(addItems.value);

});