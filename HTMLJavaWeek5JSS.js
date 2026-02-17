let count = 0;


function tickUp() {
   count ++; 
   document.getElementById("counter").textContent = count; 
}


function tickDown() {
    count --;
    document.getElementById("counter").textContent = count;
}


function runForLoop() {
    let out = "";
    
    for (let i = 0 ; i <= count ; i ++) {
        out += i + " ";
    }
    
    document.getElementById('forLoopResult').textContent = out.trim();
}


function showOddNumbers() {
    let out = "";
    
    for (let i = 0 ; i <= count ; i ++) {
        if (i % 2 == 1) {
            out += i + " ";
        }
    }
    document.getElementById('oddNumberResult').textContent = out.trim();
}


function addMultiplesToArray() {
    let array = [];
    
    for (let i = count ; i > 0 ; i --) {
        if (i % 5 == 0) {
            array.push(i);
        }
    }
    
    console.log(array);   
}


function printCarObject() {
    let car = {type: document.getElementById("carType").value, 
    mpg: document.getElementById("carMPG").value, 
    color: document.getElementById("carColor").value};
    console.log(car);
}


function loadCar(num) {
    
    if (num == 1) {
        car = carObject1;
    }
    
    if (num == 2) {
        car = carObject2;
    }
    
    if (num == 3) {
        car = carObject3;
    }
    
    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
    
}


function changeColor(num) {
    
    let p = document.getElementById("styleParagraph");
    
    if (num == 1) {
        p.style.color = "red";
    }
    
    if (num == 2) {
        p.style.color = "green";
    }
    
    if (num == 3) {
        p.style.color = "blue";
    }
    
}


