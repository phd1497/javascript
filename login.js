let data_cus = [];
let checkpr = 1;

const prices = document.querySelectorAll(".main-price");
const originalPrices = Array.from(prices).map(price => parseFloat(price.textContent));


function SaveData(){
    
    let takenm = document.getElementById("fullnm").value;
    let takeuser = document.getElementById("usernm").value;
    let takeemail = document.getElementById("input-email").value;
    let takepass = document.getElementById("pw").value;
    let newData = {
        Name: takenm,
        User: takeuser,
        Email: takeemail,
        Pass: takepass
    };

    data_cus.push(newData);

    let fullNamess = "";
    let usernamess = "";
    let emailss = "";
    let passwordss = "";

    for (let x = 0; x < data_cus.length; x++) {
        fullNamess += data_cus[x].Name + "<br>";
        usernamess += data_cus[x].User + "<br>";
        emailss += data_cus[x].Email + "<br>";
        passwordss += data_cus[x].Pass + "<br>";
    }

    document.getElementById("fullname_cus").innerHTML = fullNamess;
    document.getElementById("user_cus").innerHTML = usernamess;
    document.getElementById("email_cus").innerHTML = emailss;
    document.getElementById("pw_cus").innerHTML = passwordss;
 
}

function Discountfn(){
    
    if(checkpr === 1){
        const discountValue = parseFloat(document.getElementById("inp_dsc").value);
        if (discountValue > 40){
            alert("Discount price can not over 40%.");
            return;
        }
        if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
            alert("Please enter a valid discount percentage.");
            return;
        }

        prices.forEach((priceElement, index) => {
            const discountedPrice = originalPrices[index] * (1 - discountValue / 100);
            priceElement.textContent = discountedPrice.toFixed(2);
        });
        
        checkpr = 0;
    }else{
        alert("Price is fixed!")
        return;
    }
    
}

function clearDiscount() { 
    prices.forEach((priceElement, index) => {
        priceElement.textContent = originalPrices[index].toFixed(2);
    });
    document.getElementById("inp_dsc").value = ""; // Clear the input

    checkpr = 1;
}