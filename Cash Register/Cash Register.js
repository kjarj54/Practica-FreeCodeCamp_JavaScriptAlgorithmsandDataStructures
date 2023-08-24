function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let totalCid = 0;
    for (let [, amount] of cid) {
      totalCid += amount;
    }
    totalCid = parseFloat(totalCid.toFixed(2));
  
    let changeAmount = cash - price;
    let change = [];
  
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const [unit, value] = currencyUnits[i];
      const availableAmount = cid[i][1];
      const availableUnitCount = availableAmount / value;
      
      if (changeAmount >= value) {
        const requiredUnits = Math.floor(changeAmount / value);
        const givenAmount = Math.min(requiredUnits * value, availableAmount);
        change.push([unit, givenAmount]);
        changeAmount = parseFloat((changeAmount - givenAmount).toFixed(2));
      }
    }
  
    if (changeAmount > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (changeAmount === 0 && totalCid === cash - price) {
      return { status: "CLOSED", change: cid };
    }
  
    return { status: "OPEN", change: change };
  }
  
  const result = checkCashRegister(
    19.5,
    20,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  );
  
  console.log(result);
  