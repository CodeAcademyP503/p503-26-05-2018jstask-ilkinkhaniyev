function nameNotEmpty() {

    if (productName.value.length != "" && productName.value.length > 3 && productName.value.length < 50 && category.value != "empty") {
        return true;
    }
    else {
        return errorMessage("red", "Məhsulun adını düzgün daxil edin", "productName");
    }
}

function weight() {
    if (weight.value.length != "" && weight.value > 1) {
        return true;
    }
    else {
        return errorMessage("red", "Çəkini düzgün daxil edin", "weight");
    }
}

function errorMessage(color, text, selector) {

    document.getElementById(selector).style.backgroundColor = color;
    document.getElementById(selector).innerText = text;
}

let productArray = [];


function Product(prName, prWeight, prCategory, prPrice, prDate) {
    this.name = prName;
    this.weight = prWeight;
    this.categoryId = prCategory;
    this.price = prPrice;
    this.endDate = prDate;
}

let categories = {
    et: {
        id: "1",
    },
    shirniyyat: {
        id: "2",
    },
    terevez: {
        id: "3",
    },
}

function add() {
    if (nameNotEmpty() != true) {
        return;
    }
    let _name = productName.value;
    let _weight = weight.value;
    let _cat = category.value;
    let newProduct = new Product(_name, _weight, _cat);
    productArray.push(newProduct);
    all.value = productArray.length;
    switch (newProduct.categoryId) {
        case categories.et.id:
            meat.value = +meat.value + 1
            break;
        case categories.terevez.id:
            greens.value = +greens.value + 1
            break;
        case categories.shirniyyat.id:
            sweety.value = +sweety.value + 1
            break;
    }

}



















// let meat = {
//     __proto__:login,
//     email:null
// }


// let users = [];//empty array for users

// function Register() {
//    user.name = username.value;
//    user.email = email.value;
//    user.password = password.value;

//    users.push(user);
// }