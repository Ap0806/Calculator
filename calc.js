let operation = {isSubmit: false, changeDisplay:true, Operand1: 0, Operand2: 0, Operation: " "};
//isSubmit - to check if the equal button has been clicked
//changeDisplay - if the value has been calculated - then change the display setting
let x = document.getElementById("output")
p.innerHTML = " ";
function pushNumb(b){
    if(operation.changeDisplay == true){
        x.value = "";
        operation.changeDisplay = false;
    }
    if(typeof b != "number"){
        operation.Operation = b; 
        operation.isSubmit = true;
    }
    else if(operation.isSubmit == false){               
        operation.Operand1 = (operation.Operand1*10)+ b;              
    }
    else{
        operation.Operand2 = (operation.Operand2*10) + b;
    }
    x.value = x.value + b;
}
function calculate(){
    //addition
    if(operation.Operation == "+"){
        document.getElementById("temp").innerHTML = x.value + " = " +
        (operation.Operand1 + operation.Operand2);
        x.value = operation.Operand1 + operation.Operand2;
    }
    //subtraction
    if(operation.Operation == "-"){
        document.getElementById("temp").innerHTML = x.value+ " = " +
        (operation.Operand1 - operation.Operand2);
        x.value = operation.Operand1 - operation.Operand2;
    }
    //multiplication
    if(operation.Operation == "*"){
        document.getElementById("temp").innerHTML = x.value+ " = " +
        (operation.Operand1 * operation.Operand2);
        x.value = operation.Operand1 * operation.Operand2;
    }
    //division
    if(operation.Operation == "/"){
        document.getElementById("temp").innerHTML = x.value+ " = " +
        (operation.Operand1 / operation.Operand2);
        x.value = operation.Operand1 / operation.Operand2;
    }
    operation.isSubmit = false;
    operation.changeDisplay = true;
    operation.Operand1 = 0;
    operation.Operand2 = 0;
}

//using the arrow notation for functions
let clearFields = _ => {
    x.value = "";
    document.getElementById("temp").innerHTML = ""; 
    operation.Operand1 = 0;
    operation.Operand2 = 0;
    operation.changeDisplay = true;
    operation.isSubmit = false;
}