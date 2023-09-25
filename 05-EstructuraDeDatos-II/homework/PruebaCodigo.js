// Definimos la funcion constructora de la lista enlazada, para que nos cree un primer objeto , con una referencia head de valor null.
// Definimos la funcion constructora de el nodo(elemento de la lista). Este contiene una propiedad valor, y una propiedad referencia al siguiente elemento.
// Definimos el metodo add para agregar los elementos a la lista, usando la funcion constructora Node, esta recibe un valor que es el que se guarda en el nodo
// Dentro del metodo add, agregamos la funcion para ubicarse al final de la lista al nuevo elemento. 
//Primero creamos la variable actual para que sea un control de iteracion, al mismo tiempo sirve para vincular a los elementos entre si y al primer elemento con el encabezado de la lista.
//Segundo; una vez vinculado el primer elemento de la lista al encabezado, cambiamos el valor de la variable actual a la variable siguiente, asi podemos buscar el ultimo elementdo de la lista.



function LinkedList() {
    this.head=null;
};

function Node(value) {

    this.value = value;
    this.next = null; 

};
LinkedList.prototype.add= function(valor) {

    let node = new Node(valor);
    let actual = this.head;

    if(!actual){
        this.head = node;  
    }else {
        while (actual.next) {

            actual = actual.next;
        }
        actual.next = node;
    }

};

LinkedList.prototype.remove = function(){
    let actual= this.head;

    if(!actual){
        return null;
    }

    while(actual.next.next!= null){
        actual= actual.next;
    };
    valorRemovido = actual.next.value;
    actual.next = null;
    console.log(valorRemovido);

    return valorRemovido;
}

LinkedList.prototype.search = function(value) {
    let puntero = this.head;
    let controlador = false

    if(!puntero) return "Es una lista vacía.";

    if(puntero.value === value) controlador = false;

    while(!controlador && puntero.next != null){
        puntero = puntero.next;

        if(puntero.value===value) controlador= true;
    }

    if(check){
        return puntero;
    } else return undefined;

}
let listaDePrueba = new LinkedList();

