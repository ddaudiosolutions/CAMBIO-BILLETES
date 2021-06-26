
let listado = document.querySelector('#listadoCambio'); 

let billetes = [500,200,100,50,20,10,5,2,1]
let cambio = [0,0,0,0,0,0,0,0,0]

function getInputValue() {

  clearChild();

  let montante = document.getElementById('montante').value

    for (let i = 0; i < billetes.length; i++) {
    
      if(montante >= billetes[i]){
          cambio[i] = Math.floor(montante / billetes[i]);
     
          montante = montante - (cambio[i]*billetes[i]) 
      }
  
  
  }
  
  for (let i = 0; i < billetes.length; i++) {
      if(billetes[i]>0){
        let divis = document.createElement('div')
        
        let inputV = document.createElement('input')
        inputV.value = cambio[i] + ' de ' + billetes[i] + '€';
        inputV.setAttribute('class', 'bg-info, mb-3')
        
        divis.appendChild(inputV)
        listado.appendChild(divis)
           
          console.log(cambio[i] + ' de ' + billetes[i])          
              
          }
  }

  }

  function clearChild(){
    while (listado.firstChild){
      listado.removeChild(listado .firstChild);
    }
  }
  

 
    
    
