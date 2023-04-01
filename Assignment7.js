const input = prompt("Enter a string:"); 
const length = input.length; 

if (length > 4) {
  const truncated = input.slice(0, 4) + "..."; 
  console.log(truncated); 
} else {
  console.log(input); 
}
