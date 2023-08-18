let total = 0;
function eventHandler(target) {
    const selectedItemsContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);

    // console.log(target.parentNode.childNodes[7].innerText.split(" ")[2]);

    const price = target.parentNode.childNodes[7].innerText.split(" ")[2];

    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total-field').innerText = total;

    // console.log(selectedItemsContainer.childNodes.length);
    const howManyItemTaking = selectedItemsContainer.childNodes.length;
    if (howManyItemTaking > 4) {
        const buyNowBtnField = document.getElementById('btn-buy-now');
        selectedItemsContainer.childNodes[4].style.display = 'none';
        buyNowBtnField.style.display = 'block';
        alert('Your Cart is full. Please Purchase your items first');
        return;
    }
    else {
        const discountFieldContainer = document.getElementById('discount-field');
        const afterDiscountPrice = total - (total * (30 / 100));
        discountFieldContainer.innerText = afterDiscountPrice.toFixed(2);

        const grandTotalField = document.getElementById('grand-total-field');
        const grandTotal = afterDiscountPrice.toFixed(2);
        grandTotalField.innerText = grandTotal;

    }



}