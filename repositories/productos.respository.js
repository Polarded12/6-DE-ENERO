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
        const Producto = this.getById(id);
        if (Producto) {
            const index = this.productos.findIndex((p) => p.id === id);
            this.productos[index] = { ...Producto, ...producto };
            return this.productos[index];
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

module.exports = { ProductosRepository };