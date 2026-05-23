function mincost(arr)
{ 
//write your code here
// return the min cost'
	arr=arr.map(Number);
	arr.sort((a,b)=>a-b);
	let sum=0;
	arr.map((elem, index)=>{
		if(index==0)sum+=(elem*(arr.length-1));
		else sum+=(elem*(arr.length-index));
	});
	return sum;
  
}

module.exports=mincost;
