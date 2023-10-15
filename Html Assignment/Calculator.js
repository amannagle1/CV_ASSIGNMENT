let input=document.getElementById('inputbox');

let buttons=document.querySelectorAll('button');

let string= "";

let array=Array.from(buttons);
array.forEach(button =>{
	button.addEventListener('click',(e)=>{
		if (e.target.innerHTML == '=')
		 {
		 	string=eval(string);   //eval is a in built function which will evaluate a mathematical function in js
		 	input.value=string;
		 }
		 else if(e.target.innerHTML == 'C') 
		 {
		 	string= "";
		 	input.value=string;
		 }
		 else if (e.target.innerHTML =='DEL') 
		 {
		 	string=string.substring(0,string.length-1);
		 	input.value=string;
		 }
		 else
		 {
		 	 string+=e.target.innerHTML;
			 input.value=string;
		 }
		 
	})
})
