/* example
let myHeading = document.querySelector('h1');
if (myHeading.textContent === 'Hello world!') {
  alert('测试阶段');
} else {
  alert(myHeading.textContent);
}
*/


/*
document.querySelector('html').addEventListener('click', () => {
    alert('click 测试');
  });
 */

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    let myAlt = myImage.getAttribute('alt');
    let myCls = myImage.getAttribute('class');
    if(mySrc.endsWith('.png')){
        alert(myCls + myAlt);
        myImage.setAttribute('src', 'images/icon.jpg');
        
    } else {
        alert('iclass 测试');
    }
} 
 
let myHeading = document.querySelector('h5');
function setUserName() {
let myName = prompt('User: ');
if(!myName) {
    setUserName();
} else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Dear ' + myName;
}
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dear ' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
 }


  