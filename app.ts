console.log('hola mundo');

class Saludo{

    fecha : string;
    cliente : {
        identidad: string;
        nombre_completo : string;
    }; 
    pagos:{fecha:string,detalle:string,monto:number}[];

    constructor(
        fecha:string,
        cliente:{identidad:string,nombre_completo:string},
        pagos:{fecha:string,detalle:string,monto:number}[]
        ){
        this.fecha = fecha;
        this.cliente = cliente;
        this.pagos = pagos;
    }

    getNombre():void{
        console.log(this.cliente.nombre_completo);
    }

    getPagos():void{
        for(let pago of this.pagos){
            console.log(pago.fecha," ",pago.detalle," ",pago.monto);
        }
    }
};


let fecha:string = '04/12/2018';
let cliente:{identidad:string,nombre_completo:string}={
    identidad:'3484927',
    nombre_completo:'Marcelo Moscoso'
};
let pagos:{fecha:string,detalle:string,monto:number}[]=[
    {fecha:'12/05/2018',detalle:'pagos',monto:12.2},
    {fecha:'10/05/2018',detalle:'pagos',monto:10.0}
];

let saludo = new Saludo(fecha,cliente,pagos);

saludo.getNombre();
saludo.getPagos();

fecha='';
cliente={
    identidad:'',
    nombre_completo:''
};
pagos=[{fecha:'',detalle:'',monto:0}];

let saludo2 = new Saludo(fecha,cliente,pagos);
saludo2.getNombre();

console.log(JSON.stringify(saludo));