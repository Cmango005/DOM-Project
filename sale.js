let total=0;
function handleClikBtn(target){
    const selectedItemContainer = document.getElementById("info");
    const itemName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText=itemName;
    selectedItemContainer.appendChild(li);
    const price = target.parentNode.childNodes[5].innerText;
    total= parseFloat(total)+parseFloat(price);
    document.getElementById("total").innerText=total;
    const purchaseConfirm= document.getElementById('purchase');
      if(total>0){
        purchaseConfirm.removeAttribute('disabled');
      }
}
document.getElementById('code-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
     const codeConfirm = document.getElementById('apply-code');
     const total = parseInt(
        document.getElementById("total").innerText
      );
     if (text === "SELL200" && total >= 200) {
        codeConfirm.removeAttribute("disabled");
        const discount = (total / 100) * 20;
        document.getElementById("discount").innerText = discount;
        document.getElementById("fullTotal").innerText =
          total - parseFloat(discount);
      }
})
document.getElementById("home").addEventListener("click",function(){
    window.location.href='index.html';
})
