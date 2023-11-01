function decimalToBinary(num) {
 let sum="";	
  while(num>0){
	  let remainder= (num%2);
	  sum=String(remainder)+sum;
	  num=Math.floor(num/2);
  }
	return parseInt(sum);
  
}

window.decimalToBinary = decimalToBinary;
