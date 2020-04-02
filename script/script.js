'use strict'

let arr = [245, 300, 463, 256, 111, 905, 594];

arr.sort(function(a, b) {
    return a-b;
});
for (let i = 0; i < 7; i++) {
    arr[i] = arr[i] + '';
    
   if(arr[i][0] == 2 || arr[i][0] == 4 ){
    console.log(arr[i]);
   }
}
// 2 часть дз

let n = 100,
    flag = 1;
    console.log(flag);
    
for (let i = 2; i <= n; i++) {
  let flag=1;
  for (let j = 2; (j <= i/2)&&(flag==1); j++) {
     if (i%j==0) {
         flag=0}
    }
  
 if (flag==1) {console.log(i);}
}