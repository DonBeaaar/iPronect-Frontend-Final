
interface Reserva{
    publicacion: string;
    vendedor?: Empresa;
    comprador?: Empresa;
    cantidad: number;
    fecha?: string;
    despacho?: boolean;
    preciodespacho?: boolean;
    precio: number;
}


interface Reservas {
  _id: string;
  publicacion: Publicacion;
  comprador: Empresa;
  vendedor: Empresa;
  cantidad: number;
  fecha: string;
  precio: number;
  despacho?: boolean;
}

