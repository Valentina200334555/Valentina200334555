
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-massege-error").innerHTML =""
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-massege-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }


    
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMisnatch",
    "customError",

];

const mensajeDeError={
    nombre:{
        valueMissing:"El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing:"El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing:"El campo contraseña no puede estar vacio",
        patternMisnatch: "al menos 6 caracteres maximo 12, debe contener una letra minuscula, una mayuscula, un numeto y no puede contener caracteres especiales"
    },
    nacimiento:{
        valueMissing:"El campo nacimiento no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero:{
        valueMissing:"Este campo no puede estar vacio",
        customError: "El formato requerido es XXXXXXXXXX 10 numeros.",
    },
    direccion:{
        valueMissing:"Este campo no puede estar vacio",
        customError: "El direccion debe contar entre 10 a 40 caracteres.",
    },
    ciudad:{
        valueMissing:"Este campo no puede estar vacio",
        customError: "La ciudad debe contar entre 10 a 40 caracteres.",
    },
    estado:{
        valueMissing:"Este campo no puede estar vacio",
        customError: "El estado debe contar entre 10 a 40 caracteres.",
    },

}



const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach((error)=>{
        if(input.validity[error]){
            console.log(error)
            console.log(input.validity[tipoDeInput, error])
            console.log(mensajeDeError[tipoDeInput][error])
            mensaje=mensajeDeError[tipoDeErrores][error]
        }
    });
    return mensaje


function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (mayorDeEdad(fechaCliente)){
        mensaje="Debes tener al menos 18 años de edad"
    }

    input.setCustomvalidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciales = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    )

    return diferenciales <= fechaActual;
}}