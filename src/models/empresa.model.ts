export class Empresa{
    constructor(
        public email: string,
        public password: string,
        public nombre?: string,
        public telefono?: string,
        public direccion?: string,
        public patente?: string,
        public tipoEmpresa?: string,
        public recibePago?: boolean,
        public numeroCuenta?: string,
        public tipoCuenta?: string,
        public banco?: string,
        public rut?: string,
        public dv?: string,
    ){

    }
}
