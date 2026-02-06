class ProductosRepository {
    constructor() {
        this.productos = [];
        this.netxId = 1;
    }
    getAll() {
        return this.productos;
    }
    getById(id) {
        return this.productos.find((p) => p.id === id);
    }
    create(producto) {
        const newProducto = { id: this.netxId++, ...producto };
        this.productos.push(newProducto);
        return newProducto;
    }

    update(id, producto) {
        const producto= this.getById(id);
        if (producto) {
            producto.nombre = producto.nombre || producto.nombre;
            producto.precio = producto.precio || producto.precio;
            return producto;
        }
       
    }
    delete(id) {
        const index = this.productos.findIndex((p) => p.id === id);
        if (index !== -1) {
            this.productos.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = ProductosRepository;