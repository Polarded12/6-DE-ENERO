const {ProductosRepository} = require('../repositories/productos.respository');

const repo = new ProductosRepository();

function getAll(req,res){
    return res.json(repo.getAll())
}

function getById(req,res){
    const id =Number(req.params.id)
    const producto = repo.getById(id)

    if(!producto){
        return res.status(404).json(('El artiulo solicitado no existe'))
    }
}

function create (req,res){
    const {nombre, precio} = req.body

    if(!nombre || typeof nombre !== 'string' ){
        return res.status(400).json(('Nombre invalido'))
    }

    const precioNumber = Number(precio);
    if(!precioNumber || typeof precioNumber !== 'number' || precioNumber <= 0){
        return res.status(400).json(('Precio invalido'))
    }

    const nuevo = repo.create({nombre, precio: precioNumber})
    return res.status(201).json(nuevo)

}

function update(req,res){
    const id = Number(req.params.id)
    const actualizado = repo.getById(id)

    if(!actualizado){
        return res.status(404).json(('El articulo solicitado no existe'))
    }

    return res.json(actualizado)
}

function remove(req,res){
    const id = Number(req.params.id)
    const ok = repo.delete(id)
    if(!ok){
        return res.status(404).json(('El articulo solicitado no existe'))
    }
    return res.json({message: 'Articulo eliminado'})
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}

