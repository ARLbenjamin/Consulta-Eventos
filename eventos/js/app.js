const eventBrite= new Eventbrite();
const ui= new Interfaz();

//agregar evento de busqueda

document.querySelector('#buscarBtn').addEventListener('click', (e)=>{
 
    e.preventDefault();
    
    const textBusqueda= document.querySelector('#evento').value;
    
    const idLista= document.querySelector('#listado-categorias');
    const idbuscado= idLista.options[idLista.selectedIndex].value;
    
    //condicionar los campos
    if(textBusqueda !== '') {
        
    //si hay informacion para realizar la busqueda
    eventBrite.obtenerEventos(textBusqueda, idbuscado)
    .then((eventos) =>{
        if(eventos.eventos.events == ''){
            
        //No hay eventos
         ui.mostrarMensaje('No hay ningun evento con las caracteristicas solicitadas', 'alert alert-danger mt-4');

        } else{
        ui.limpiarResultados();     
        ui.mostrarEventos(eventos.eventos);
        }
    })
        
    } else {
        //alerta por falta de datos
        ui.mostrarMensaje('No se há ingresado informacionen el buscador', 'alert alert-danger mt-4');
    }

} )