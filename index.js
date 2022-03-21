let number = document.getElementsByClassName("number");
let buttonOperation = document.getElementsByClassName("operation");
let result = document.getElementById("nb-result");
let reset = document.getElementById("reset");
let remove = document.getElementById("remove");
let operation = false;
let value = 0;
let typeOperation = false;
let lastOperator = false;
let total = document.getElementById("total");

for(let i = 0; i < number.length; i++)
{
    number[i].addEventListener("click", function(){
        if(result.innerHTML === "0"){result.innerHTML=""}
        if(operation)
        {
            value = result.innerHTML;
            result.innerHTML = "";
            operation = false;
            lastOperator = typeOperation;
        }
        result.innerHTML += this.innerHTML;
    });
}

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

reset.addEventListener("click",function(){
    result.innerHTML = "0";
    value = 0;
    operation = false;
    typeOperation = false;
    lastOperator = false;
});

remove.addEventListener("click",function(){
    if(result.innerHTML !== "0")
    {
        if(result.innerHTML.length > 1)
        {
            result.innerHTML =  result.innerHTML
            .replaceAt(result.innerHTML.length - 1,'');
        }
        else
        {
            result.innerHTML = "0";
            value = 0;
            operation = false;
            typeOperation = false;
            lastOperator = false;
        }
    }
});


// operation

for(let i = 0; i < buttonOperation.length; i++)
{
    buttonOperation[i].addEventListener("click", function(){
        operation = true;
        typeOperation = buttonOperation[i].innerHTML;
        if(value)
        {
            if(lastOperator === "+")
                result.innerHTML = Number(value) + Number(result.innerHTML);
            if(lastOperator === "-")
                result.innerHTML = Number(value) - Number(result.innerHTML);
            if(lastOperator === "x")
                result.innerHTML = Number(value) * Number(result.innerHTML);
            if(lastOperator === "÷")
                result.innerHTML = Number(value) / Number(result.innerHTML);
            value = 0;
        }
    });
}

total.addEventListener("click", function(){
    if(value)
    {
        operation = true;
        if(typeOperation === "+")
            result.innerHTML = Number(value) + Number(result.innerHTML);
        if(typeOperation === "-")
            result.innerHTML = Number(value) - Number(result.innerHTML);
        if(typeOperation === "x")
            result.innerHTML = Number(value) * Number(result.innerHTML);
        if(typeOperation === "÷")
            result.innerHTML = Number(value) / Number(result.innerHTML);
        value = 0;
    }
});