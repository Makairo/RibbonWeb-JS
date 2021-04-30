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
    createUserNode(jsUserInput);
    command(jsUserInput);  
}

// Logic

function command(input){
    let command = input.toUpperCase();

    if(command.includes("HELP")){
        createRibbonNode('Current commands include:');
        createRibbonNode('-What is your birthday?');
        createRibbonNode('-What time is it?');
        createRibbonNode('-How are you?');
        createRibbonNode('-What\'s in progress?');
        return;
    }

    switch(command){
        case "WHAT IS YOUR BIRTHDAY?":
            createRibbonNode("My birthday is exactly " + bday);
            //return "My birthday is exactly " + bday;
            break;
        case "WHAT TIME IS IT?":
            var d = new Date();
            createRibbonNode(`
                It is currently
                ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.`
            );
            //return `
            //It is currently
            //${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}.`;
            break;
        case "HOW ARE YOU?":
        case "HOW ARE YOU":
            createRibbonNode("I'm great! Thank you for asking.");
            //return "I'm great! Thank you for asking.";
            break;
        case "WHAT'S IN PROGRESS?":
        case "WHATS IN PROGRESS?":
        case "WHAT'S IN PROGRESS":
        case "WHATS IN PROGRESS":
            createRibbonNode("Currently, I'm being formatted to handle simple encrpytion and decryption tasks. To view work and progress please visit: https://github.com/Makairo");
            createRibbonNode("Additionally, the website made to host me is to be tied with ASP.NET so I can remember who I speak with!");
            break;

        case "YOUR GAY": 
        case "YOURE GAY": 
        case "YOU'RE GAY": 
        case "YOU'R GAY":
            createRibbonNode("Shut up Max.");
            //return "Shut up Max.";
            break;
        default:
            createRibbonNode("I don't recognize that command, try \"help\" to view current commands!");
            //eturn "I don't recognize that command, try \"help\" to view current commands!";
            break;
    }
}

function createRibbonNode(input){
    let newNode = document.createElement("P");
    let textNode = document.createTextNode(input);
    newNode.appendChild(textNode);
    newNode.className += "rText";
    document.getElementById("ribbonBox1").appendChild(newNode);
}

function createUserNode(input){
    let newNode = document.createElement("P");
    let textNode = document.createTextNode(input);
    newNode.appendChild(textNode);
    newNode.className += "uText";
    document.getElementById("ribbonBox1").appendChild(newNode);
}

    
            
    
