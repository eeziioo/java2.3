// let box = document.querySelector('.box')
// let btn1 = document.querySelector('.btn1')
// let btn2 = document.querySelector('.btn2')

// let newdiv1 = document.createElement('div')
// newdiv1.textContent = box.number
// newdiv1.classList.add('red')
// box.appendChild(newdiv1)


// btn2.addEventListener("click", function() {
//     son.textContent = num+1
// });


// btn2.forEach(function (item)  {
//     son(++item)
// });

// function minus() {

//     document.querySelector('box').textContent = --son

// }

// function addplus() {
//     document.getElementById("son")
// }

// addplus()
// btn2.addEventListener('click', function () {
//     let newdiv = document.createElement('div')
//     newdiv.textContent = box.number + 1
//     newdiv.classList.add('red')
//     box.appendChild(newdiv)
// })

// btn2.addEventListener('click', function () {
//     if (btn2) {
//         son ++
//     }
// })



// function addminus() {
//     for (let i = 0; i < box.length; i--) {
//         son = array[i--];

//     }
// }

// addminus()

// function addplus() {
//     for (let i = 0; i < box.length; i++) {
//         son = array[i++];

//     }
// }
// addplus()

// function umar() {
//     if (btn1) {
//         --son
//     } else if (btn2) {
//         ++son
//     } else if (son < 0) {
//         alert('0 sonidan kichigiga sanamaydi')
//     }
// }

// umar()


const counter = document.getElementById("counter");


const increaseBtn = document.getElementById("increaseBtn");
increaseBtn.addEventListener("click", function() {
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;
});


const decreaseBtn = document.getElementById("decreaseBtn");
decreaseBtn.addEventListener("click", function() {
  let count = parseInt(counter.textContent);
  count--;
  counter.textContent = count;
});

for (let i = 0; i < counter.length; i++) {
  switch (decreaseBtn) {
    case 0:
        i++
        alert('0 dan uyog`iga sanamaydi')
        break;
}
  
}