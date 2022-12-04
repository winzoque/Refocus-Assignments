function computeTip(totalBill){
    let tip = totalBill * 0.1;
    let decimal = tip.toFixed(2);
    return decimal;
}

console.log("The Tip is ₱" + computeTip(549) + ", Thank you!");