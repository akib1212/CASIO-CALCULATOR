
let string = '';
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            // Replace × and ÷ with * and / before evaluating the string
            string = string.replace('×', '*').replace('÷', '/');
            string = eval(string);
            document.querySelector('input').value = string;

        } else if (e.target.innerHTML == 'AC') {
            string = '';
            document.querySelector('input').value = string;

        } else {
            // Show × and ÷ on the display but internally store * and /
            if (e.target.innerHTML == '×') {
                string = string + '×';  // Display ×
            } else if (e.target.innerHTML == '÷') {
                string = string + '÷';  // Display ÷
            } else {
                string = string + e.target.innerHTML;
            }
            document.querySelector('input').value = string;  // Update the display with × and ÷
        }
    });
});
