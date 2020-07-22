export class Reserva {
    public publicacion: string;
    public vendedor?: Empresa;
    public comprador?: Empresa;
    public cantidad: number;
    public fecha?: string;
    public despacho?: boolean;
    public preciodespacho?: boolean;
    public precio: number;

    constructor(
        publicacion: string,
        cantidad: number,
        despacho: boolean,
        precio: number
    ){
        this.publicacion = publicacion;
        this.cantidad = cantidad;
        this.despacho = despacho;
        this.precio = precio;
    }
}
