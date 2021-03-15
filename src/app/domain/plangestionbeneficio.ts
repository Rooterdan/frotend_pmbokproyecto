export class PlanGestioBeneficio{

    constructor(
        public id_plan_gb:number,
        public acciones:string,
        public componentes:string,
        public productos:string,
        public servicios:string,
        public resultado:string,
        public EntradaActaId:number
    ){

    }
}