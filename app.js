function updateCaseNumber(inputId){
    const caseInput = document.getElementById(inputId);
    const caseNumber = caseInput.value;
    caseInput.value=parseInt(caseNumber)+1;
    return caseInput;
}






document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value=parseInt(caseNumber)+1;
})

document.getElementById('case-minus').addEventListener('click',function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value=parseInt(caseNumber)-1;
 
 })


/* document.getElementById('btn-plus').addEventListener('click',function(){
    caseInput('input-id');
})

document.getElementById('btn-minus').addEventListener('click',function(){
    const valueInput=document.getElementById('input-id');
    const inputNumber=valueInput.value;
    valueInput.value=parseInt(inputNumber)-1;
}) */