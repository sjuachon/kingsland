var day = new Date('Apr 30, 2000');
console.log(day); // Apr 30 2000

var nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
console.log(nextDay); // May 01 2000    
