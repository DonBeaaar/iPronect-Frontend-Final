
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