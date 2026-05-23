function mincost(arr)
{ 
	arr=arr.map(Number);
	arr.sort((a,b)=>a-b);
	let sum=0,ans=0;
	arr.map((elem, index)=>{
		
		if(index!=0)ans+=(sum+elem);
		sum+=elem;
		
		
	});
	return ans;
  
}

module.exports=mincost;
