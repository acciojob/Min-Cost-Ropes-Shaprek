function mincost(arr)
{ 
//write your code here
// return the min cost'
	arr.map(Number);
	arr.sort((a,b)=>a-b);
	let sum=0;
	arr.map((elem, index)=>{
		if(index==0)sum*(arr.length-1);
		else sum*(arr.length-index);
	});
	return sum;
  
}

module.exports=mincost;
