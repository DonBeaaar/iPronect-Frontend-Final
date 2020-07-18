export class Publicacion{

    public titulo: string;
    public precio: string;
    public descripcion: string;
    public unidadMedida: string;
    public producto: string;
    public despachoDomicilio: boolean;
    public stock: number;

    constructor(
        titulo: string,
        precio: string,
        descripcion: string,
        unidadMedida: string,
        producto: string,
        despachoDomicilio: boolean,
        stock: number
    ){
        this.titulo = titulo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.unidadMedida = unidadMedida;
        this.producto = producto;
        this.despachoDomicilio = despachoDomicilio;
        this.stock = stock;
    }
}
