let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll
('button')

let string ="";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;

        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
        input.value= string;

        }

        
    })
})
function percentage_1() {
  
    // Method returns the element of percent id
    var percent = document.getElementById("percent").value;
      
    // Method returns the element of num id
    var num = document.getElementById("num").value;
    document.getElementById("value1")
        .value = (num / 100) * percent;
}

function percentage_2() {
  
    // Method returns the element of num1 id
    var num1 = document.getElementById("num1").value;
      
    // Method returns the elements of num2 id
    var num2 = document.getElementById("num2").value;
    document.getElementById("value2")
            .value = (num1 * 100) / num2 + "%";
}