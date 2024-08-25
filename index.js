const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let _1st_value = "";
let _2nd_value = "";
let _operator = "";

function isNumber(n){
    let return_value = false;
    let pos = display.innerText.indexOf(".")
    if(!isNaN(n) || n == "."){
        return_value = true;
        if (pos >= 0 && n == "."){
            return_value = false;
        }
    }
    return return_value;
    
};
buttons.addEventListener("click", function(e){
    let text_value = e.target.innerText;

    if (isNumber(text_value)){
        if(display.innerText == "0"){
            display.innerText ="";
        }
        if(_operator !== "" && display.innerText == _1st_value){
            display.innerText = "";
        }
    
        display.innerText = display.innerText + text_value;
    }
    switch(text_value){
        case "AC":
            clearCal();
        break;
        case "+": 
        case "-":
        case "/":
        case "*":
        case "%":
            set1stValue();
            operator(text_value);
        break;
        case "=":
            evaluate();
            break;
            default:
            break;
        

    }
});
function evaluate(){
     _2nd_value = display.innerText;
    let atri = _1st_value + _operator + _2nd_value;
    display.innerText = eval(atri);

    _1st_value = display.innerText;
    _operator = "";
    _2nd_value = "";

}
function set1stValue(){
    _1st_value = display.innerText;
}
function operator(opt){
    _operator =   opt ;
}
function clearCal(){
    display.innerText = "0";
    _1st_value = "";
    _operator = "";
    _2nd_value = "";
}