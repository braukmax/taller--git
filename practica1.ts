class Producto {
  nombre: string;
  precio: number;
  stock: number;

  constructor(nombre: string, precio: number, stock: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad: number): void {
    if (this.stock >= cantidad) {
      this.stock -= cantidad;
      console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}.`);
    } else {
      console.log(`Stock insuficiente para vender ${cantidad} unidades de ${this.nombre}.`);
    }
  }

  mostrarInfo(): void {
    console.log(`Producto: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log(`Stock disponible: ${this.stock}`);
  }
}
const producto1 = new Producto("Laptop", 1500, 10);
const producto2 = new Producto("Teclado", 50, 5);


producto1.mostrarInfo();
producto2.mostrarInfo();


producto1.vender(2); 
producto2.vender(6); 


producto1.mostrarInfo();
producto2.mostrarInfo();
