function add(){
    var x = document.getElementById("input").value;
  
   
     if (x != ''){
             var list = document.getElementById('list');
 
         var li = document.createElement('li');

         var check = document.createElement('input');
         check.type = 'checkbox';
         check.className='checkbox';

         
         var text = document.createTextNode(x);
         text.className="text";
         var btn = document.createElement('button');
         btn.className = 'delete';
         btn.innerHTML = 'X';
         

         li.appendChild(check);
         
         li.appendChild(text);
     
         li.appendChild(btn);
         list.appendChild(li);
         
 
     btn.onclick = function(){
         list.removeChild(li);
     }

     check.onclick = function() {
         if(check.checked == true) {
             li.style.textDecoration="line-through";
         } else {
             li.style.textDecoration="none";
         }
        
    }
         }
     else alert('no input')
     input.value = '';
     
     
    
         
 }

