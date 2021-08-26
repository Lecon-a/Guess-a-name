var guessNames = ["Shola", "Joba", "Sunday", "John", "Ebun", "Damilola", "Jonathan", "Tunmise", "Evelyn"];

var guessName = prompt("Enter any name to guess if included in the list of names: ")

if(guessNames.includes(guessName)){
    alert("Found!");
} else {
    alert("Not Found!");
}