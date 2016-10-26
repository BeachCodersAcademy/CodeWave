// $(function() {


let btnClicked = false;

let savedText = document.querySelector('.comp').textContent;


function btnClick() {
  
  if (!btnClicked) {
    
    // let target = document.querySelector('#target');
    
    // console.log(target.style);
    
    // console.log(target.style.border);
    
    //   target.style.color = 'olivedrab';
    
    //   target.style.backgroundColor = 'darkslateblue';
    
    //   target.style.marginTop = '100px';
    
    let comp = document.querySelector('.comp');
    
    console.log(comp.textContent);
    
    // comp.textContent = 'Haha! I changed it dynamically!';
    
    let header = '<h1>Hahahahhaha!</h1>';
    
    let body = '<p>Lorem ipsum dolor amit dea.</p>';
    
    // comp.innerHTML = comp.innerHTML + header + body;
    comp.innerHTML += header + body;
    
    comp.style.backgroundColor = 'lightblue';
    
    btnClicked = true;
    
  } else {
    
    // var list = document.getElementById("myList");   
    let comp = document.querySelector('.comp');
    
    let childNodes = comp.childNodes;
    
    console.log(childNodes);
        
    // list.removeChild(list.childNodes[0]);  
    comp.removeChild(childNodes[2]);
    comp.removeChild(childNodes[3]);
    
    comp.style.backgroundColor = 'white';
    
    
    btnClicked = false;
    
  }
  
}

function btnPretty() {
  
  let comp = document.querySelector('.comp');
  
  console.log(comp.classList);
  
  let className = 'pretty';
  
  if (comp.classList) {
    comp.classList.add(className);
  } else {
    comp.className += ' ' + className;
  }
  
}

// });