'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(value){

   if(value<this.value){

      if(this.left){

         this.left.insert(value);

      }else{

         this.left = new BinarySearchTree(value);
      }

   }else if(value>this.value){
      
      if(this.right){

         this.right.insert(value);

      }else {

         this.right = new BinarySearchTree(value);

      }
      
   }

}

BinarySearchTree.prototype.contains = function(value){

   // if(value === this.value){
   //    return true;
   // };

   // if(value<=this.value && this.left!== null){
   //       return this.left.contains(value);
   // } else if(value>this.value && this.right!==null){
   //       return this.right.contains(value);
   // } else return false;

   if(this.value=== value) return true;

   if(value > this.value){

      if(this.right === null ) return false;
      return this.right.contains(value);
   }

   if(value < this.value){

      if(this.left === null) return false;
      return this.left.contains(value);
   }
   
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){
      if(pedido==="in-order" || pedido === undefined){
         if(this.left && this.left.depthFirstForEach(cb,pedido));
         cb(this.value);
         if(this.right && this.right.depthFirstForEach(cb,pedido));
      };

      if(pedido==="post-order"){
         if(this.left && this.left.depthFirstForEach(cb,pedido));
         if(this.right && this.right.depthFirstForEach(cb,pedido));
         cb(this.value);
      };

      if(pedido==="pre-order"){
         cb(this.value);
         if(this.left && this.left.depthFirstForEach(cb,pedido));
         if(this.right && this.right.depthFirstForEach(cb,pedido));
      };
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array =[]){
   if(this.left !== null){
      array.push(this.left);
   };

   if(this.right !== null){
      array.push(this.right);
   };

   cb(this.value)

   if(array.length>0){
      array.shift().breadthFirstForEach(cb, array)
   }

}

BinarySearchTree.prototype.size = function(){

   // if(!this.left && !this.right){
   //    return 0;
   // }else{
	// 	if(this.left && !this.right){
	// 		return this.left.size() + 1;
	// 	}else if(!this.left && this.right){
	// 		return this.right.size() + 1;
	// 	}else{
	// 		return max(this.left.size() + 1, this.right.size() + 1 );
	// 	}
	// }
   if(this.right === null && this.left === null) return 1;

   if(this.left !== null && this.right === null) return 1 + this.left.size();

   if(this.left === null && this.right !== null) return 1 + this.right.size();

   if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
   

   // let counter = 1;

   // if(this.left) counter+= this.left.size();
   // if(this.right) counter+= this.right.size();

   // return counter;
   
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
