interface RespuestaProducto {
  ok: boolean;
  message: string;
  productos: Producto[];
}

interface Producto {
  _id: string;
  nombre: string;
  categoria: Categoria;
}
