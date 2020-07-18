interface RespuestaComentario {
  ok: boolean;
  message: string;
  comentarios: Comentario[];
}

interface Comentario {
  _id: string;
  empresa: Empresa;
  publicacion: string;
  comentario: string;
  __v: number;
}
