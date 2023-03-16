class Persona{
    cedula
    nombre
    apellido
    fecha_nacimiento
    edad
    constructor(cedula,nombre,apellido,fecha_nacimiento,edad){
        this.cedula= cedula
        this.nombre= nombre
        this.apellido=apellido
        this.fecha_nacimiento=fecha_nacimiento
        this.edad=edad
    }
    edad(){
        
    }
}

let personas=[]
let nombre=document.getElementById('nombre')
let apellido=document.getElementById('apellido')
let fecha=document.getElementById('fecha')
let cedula=document.getElementById('cedula')
const formulario=document.getElementById('guardar')
let fechas= new Date();
console.log(fechas)

// console.log(fechas)
formulario.addEventListener('click',event=>{
    if(event.target.className=='guardar'){
        if(nombre==''|| apellido=='' || fecha=='' || cedula==''){
            alert('falta compĺetar un espacio')
        }
        const info= new Persona(nombre.value,apellido.value,(fechas.value-fecha.value),cedula.value)
        personas.push(info)
        console.log(personas)

    }
    
})
// console.log(informacion)