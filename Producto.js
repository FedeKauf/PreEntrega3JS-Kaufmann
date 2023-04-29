class Producto {
    nombre;
    marca;
    talle;
    color;
    cantidad;
    precio;
    id;

constructor (id,nombre,precio,cantidad,marca,talle, color){
    this.id = id
    this.nombre = nombre
    this.marca = marca
    this.talle = talle
    this.color = color
    this.cantidad = cantidad
    this.precio = precio
    
    
    
    
}

    subTotal = () => {
        return this.precio*this.cantidad;
    }
}