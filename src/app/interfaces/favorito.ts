interface RespuestaFavorito {
  ok: boolean;
  message: string;
  favoritos: Favorito[];
}

interface Favorito {
  _id: string;
  publicacion: Publicacion;
  empresaVendedor: Empresa;
  empresaFavorito: Empresa;
}


interface RespuestaEmpresasFavorito {
  ok: boolean;
  message: string;
  empresasFavoritas: Favorito[];
}
