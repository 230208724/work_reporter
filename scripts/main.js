//const jsPDF = require('jspdf')
//import { jsPDF } from './jspdf.umd.min.js';
alert('importing');
//let jsPDF;
//const html2pdf = require('html2pdf');


// set user
localStorage.clear();

let myHeading = document.querySelector('#hint');
let Heading = document.querySelector('.UserButton');

function setUserName() {
    let myName = prompt('input report name such as 李莹鑫-20230404: ');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName+'\'s WorkReport';
        Heading.textContent = myName;
    }
    }

if(!localStorage.getItem('name')) {//this item will be used to be the file's name
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName+'\'s WorkReport';
    Heading.textContent = myName;
}
alert('name set as '+localStorage.getItem('name'))

//response to user button
Heading.addEventListener("click", setUserName);

// response to delete button


//response to edit button
function createNewPage(module,moduleid,moduledes) {
    localStorage.setItem('curproject',module)
    localStorage.setItem('curprojectnumber',moduleid)
    localStorage.setItem('curprojectdes',moduledes)
    alert('cur project is '+localStorage.getItem('curproject'))
    window.open("./" + module + ".html"); 
  }

//response to image
let mos = document.querySelector('div');
let e = 0;

function addModule(alt) {
    e += 1;
    let des = prompt('input your description of module '+e.toString()+' '+alt);
    let mo = document.createElement('p');
    mo.setAttribute('class',alt);  
    mo.setAttribute('id',e.toString());
    mo.textContent = des + '\n';
    mos.appendChild(mo);  
    let edit = document.createElement('button');
    edit.setAttribute('class','EditButton');
    edit.setAttribute('id',e.toString());
    edit.textContent = 'edit';
    mos.appendChild(edit);
    edit.onclick = function(){
        createNewPage(alt,e.toString(),des)
    }
    let delet = document.createElement('button');
    delet.setAttribute('class','DeleteButton');
    delet.setAttribute('id',e.toString());
    delet.textContent = 'delete';
    mos.appendChild(delet);
    delet.onclick = function(){
        deleteElement(alt,e.toString(),des)
    }
}
alert('set div append rule')


let Images = document.querySelectorAll('.ModuleImage');

for(let i = 0; i < Images.length ; i++) {
    let imgalt = Images[i].getAttribute('alt');
    //let imgid = Images[i].getAttribute('id');
    Images[i].onclick = function(){
        addModule(imgalt);
    } 
}

  
// response to review buttons
let items = ['motivation','acomplishment','problem','course','todo'];
function reviewData() {    
    //alert('test on 1: ' + localStorage.getItem('1motivation'))
    const doc = new jsPDF(); // Create new PDF document // or var
    //alert('test on 2: ' + localStorage.getItem('2motivation'))
    for(let i = 0; i < e ; i++) {
        for(let j = 0; j<items.length; j++){
            k = i.toString() + items[j]
            v = sessionStorage.getItem(k)
            if (v){
                doc.text(k + " :\n" + v, 10, 10);
            }
        }     
    }   
    doc.save("./data.pdf"); // Download PDF
    window.close();
  }
// function reviewData() {    
//     alert('test ' + e.toString() + localStorage.getItem('1motivation'))
//     alert('test ' + e.toString() + localStorage.getItem('2motivation'))
//     const options = {
//         filename: 'google.pdf',
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//         margin: { top: 0.5, right: 0.5, bottom: 0.5, left: 0.5 },
//         enableLinks: true,
//         pageTitle: 'Google'
//     };
    
//     const element = document.getElementById('google');
    
//     html2pdf().from(element).set(options).save();    
// }
document.getElementById("ReviewButton").addEventListener("click", reviewData);


// response to export buttons




// // Function to show input page and hide original page
// function showInputPage() {
//     document.getElementById("write-button").style.display = "none";
//     document.getElementById("input-page").style.display = "block";
//   }
  
//   // Function to show review button and hide input page
//   function showReviewButton() {
//     document.getElementById("input-page").style.display = "none";
//     document.getElementById("review-button").style.display = "block";
//   }


// const form = document.querySelector('#key-value-form');
// const submitButton = document.querySelector('#submit-button');


//// Convert the key-value pairs to an array of HTML list items
// const keyValueListItems = Object.entries(keyValues).map(([key, value]) 

  