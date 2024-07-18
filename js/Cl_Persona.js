export default class Cl_Persona{
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set edad(edad){
        this._edad = +edad;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    set sexo(sexo){
        this._sexo = sexo;
    }
    get sexo(){
        return this._sexo;
    }
}