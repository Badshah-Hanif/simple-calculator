let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
         const inputScreen = document.getElementById("inp-scr");
         const buttonValue = button.textContent;
         if (buttonValue === "ON" || buttonValue === "OFF") {
            const isOn = button.textContent === "ON";
            inputScreen.disabled = !isOn;
            inputScreen.readOnly = !isOn;
            string = "";
            inputScreen.value = "";
            button.textContent = isOn ? "OFF" : "ON";
         }
         
         else {
            if (!inputScreen.disabled) {
                if (buttonValue === "=") {
                    try {
                        string = eval(string);
                        inputScreen.value = string;
                    }   
                    catch (error) {
                        inputScreen.value = "Error";
                    }
                } 
                else if (buttonValue === "C") {
                    if (string.length > 0) {
                        try {
                            string = string.slice(0, -1);
                            inputScreen.value = string;
                        } 
                        catch (error) {
                            inputScreen.value = "Error";
                        }
                    }
                }
                else if (buttonValue === "AC") {
                    string = "";
                    inputScreen.value = string;
                } 
                else {
                    string += buttonValue;
                    inputScreen.value = string;
                }
            }
         }
    });
});