const checkoutBtn = document.getElementById("checkoutBtn");
checkoutBtn.addEventListener("click", function () {
    alert("Thank you for shopping!!!");
});
const phoneRemove = document.getElementById("phoneRemove");
phoneRemove.addEventListener("click", function () {
    const phoneArea = document.getElementById("phoneArea");
    phoneArea.style.display = "none";
    document.getElementById("subTotal").innerText = 0;
    document.getElementById("totalTax").innerText = 0;
});
const caseRemove = document.getElementById("caseRemove");
caseRemove.addEventListener("click", function () {
    const caseArea = document.getElementById("caseArea");
    caseArea.style.display = "none";
    document.getElementById("subtotal").innerText = 0;
    document.getElementById("totalTax").innerText = 0;
});

//phone cart start
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", function () {
    //Phone quantity increment
    const productNumber = document.getElementById("productNumber").value;
    let productInt = parseInt(productNumber);
    productInt++;
    document.getElementById("productNumber").value = productInt;

    //Increase Amount
    let phoneTk = document.getElementById("phoneTk").innerText;
    let phoneFloat = parseFloat(phoneTk);
    phoneFloat += 1219;
    document.getElementById("phoneTk").innerText = phoneFloat;

    //subtotal amount
    let subtotal = document.getElementById("subtotal").innerText;
    let subtotalFloat = parseFloat(subtotal);
    subtotalFloat = subtotalFloat + 1219;
    document.getElementById("subtotal").innerText = subtotalFloat;

    //tax and final amount calculation
    let tax = subtotalFloat * 15 / 100;
    document.getElementById("totalTax").innerText = tax;
    document.getElementById("intotal").innerText = tax + subtotalFloat;

});
const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function () {
    //Phone quantity decrement
    const productNumber = document.getElementById("productNumber").value;
    let productInt = parseInt(productNumber);
    if (productInt > 0) {
        productInt--;
        let phoneTk = document.getElementById("phoneTk").innerText;
        //decrease amount
        let phoneFloat = parseFloat(phoneTk);
        phoneFloat -= 1219;
        document.getElementById("phoneTk").innerText = phoneFloat;
        //update subtotal
        let subtotal = document.getElementById("subtotal").innerText;
        let subtotalFloat = parseFloat(subtotal);
        subtotalFloat = subtotalFloat - 1219;
        document.getElementById("subtotal").innerText = subtotalFloat;
        document.getElementById("productNumber").value = productInt;
        //calculate tax and total amount
        let tax = subtotalFloat * 15 / 100;
        document.getElementById("totalTax").innerText = tax;
        document.getElementById("intotal").innerText = subtotalFloat + tax;
    }

});
//phone cart end
//phone case start
const casePlusBtn = document.getElementById("casePlusBtn");
casePlusBtn.addEventListener("click", function () {
    //Case quantity increment
    const caseNumber = document.getElementById("caseNumber").value;
    let caseInt = parseInt(caseNumber);
    caseInt++;
    document.getElementById("caseNumber").value = caseInt;
    //update case cash
    let caseTk = document.getElementById("caseTk").innerText;
    let caseFloat = parseFloat(caseTk);
    caseFloat += 59;
    document.getElementById("caseTk").innerText = caseFloat;
    //update subtotal
    let subtotal = document.getElementById("subtotal").innerText;
    let subtotalFloat = parseFloat(subtotal);
    subtotalFloat = subtotalFloat + 59;
    document.getElementById("subtotal").innerText = subtotalFloat;
    //tax and total amount
    let tax = subtotalFloat * 15 / 100;
    document.getElementById("totalTax").innerText = tax;
    document.getElementById("intotal").innerText = tax + subtotalFloat;
});

const caseMinusBtn = document.getElementById("caseMinusBtn");
caseMinusBtn.addEventListener("click", function () {
    //case quantity decrement
    const caseNumber = document.getElementById("caseNumber").value;
    let caseInt = parseInt(caseNumber);
    if (caseInt > 0) {
        caseInt--;
        document.getElementById("caseNumber").value = caseInt;
        //update case amount
        let caseTk = document.getElementById("caseTk").innerText;
        let caseFloat = parseFloat(caseTk);
        caseFloat -= 59;
        document.getElementById("caseTk").innerText = caseFloat;
        //update subtotal
        let subtotal = document.getElementById("subtotal").innerText;
        let subtotalFloat = parseFloat(subtotal);
        subtotalFloat = subtotalFloat - 59;
        document.getElementById("subtotal").innerText = subtotalFloat;
        //update tax and total amount
        let tax = subtotalFloat * 15 / 100;
        document.getElementById("totalTax").innerText = tax;
        document.getElementById("intotal").innerText = subtotalFloat + tax;
    }

});