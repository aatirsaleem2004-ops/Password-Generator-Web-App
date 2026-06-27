let inputSlider = document.getElementById("inputSlider")
let silderValue = document.getElementById("sliderValue")
let PassBox = document.getElementById("PassBox")
let LowerCase = document.getElementById("LowerCase")
let UpperCase = document.getElementById("UpperCase")
let NumbersOnly = document.getElementById("NumbersOnly")
let Symbols = document.getElementById("Symbols")
let Generatebtn = document.getElementById("Generatebtn")
let copyIcon = document.querySelector(".inputBox  .material-symbols-outlined")

// Showing input value at the start
silderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    silderValue.textContent = inputSlider.value;
})

Generatebtn.addEventListener('click', () => {
    PassBox.value = GeneratePassward()
})

// Function to generate passward
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let AllNumbers = "0123456789";
let AllSymbols = "~!@#$%^&*";
function GeneratePassward(){
    let generatePassward = "";
    let Allchars = "";

    Allchars += LowerCase.checked ? lowerCase : "";
    Allchars += UpperCase.checked ? upperCase : "";
    Allchars += NumbersOnly.checked ? AllNumbers : "";
    Allchars += Symbols.checked ? AllSymbols : "";

    if(Allchars == "" || Allchars.length == 0){
        return generatePassward;
    }
    let i = 1;
    while(i <= inputSlider.value){
        generatePassward += Allchars.charAt(Math.floor(Math.random() * Allchars.length));
        i++;
    }
    return generatePassward;
}

copyIcon.addEventListener('click', () => {
    if (PassBox.value !== "" || PassBox.value >= 1) {
        navigator.clipboard.writeText(PassBox.value)
        copyIcon.innerText = "check";
        copyIcon.title = "Passward Copied"
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy"
            copyIcon.title = ""
        },3000)
    }
})
