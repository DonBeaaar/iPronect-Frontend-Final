interface RespuestaCategoria {
  ok: boolean;
  message: string;
  categorias: Categoria[];
}

interface Categoria {
  _id: string;
  nombre: string;
}