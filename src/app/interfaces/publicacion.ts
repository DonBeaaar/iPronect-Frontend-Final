
interface Publicacion {
  direccionRetiro: string[];
  imagenes: string[];
  estado: boolean;
  _id: string;
  empresa: Empresa;
  titulo: string;
  precio: string;
  descripcion: string;
  producto: Producto;
  stock: number;
  unidadMedida: string;
  tipoVenta: string;
  estadoPublicacion: string;
  despachoDomicilio?: boolean;
  precioDespacho?: number;
  observacion?: string;
}
