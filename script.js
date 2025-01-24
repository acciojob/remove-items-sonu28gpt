//your JS code here. If required.
let select=document.getElementById('colorSelect');
let btn=document.querySelector('input[type="button"]');
btn.addEventListener('click',()=>{
let options=document.querySelectorAll('option');
	for(let el of options){
		if(el.value==select.value){
			// select.removeChild(el);
			el.remove();
			break;
		}
	}

  
})