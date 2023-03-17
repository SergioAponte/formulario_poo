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

    nombre_completo(){
        return `${this.nombre} ${this.apellido}`
    }
    años(){
        let datos_años=this.fecha_nacimiento.split('-')
        año=datos_años[0]
        meses=datos_años[1]
        dia=datos_años[2]
        if (parseInt(fechas.getMonth()+1 === meses && parseInt(fechas.getDay() === dia))){
            return true
        }else{
            return false
        }
    }
}

let personas=[]
let nombre=document.getElementById('nombre')
let apellido=document.getElementById('apellido')
let fecha=document.getElementById('fecha')
let cedula=document.getElementById('cedula')
let nombre_apellido= document.getElementById('nombre_apellido')

let pregunta=document.getElementById('pregunta')
let mensajes=document.getElementById('mensaje')
const formulario=document.getElementById('guardar')
let fechas= new Date

formulario.addEventListener('click',event=>{
    if(event.target.className=='guardar'){
        if(nombre.value==''|| apellido.value=='' || fecha.value=='' || cedula.value==''){
            alert('falta compĺetar un espacio')
        }

        datos_años=fechas.value.split('-')
        año=datos_años[0]
        meses=datos_años[1]
        
        console.log(datos_años)

        const info= new Persona(cedula.value,nombre.value,apellido.value,())
        personas.push(info)
        console.log(personas)
        console.log(info.nombre_completo())

        const informacion=document.createElement('p')
        const pregunta2=document.createElement('p')
        const mensaje=document.createElement('p')

        nombre_apellido.append(informacion)
        pregunta.append(pregunta2)
        mensajes.append(mensaje)


        informacion.innerText=info.nombre_completo()
        

        if(años()){
            mensaje.innerText='FELIZ CUMPLEAÑ OS'
        }else{
            mensaje.innerText=''
        }

    }

    
})





