/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument(price), payment as the second argument(cash), and cash-in-drawer(cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * 
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 * 
 * Currency Unit    /       Amount
 * Penny                $0.01(PENNY)
 * Nickel               $0.05(NICKEL)
 * Dime                 $0.1(DIME)
 * Quarter              $0.25(QUARTER)
 * Dollar               $1(ONE)
 * Five Dollars         $5(FIVE)
 * Ten Dollars          $10(TEN)
 * Twenty Dollars       $20(TWENTY)
 * One-hundred Dpllars  $100(ONE HUNDRED)
 * 
 * See below for an example of a cash-in-drawer array
 * [
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
 */

function checkCashRegister(price, cash, cid) {
    let change;
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


  const currencyUnitValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  
  function checkCashRegister(price, cash, cid) {
    const changeDue = cash - price;
    const totalCID = cid.reduce((acc, curr) => {
      return acc + curr[1];
    }, 0);
    if (totalCID < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCID === changeDue) {
      return {status: "CLOSED", change: cid};
    } else {
      const change = [];
      let remainingChangeDue = changeDue;
      cid = cid.reverse();
      for (let i = 0; i < cid.length; i++) {
        const currencyUnit = cid[i][0];
        const currencyUnitValue = currencyUnitValues[currencyUnit];
        let availableCurrencyUnitAmount = cid[i][1];
        let neededCurrencyUnitAmount = 0;
        while (remainingChangeDue >= currencyUnitValue && availableCurrencyUnitAmount > 0) {
          neededCurrencyUnitAmount += currencyUnitValue;
          remainingChangeDue -= currencyUnitValue;
          availableCurrencyUnitAmount -= currencyUnitValue;
          remainingChangeDue = Math.round(remainingChangeDue * 100) / 100; // avoid rounding errors
        }
        if (neededCurrencyUnitAmount > 0) {
          change.push([currencyUnit, neededCurrencyUnitAmount]);
        }
      }
      if (remainingChangeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: change};
    }
  }
  

/**
 * The 'currencyUnitValues' object maps each currency unit to its value. The 'checkCashRegister' function takes in the purchase price, payment amount, and cash-in- drawer as arguments.
 * 
 * It calculates the change due and the total amount of cash in the drawer. If the cash in the drawer is less than the change due, it returns'{status: "INSUFFICIEMT_FUNDS", change: []}'. If the cash in the drawer equals the change due, it returns '{status: "CLOSED", change: cid}' where 'cid' is the original cash-on-drawer array.
 * 
 * Otherwise, it goes through the cash-in-drawer array from highest to lowest value and calculates the amount of each currency unit needed to make up the change due. If there isn't enough of a particular currency unit, it moves on to the next one. If there isn't enough of a particular currency unit, it moves on to the next one. If there isn't enough cash in the drawer to make up the change due, it returns {status: "INSUFFICIENT_FUNDS", change: []}. Otherwise, it returns {status: "OPEN", change: change} where change is an array of the currency units and amounts needed to make up the change due.
 */

 
