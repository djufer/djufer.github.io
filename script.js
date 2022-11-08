// --------------------------------  Завдання 1 -------------------------------------

// let square = document.getElementById("square");
// square.style.backgroundColor = "purple";

// square.addEventListener("mouseout", function () {
//     square.style.backgroundColor = "purple";
// });

// let arrColors = ["red", "yellow", "green"];

// let i = 0;
// while (i < 3) {
//     square.addEventListener("mouseover", function () {
//         square.style.backgroundColor = arrColors[i];
//         i++;
//         if (i == 3) {
//             i = 0;
//         }
//     });
//     break;
// }

// ----------------------------------  Завдання 2  ----------------------------------

// let square = document.getElementById('square');
// square.style.backgroundColor = 'purple';
// square.style.color = 'white';
// square.textContent = 'У мене є секрет';
// square.addEventListener('mouseover', function () {
//     square.textContent = "Хочеш знати який?";
//     square.style.backgroundColor = 'yellow'
//     square.style.color = 'black'
// })
// square.addEventListener('mousedown', function () {
//     square.textContent = 'А я тобі не скажу!';
//     square.style.backgroundColor = 'black';
//     square.style.color = 'white';
// })
// square.addEventListener('mouseup', function () {
//     square.textContent = "Хочеш знати який?";
//     square.style.backgroundColor = "yellow";
//     square.style.color = "black";
// })
// square.addEventListener('mouseout', function () {
//     square.textContent = "У мене є секрет";
//     square.style.backgroundColor = "purple";
//     square.style.color = "white";
// })

// ----------------------------------  Завдання 3  ----------------------------------

// let blocks = document.querySelectorAll(".img");
// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].addEventListener("click", function () {
//         let adress = prompt("Введіть посилання на картинку");
//         this.style.backgroundImage = `url(${adress})`;
//     });
// }

// ----------------------------------  Завдання 4   ----------------------------------

// let arr = document.getElementsByTagName("li");
// for (const elem of arr) {
//     elem.addEventListener("click", function () {
//         this.classList.add(this.textContent);
//     });
// }

