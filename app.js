function updateProductNubemr(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let productInput = caseInput.value;
    if (isIncreasing == true) {
        productInput = parseInt(productInput) + 1;
    }
    else if (productInput > 0) {
        productInput = parseInt(productInput) - 1;
    }
    caseInput.value = productInput;

    // update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput * price;
    // calculate Total

    calculateTotal();


}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax=subTotal/10;
    const total=subTotal+tax;
    //update on htaml
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;

}

//handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNubemr('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNubemr('phone', 1219, false);
})


//handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNubemr('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNubemr('case', 59, false);


})

