// Variables
const bday = new Date(2021, 3, 1, 2,20,59);





// Input Handling
document.getElementById("Input").addEventListener("keyup", (event) =>
{
    if(event.key === 'Enter'){
        event.preventDefault();
        document.getElementById("enterButton").click();
    }
});

document.getElementById("enterButton").addEventListener("click", enterInput);
    
function enterInput() {
var jsUserInput = document.getElementById('Input').value;
    if (jsUserInput === ''){
        return;
    } 
    document.getElementById('Input').value = ('');
    var newNode = document.createElement("P");
    var textNode = document.createTextNode(jsUserInput);
    newNode.appendChild(textNode);
    document.getElementById("ribbonBox1").appendChild(newNode); 
    newNode = document.createElement("P");
    textNode = document.createTextNode(command(jsUserInput));
    newNode.appendChild(textNode);
    document.getElementById("ribbonBox1").appendChild(newNode);   
}

// Logic

function command(input){
    let command = input.toUpperCase();
    switch(command){
        case "WHAT IS YOUR BIRTHDAY?":
            return "My birthday is exactly " + bday;
            break;
        case "WHAT TIME IS IT?":
            var d = new Date();
            return `
            It is currently
            ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}.`;
            break;
        case "HOW ARE YOU?":
            return "I'm great! Thank you for asking.";
            break;
        case "YOUR GAY": 
        case "YOURE GAY": 
        case "YOU'RE GAY": 
        case "YOU'R GAY":
            return "Shut up Max.";
            break;
        default:
            return "I don't recognize that command, very sorry!";
            break;
    }
}

    
            
    
