// complete the given function

function palindrome(str){
	  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	  return cleanedStr === cleanedStr.split('').reverse().join('');
	// let i=0;
	// let j=str.length-1;
	// while(i<j){
	// 	if(str[i]!=str[j]){
	// 		return false;
	// 	}
	// 	i++;
	// 	j--;
		
	// }
 //    return true;
}
module.exports = palindrome
const result = palindrome(inputString);
console.log(result); 
