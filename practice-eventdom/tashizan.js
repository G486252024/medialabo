function greeting() {
let i = document.querySelector('input[name="left"]');
left = i.value;
n = Number(left);
let j = document.querySelector('input[name="right"]');
right = j.value;
m = Number(right);
let p = document.querySelector('span#answer');
p.textContent = n+m;
}

let b = document.querySelector('button#calc');
b.addEventListener('click', greeting); 