class Persona{
constructor(nombre,edad,genero){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    }
    obtDetalles(){
    return console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y me siento ${this.genero}`)
    }
}
let persona1 = new Persona("Germán", 34, "masculino");
persona1.obtDetalles();

class Estudiante extends Persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        return console.log(`                            Alumna: ${this.nombre}
                            Edad: ${this.edad}
                            Género: ${this.genero}
                            Curso: ${this.curso}
                            Grupo: ${this.grupo}`)
    }
}

let Sofia = new Estudiante("Sofia Pinilla",24, "Femenino", "BootCamp", "1A")
Sofia.registrar()


class Profesor extends Persona{
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        return console.log(`                            Profesor: ${this.nombre}
                            Edad: ${this.edad}
                            Género: ${this.genero}
                            Asignatura: ${this.asignatura}
                            Nivel: ${this.nivel}`)
    }
}

let Ger = new Profesor("Ger", 24, "Masculino", "Porgramación", "Senior")
Ger.asignar()

//EXTRA

class Warrior{
    constructor(life,power){
    this.life = life
    this.power = power
    }   
    attack(){
        return this.power
    }
    defend(damage){
        return this.life -= damage
    }
}

class Maya extends Warrior{
    constructor(life, power){
        super(life,power)
    }
    drinkColaCao(){
        return this.power += 10
    }
}

let soldadoMaya = new Maya(100,40);

class Aztec extends Warrior{
    constructor(life,power){
        super(life,power)
    }
    drinkNesquik(){
        return this.life = this.life + 10
    }
}

let soldadoAzteca = new Aztec(120,30)

console.log(`El soldado Azteca bebe su rico Nesquick para aumentar su vida \n\nVida aumentada a: ${soldadoAzteca.drinkNesquik()}\n\nEl soldado Maya mira envidioso al soldado azteca y decide beber su rico ColaCao para aumentar su fuerza \n\nFuerza aumentada a: ${soldadoMaya.drinkColaCao()}\n\nEl Maya se vuelve super loco y ataca al azteca con una fuerza de ataque de: ${soldadoMaya.attack()}\n\nEl Azteca no lo ve venir y recibe el guantazo quedándose a ${soldadoAzteca.defend(soldadoMaya.attack())} de vida.Tras esto el Azteca decide contraatacar con una fuerza de ${soldadoAzteca.attack()}\nEl Maya extasiado por su ColaCao no ve venir el guantazo y se queda a ${soldadoMaya.defend(soldadoAzteca.attack())} vida`);







