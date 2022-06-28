//each button need to hold a number
// You can keep adding the numbers like a string so hitting 1 three times would be 111
// Hitting the operator buttons would make the next buttons add with the first
// Would most likely have convert the strings to number and then add them
let one = document.querySelector('.one')
let textDisplay = document.querySelector('.total')
let displayTotal = '';
let displayTotal2 = '';
let whichSide = 1;
let operatorSelect;

//Making each button take a number as a string and adds them
function numEvent(buttonNum, numb){
    document.querySelector('.'+ buttonNum).addEventListener('click', function(){
        if(whichSide == 1){
        displayTotal += numb;
        document.querySelector('.total').textContent = displayTotal;
        }
        else if(whichSide == 2){
            displayTotal2 += numb;
            document.querySelector('.total').textContent = displayTotal2;
            document.querySelector('.total').textContent = displayTotal + " " + oper + " " + displayTotal2;
        }
        })
}
function operatorEvent(buttonOper, opNum, oper){
document.querySelector("." + buttonOper).addEventListener('click', function(){
    whichSide = 2;
    operatorSelect = opNum;
    document.querySelector('.total').textContent = displayTotal + " " + oper + " ";

})
}
numEvent("one", "1");
numEvent('two', '2');
numEvent('three','3');
numEvent('four','4');
numEvent('five','5');
numEvent('six','6');
numEvent('seven','7');
numEvent('eight','8');
numEvent('nine','9'); 
numEvent('zero', '0')

operatorEvent("add", 1 ,"+");
operatorEvent("minus", 2 ,"-");
operatorEvent("multiply", 3 ,"*");
operatorEvent("divide", 4 ,"/");


