function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
       caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber>0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value=caseNumber;

    // update case total
    const caseTotal=document.getElementById('case-total');
    caseTotal.innerText=caseNumber*59;



}






document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
    // caseInput.value=parseInt(caseNumber)-1;

})


/* document.getElementById('btn-plus').addEventListener('click',function(){
    caseInput('input-id');
})

document.getElementById('btn-minus').addEventListener('click',function(){
    const valueInput=document.getElementById('input-id');
    const inputNumber=valueInput.value;
    valueInput.value=parseInt(inputNumber)-1;
}) */