# scrumlords-atm

/*

PSUEDO CODE
---     If the user presses loginPinBtn
isBlank()
check the user input against localStorage
if the login is invalid
    display error message
otherwise it's valid
    hide the login div
    show the withdrawal deposit div
    get info from localstorage
        balance
    display balance



---        If the user presses createPinBtn
isBlank()
check the user input against localStorage
if PIN already exists
    display error message
Otherwise PIN is available
    Store pin in localStorage
    Set balance to 0
    hide the login div
    show the withdrawal deposit div
    show balance

---        If the user presses createPinBtn
isBlank()
check the user input against localStorage
if PIN already exists
    display error message
Otherwise PIN is available
    Store pin in localStorage
    Set balance to 0
    hide the login div
    show the withdrawal deposit div
    show balance

---        If the user presses the withdrawal button
get the value from the textbox
isBlank()
get their balance from localStorage
if value is > balance
    display error message
otherwise it's valid so withdrawal
    balance - value
    display balance
    store new balance in localStorage

If the user presses the deposit button
get the value from the textbox
isBlank()
get their balance from localStorage
if value is <= 0
    display error message
otherwise it's valid so deposit
    balance + value
    display balance
    store new balance in localStorage

If the user presses the update PIN button
if the value is a blank string - isBlank()
    display error
otherwise
    check value against localstorage
    if value exists
        display error
    otherwise
        update PIN in localStorage














Login with PIN
Create account with PIN (check if
Deposit Money
Print Balance
Withdrawal
Change PIN

HTML
-- Login with Pin
--- Change PIN
--- Create account with PIN
--- Deposit
--- Withdrawal

--- Buttons

--successMsg





)
// demo code below        
let pins = ["1001", "2002"];
let balances = ["102","101"];

let accounts = [ 
{
    pin: "1001",
    balance: "301"
},
{
    pin: "10021",
    balance: "3041"
}
]

console.log(accounts)
localStorage.setItem("pin", "0103");        
*/