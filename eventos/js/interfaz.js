class Interfaz {

    constructor(){
    
        //inicializar la app al instanciar
        this.init();
        //ver los resultados
        this.listado= document.querySelector('#resultado-eventos');
        
    }
    
    //metodo para cuando inicie la app
    init(){
    //llamar el metodod e imprimir categorias
    
        this.imprimirCategorias()
    
    }
    //imprimir categorias
    imprimirCategorias(){
    
    const listadeCategorias= eventBrite.obtenerCategorias().then(categorias => {
        
        const cats= categorias.categoria.categories;

        //se procede a seleccionar la hubicacion de las categorias
        const selectCategorias= document.querySelector('#listado-categorias');
      
        cats.forEach(cat => {
            let option= document.createElement('option')
            option.value= cat.id;
            option.appendChild(document.createTextNode(cat.name_localized));
            selectCategorias.appendChild(option);

        });
        

    });
    
    }
    mostrarMensaje(mensaje, clase){
     
        const div= document.createElement('div');
        div.id= 'mensaje';
        div.className= clase;
        div.appendChild(document.createTextNode(mensaje));

    const buscadordiv= document.querySelector('#buscador');
    buscadordiv.appendChild(div);
    
    setTimeout(()=>{
      document.querySelector('#mensaje').remove();
    }, 4500);
    }

    
// imprime los resultados de la busqueda
    mostrarEventos(eventos){
    const listaEventos= eventos.events;
    
    listaEventos.forEach(evento=>{

    this.listado.innerHTML +=`
    
    <div class="col-md-4 md-4">
        <div class="card">

          <div class="card-body">
               <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">
          </div>
          <div class="card-body">
               <div class="card-text">
               <h2 class= "text-center">${evento.name.text}</h2>
               <p class="lead text-info">Información del evento</p>
               <p>${evento.description.text.substring(0,200)}...</p>
               <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
               <span class="badge badge-primary">Fecha y Hora: ${evento.start.local}</span>
               <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
               </div>
          </div>

        </div>
    </div> 

    `;
    })}
  limpiarResultados(){
      this.listado.innerHTML='';
  }
}
