const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

// 3 operazioni che restituiscono true:
console.log(isSunnyDay && isSummer); // true
console.log(isAutumn || isSummer); // true
console.log(!itIsRaining && isSunnyDay); // true

// 3 operazioni che restituiscono false:
console.log(isSunnyDay && isAutumn); // false
console.log(isAutumn || itIsRaining); // false
console.log(!isSummer && isSunnyDay); // false
