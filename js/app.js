
var boxMain = document.getElementById('box-main');
var inputMain = document.getElementById('input-main');
var form1 = document.getElementById('form1');
var form1Button = document.getElementById('form1-button');
var form1Input = document.getElementById('form1-input');

// en esta primera parte me valgo del uso de las clases para ocultar y mostrar los elementos
inputMain.addEventListener('click', function() {
  if (form1.classList.contains('oculto')) {
    form1.classList.remove('oculto');    
  }
  boxMain.replaceChild(form1, inputMain);
  // evento para la creación de nuevo y su inserción, cada vez que se de click al botón del formulario(form1)

  form1Button.addEventListener('click', function() {
    var keep = boxMain.removeChild(form1);
    var boxList = document.createElement('div');
    var boxListHeader = document.createElement('div');
    var boxListContent = document.createElement('div');
    boxList.appendChild(boxListHeader);
    boxList.appendChild(boxListContent);
    boxListHeader.textContent = form1Input.value;
    // para limpiar el formulario para una nueva entrada
    form1Input.value = '';
    boxListContent.textContent = 'Añadir una tarjeta...';
    // dando clases para el estilo de los elementos
    boxList.classList.add('boxListStyle');
    boxListHeader.classList.add('boxListHeaderStyle');
    boxListContent.classList.add('boxListContentStyle');
    // primero se anexa el elemento creado y después el input, para tener la opción de ingresar una nueva lista.
    boxMain.appendChild(boxList);
    boxMain.appendChild(inputMain);
    // evento para la creación de textarea para ingresar una tarjeta.  
    boxListContent.addEventListener('click', function(event) {
      var divList = document.createElement('div');
      var textArea = document.createElement('textarea');
      var buttonDivList = document.createElement('button');
      var spanDivList = document.createElement('span');
      divList.appendChild(textArea);
      divList.appendChild(buttonDivList);
      divList.appendChild(spanDivList);
      divList.classList.add('divListStyle');
      textArea.classList.add('textAreaStyle');
      buttonDivList.classList.add('buttonDivListStyle');
      spanDivList.classList.add('spanDivListStyle')
      spanDivList.textContent = 'X';
      buttonDivList.textContent = 'Guardar';
      // se le da nuevo estilo height = 'auto' para que cada vez que se anexe el nuevo elemento, boxListContent se adapte a el. También se limpia el contenido para ingresar una nueva tarjeta.
      // y por último se anexa el nuevo elemento. 
      boxListContent.style.height = 'auto';
      boxListContent.textContent = '';
      boxList.appendChild(divList);

      /* Esta parte está aún por definir.
      textArea.addEventListener('keydown', function(){
                var count = 0;
                count = textArea.value.length + 1;
                if(count === 0){
                    buttonDivList.disabled = true;
                    buttonDivList.style.background = "black";
                }
                if (count >= 1) {
                    buttonDivList.disabled = false;
                    buttonDivList.style.background = "red";
                }  
        })
    */
      // evento para crear y anexar el elemento que me permitirá guardar y mostrar la tarea ingresada.
      buttonDivList.addEventListener('click', function() {    
        var newDiv = document.createElement('div');
        newDiv.classList.add('newDivStyle');
        boxList.style.height = 'auto';
        newDiv.textContent = textArea.value;
        boxListContent.appendChild(newDiv);
        textArea.value = '';                  
      });
    });
  });
});


/*
boxListContent.addEventListener('click', function(){
    
//var textAreaList = document.createElement('textarea');
//textAreaList.classList.add('textAreaListStyle');
var p = form1.cloneNode(false);
var q = form1Input.cloneNode(false);
var buttonList = document.createElement('button');
buttonList.textContent = 'Guardar';
buttonList.classList.add('buttonListStyle');
p.appendChild(q);
p.appendChild(buttonList);
p.classList.add('newStyleP');
//boxList.replaceChild(p, boxListContent);
boxListContent.style.height = "auto";
boxListContent.replaceChild(p,ancor);

    q.addEventListener('keydown', function(e){     
        buttonList.addEventListener('click', function(){
            var newDiv = document.createElement('div');
            newDiv.classList.add('newDivStyle');
            newDiv.textContent = q.value;
            boxList.appendChild(newDiv);
        })   
    })
    
})
*/


/*
var boxMain = document.getElementById('box-main')
var inputMain = document.getElementById('input-main');
var form1 = document.getElementById('form1');
var guarda1;

inputMain.addEventListener('click', function(){
guarda1=boxMain.removeChild(inputMain);
    if(form1.classList.contains('oculto')){  
        form1.classList.remove('oculto');
    }
});

var main = document.getElementById('main');
var form1Button = document.getElementById('form1-button');
var caja = document.createElement('div');
caja.classList.add('prueba');
form1Button.addEventListener('click', function(){
    boxMain.appendChild(caja);
    //boxMain.appendChild(inputMain);

})

/*

inputMain.addEventListener('click', function(){

    if(form1.classList.contains('form1-style')){
        form1.classList.remove('form1-style');
        guarda1 = boxMain.removeChild(inputMain);   
    }
    boxMain.appendChild(form1);
    form1.classList.add('diplayForm1');
    boxMain.appendChild(guarda1);
    guarda1.classList.add('alCostado');
    
})
*/
/*
var main = document.getElementById('main')
var form1Button =document.getElementById('form1-button');
var guarda2;
var guarda3;

form1Button.addEventListener('click', function(){
    guarda2=boxMain.removeChild(inputMain);
    guarda3=boxMain.removeChild(form1);
    var boxList = document.createElement('div');
    boxMain.classList.add('boxListStyle');
    boxMain.appendChild(boxList);
    //boxList.appendChild(guarda2);
    boxList.appendChild(guarda3);
    
})

//var desplaza = function(elemento){setInterval(function(){elemento.style.cssText ='position: absolute; left:'+400+'px'}, 0);};
*/
