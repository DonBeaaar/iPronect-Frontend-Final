interface RespuestaPerfil {
  ok: boolean;
  message: string;
  perfil: Perfil;
}

interface Perfil {
  empresa: Empresa;
  publicaciones: Publicacion[];
}

