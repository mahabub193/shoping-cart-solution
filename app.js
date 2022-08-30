function updateProductNubemr(product,price,isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let productInput = caseInput.value;
    if (isIncreasing == true) {
       productInput = parseInt(productInput) + 1;
    }
    else if(productInput>0) {
        productInput = parseInt(productInput) - 1;
    }
    caseInput.value=productInput;

    // update  total
    const productTotal=document.getElementById(product +'-total');
    productTotal.innerText=productInput*price;



}


//handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNubemr('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNubemr('phone',1219,false);
})


//handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNubemr('case',59,true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNubemr('case',59,false);
    

})

