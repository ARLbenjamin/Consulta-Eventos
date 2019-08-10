class Eventbrite{
    constructor(){
   
       this.token_auth= 'LBOX35YTXSXFAFZPS6JW';
       this.orden= 'date';
   
    }
   async obtenerCategorias(){
   //consultar categorias en la REST API
    
   const respuestaCategorias= await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
   
   //resivir la respuesta y convertirla en JSON
   
   const categoria= await respuestaCategorias.json();
   
   //regresamos la respuesta para ser usada en el resto del codigo
   return{
       categoria
   }
    }
    //buscar informacion a partir de lso datos suministrados
    
    async obtenerEventos(texto, id){
     const respuestaEvento= await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${texto}&sort_by=${this.orden}&categories=${id}&token=${this.token_auth}`);
    
     //resivir la respuesta y regresarla como JSON
    
    const eventos= await respuestaEvento.json();
    
    return{
        eventos
    }
    }
   }