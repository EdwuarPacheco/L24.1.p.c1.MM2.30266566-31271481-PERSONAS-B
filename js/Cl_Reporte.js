export default class Cl_Reporte{
    constructor(){
        this.acumEdad = 0.0;
        this.contPersonas = 0;
        this.mayorEdad = 0;
    }
    procesarPersona(p){
        this.contPersonas++;
        this.acumEdad += p.edad;

        if(p.sexo == 'F' && p.edad > this.mayorEdad){
            this.mayorEdad = p.edad;
        }
    }
    EdadMayor(){
        return this.mayorEdad;
    }
    promedioEdad(){
        return this.acumEdad/this.contPersonas;
    }
}