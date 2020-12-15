loginPin = () => {
    let loginPin = parseInt(document.getElementById("loginPin").value);
    if (isNaN(loginPin)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    } else if (loginPin == localStorage.getItem("pin")) {
        //displays balance and withdrawal/deposit inputs
        hideLogin();
        displayWithDepo();
        displayBal();
    } else {
        document.getElementById("displayAlerts").innerHTML = "Account Not Found";
        setTimeout(clearErr, 3000);
    }
}

createPin = () => {
    let createPin = parseInt(document.getElementById("createPin").value);

    if (isNaN(createPin)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    } else if (createPin == localStorage.getItem("pin")) {
        document.getElementById("displayAlerts").innerHTML = "PIN already exists";
        setTimeout(clearErr, 3000);
    } else {
        //creates new account in local storage, sets balance to 0
        localStorage.setItem("pin", createPin);
        localStorage.setItem("balance", 0);
        //displays balance and withdrawal/deposit inputs
        hideLogin();
        displayWithDepo();
        displayBal();
    }
}

withdrawal = () => {
    let withdrawalAmount = parseInt(document.getElementById("withdrawalInput").value);

    let lsBalance = parseInt(localStorage.getItem("balance"));

    if (isNaN(withdrawalAmount)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    } else if (withdrawalAmount > localStorage.getItem("balance")) {
        document.getElementById("displayAlerts").innerHTML = "Stop being poor";
        setTimeout(clearErr, 3000);
    } else {
        //subtracts withdrawal amount from balance and displays
        lsBalance -= withdrawalAmount;
        localStorage.setItem("balance", lsBalance);
        displayBal();
    }
}

deposit = () => {
    let depositAmount = parseInt(document.getElementById("depositInput").value);

    let lsBalance = parseInt(localStorage.getItem("balance"));

    if (isNaN(depositAmount)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    } else if (depositAmount < 0) {
        document.getElementById("displayAlerts").innerHTML = "Can't deposit a negative number";
        setTimeout(clearErr, 3000);
    } else {
        //adds withdrawal amount to balance and displays
        lsBalance += depositAmount;
        localStorage.setItem("balance", lsBalance);
        displayBal();
    }
}
        
        
updatePin = () => {
    let updatePin = parseInt(document.getElementById("updatePin").value); 
    if (isNaN(updatePin)) {
        document.getElementById("displayAlerts").innerHTML = "Value must be numbers only";
        setTimeout(clearErr, 3000);
    } else if (updatePin == localStorage.getItem("pin")) {
        document.getElementById("displayAlerts").innerHTML = "That is current PIN";
        setTimeout(clearErr, 3000);
    } else {
        //changes pin for current account
        localStorage.setItem("pin", updatePin);
        document.getElementById("displayAlerts").innerHTML = "PIN changed.";
        //displays balance and withdrawal/deposit inputs
        hideLogin();
        displayWithDepo();
        displayBal();

    }

}

isBlank = (bal) => {}

clearErr = () => {
    document.getElementById("displayAlerts").innerHTML = "";
}

//hides login block
hideLogin = () => {
    document.getElementById("login").style = "display:none";
}

//displays withdrawal and deposit block
displayWithDepo = () => {
    document.getElementById("withdrawalDeposit").style = "display:block";
}

// sets balance to local storage --------------------non-working
// setBal = (lsBalance) =>{ 
//     localStorage.setItem("balance", lsBalance);
// }

//displays balance
displayBal = () => {
    document.getElementById("displayBalance").innerHTML = "$" + localStorage.getItem("balance");
}