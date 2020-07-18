
interface RespuestaLogin {
  ok: boolean;
  message: string;
  token: string;
  empresa?: Empresa;
}
interface RespuestaToken {
  ok: boolean;
  empresa?: Empresa;
}
