// function validarDNI() {
//     exito = true;
//     var dni = $('#nroDni')[0];

//     //DNI
//     if (dni.value === "" || isNaN(parseInt(dni.value)) || dni.value < 0 || dni.value.length < 7 || dni.value.length > 8) {
//         if (dni.classList.contains("is-valid")) {
//             dni.classList.remove("is-valid");
//         }
//         dni.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (dni.classList.contains("is-invalid")) {
//             dni.classList.remove("is-invalid");
//         }
//         dni.classList.add("is-valid");
//     }
//     return exito;
// };

// function isValidDate(dateString) {
//     var regEx = /^\d{4}-\d{2}-\d{2}$/;
//     if (!dateString.match(regEx)) return false; // Invalid format
//     var d = new Date(dateString);
//     if (Number.isNaN(d.getTime())) return false; // Invalid date
//     return d.toISOString().slice(0, 10) === dateString;
// };

// function validarPersona() {
//     exito = true;
//     var apellido = $('#apellido')[0];
//     var nombre = $('#nombre')[0];
//     var fechaNac = $('#fechaNac')[0];
//     var telefono = $('#telefono')[0];
//     var domiciclio = $('#domicilio')[0];

//     //Verificación apellido
//     if (apellido.value === "" || apellido.value.match(/^[0-9]+$/)) {
//         if (apellido.classList.contains("is-valid")) {
//             apellido.classList.remove("is-valid");
//         }
//         apellido.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (apellido.classList.contains("is-invalid")) {
//             apellido.classList.remove("is-invalid");
//         }
//         apellido.classList.add("is-valid");
//     }
//     //Verificación nombre
//     if (nombre.value === "" || nombre.value.match(/^[0-9]+$/)) {
//         if (nombre.classList.contains("is-valid")) {
//             nombre.classList.remove("is-valid");
//         }
//         nombre.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (nombre.classList.contains("is-invalid")) {
//             nombre.classList.remove("is-invalid");
//         }
//         nombre.classList.add("is-valid");
//     }
//     //Verificación telefono
//     if (telefono.value === "" || isNaN(parseInt(telefono.value)) || telefono.value < 0 || telefono.value.length > 10 || telefono.value.length < 7) {
//         if (telefono.classList.contains("is-valid")) {
//             telefono.classList.remove("is-valid");
//         }
//         telefono.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (telefono.classList.contains("is-invalid")) {
//             telefono.classList.remove("is-invalid");
//         }
//         telefono.classList.add("is-valid");
//     }
//     //Verificación domiciclio
//     if (domiciclio.value === "") {
//         if (domiciclio.classList.contains("is-valid")) {
//             domiciclio.classList.remove("is-valid");
//         }
//         domiciclio.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (domiciclio.classList.contains("is-invalid")) {
//             domiciclio.classList.remove("is-invalid");
//         }
//         domiciclio.classList.add("is-valid");
//     }

//     //Verificación fechaNac
//     if (fechaNac.value === "" || !isValidDate(fechaNac.value)) {
//         if (fechaNac.classList.contains("is-valid")) {
//             fechaNac.classList.remove("is-valid");
//         }
//         fechaNac.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (fechaNac.classList.contains("is-invalid")) {
//             fechaNac.classList.remove("is-invalid");
//         }
//         fechaNac.classList.add("is-valid");
//     }

//     return exito;
// };

// function validarPatente() {
//     var exito = true;
//     var patente = $('#patente')[0];


//     if (patente.value === "" || !patente.value.match(/[A-Z]{3} [0-9]{3}/)) {
//         if (patente.classList.contains("is-valid")) {
//             patente.classList.remove("is-valid");
//         }
//         patente.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (patente.classList.contains("is-invalid")) {
//             patente.classList.remove("is-invalid");
//         }
//         patente.classList.add("is-valid");
//     }
//     return exito;

// }

// function validarPersona() {
//     exito = true;

//     var dni = $('#dni')[0];
//     var apellido = $('#apellido')[0];
//     var nombre = $('#nombre')[0];
//     var fechaNac = $('#fechaDeNacimiento')[0];
//     var telefono = $('#telefono')[0];
//     var domiciclio = $('#domicilio')[0];

//     //Verificación apellido
//     if (dni.value === "" || isNaN(parseInt(dni.value)) || dni.value < 0 || dni.value.length < 7 || dni.value.length > 8) {
//         if (dni.classList.contains("is-valid")) {
//             dni.classList.remove("is-valid");
//         }
//         dni.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (dni.classList.contains("is-invalid")) {
//             dni.classList.remove("is-invalid");
//         }
//         dni.classList.add("is-valid");
//     }

//     //Verificación apellido
//     if (apellido.value === "" || apellido.value.match(/^[0-9]+$/)) {
//         if (apellido.classList.contains("is-valid")) {
//             apellido.classList.remove("is-valid");
//         }
//         apellido.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (apellido.classList.contains("is-invalid")) {
//             apellido.classList.remove("is-invalid");
//         }
//         apellido.classList.add("is-valid");
//     }
//     //Verificación nombre
//     if (nombre.value === "" || nombre.value.match(/^[0-9]+$/)) {
//         if (nombre.classList.contains("is-valid")) {
//             nombre.classList.remove("is-valid");
//         }
//         nombre.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (nombre.classList.contains("is-invalid")) {
//             nombre.classList.remove("is-invalid");
//         }
//         nombre.classList.add("is-valid");
//     }
//     //Verificación telefono
//     if (telefono.value === "" || isNaN(parseInt(telefono.value)) || telefono.value < 0 || telefono.value.length > 10 || telefono.value.length < 7) {
//         if (telefono.classList.contains("is-valid")) {
//             telefono.classList.remove("is-valid");
//         }
//         telefono.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (telefono.classList.contains("is-invalid")) {
//             telefono.classList.remove("is-invalid");
//         }
//         telefono.classList.add("is-valid");
//     }
//     //Verificación domiciclio
//     if (domiciclio.value === "") {
//         if (domiciclio.classList.contains("is-valid")) {
//             domiciclio.classList.remove("is-valid");
//         }
//         domiciclio.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (domiciclio.classList.contains("is-invalid")) {
//             domiciclio.classList.remove("is-invalid");
//         }
//         domiciclio.classList.add("is-valid");
//     }

//     //Verificación fechaNac
//     if (fechaNac.value === "" || !isValidDate(fechaNac.value)) {
//         if (fechaNac.classList.contains("is-valid")) {
//             fechaNac.classList.remove("is-valid");
//         }
//         fechaNac.classList.add("is-invalid");
//         exito = false;

//     } else {
//         if (fechaNac.classList.contains("is-invalid")) {
//             fechaNac.classList.remove("is-invalid");
//         }
//         fechaNac.classList.add("is-valid");
//     }

//     return exito;
// };

// function validarAuto() {

//     var exito = true;
//     var patente = $('#patente')[0];
//     var marca = $('#marca')[0];
//     var modelo = $('#modelo')[0];

//     if (patente.value === "" || !patente.value.match(/[A-Z]{3} [0-9]{3}/)) {
//         if (patente.classList.contains("is-valid")) {
//             patente.classList.remove("is-valid");
//         }
//         patente.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (patente.classList.contains("is-invalid")) {
//             patente.classList.remove("is-invalid");
//         }
//         patente.classList.add("is-valid");
//     }

//     if (marca.value === "") {
//         if (marca.classList.contains("is-valid")) {
//             marca.classList.remove("is-valid");
//         }
//         marca.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (marca.classList.contains("is-invalid")) {
//             marca.classList.remove("is-invalid");
//         }
//         marca.classList.add("is-valid");
//     }
//     if (modelo.value === "" || modelo.value.match(/^[A-Za-z]+$/)) {
//         if (modelo.classList.contains("is-valid")) {
//             modelo.classList.remove("is-valid");
//         }
//         modelo.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (modelo.classList.contains("is-invalid")) {
//             modelo.classList.remove("is-invalid");
//         }
//         modelo.classList.add("is-valid");
//     }

//     exito = validarPersona();

//     return exito;
// }

// function validarCambio() {
//     var exito = true;
//     var patente = $('#patente')[0];
//     var dni = $('#dni')[0];

//     //DNI
//     if (dni.value === "" || isNaN(parseInt(dni.value)) || dni.value < 0 || dni.value.length < 7 || dni.value.length > 8) {
//         if (dni.classList.contains("is-valid")) {
//             dni.classList.remove("is-valid");
//         }
//         dni.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (dni.classList.contains("is-invalid")) {
//             dni.classList.remove("is-invalid");
//         }
//         dni.classList.add("is-valid");
//     }

//     if (patente.value === "" || !patente.value.match(/[A-Z]{3} [0-9]{3}/)) {
//         if (patente.classList.contains("is-valid")) {
//             patente.classList.remove("is-valid");
//         }
//         patente.classList.add("is-invalid");
//         exito = false;
//     } else {
//         if (patente.classList.contains("is-invalid")) {
//             patente.classList.remove("is-invalid");
//         }
//         patente.classList.add("is-valid");
//     }

//     return exito;
// }

$(document).ready(function() {
    $('#tp4_eje2').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Patente: {
                validators: {
                    notEmpty: {
                        message: ' Debe ingresar una patente'
                    },
                    regexp: {
                        regexp: /^[A-ZÑ]{3}\s\d{3}$/,
                        message: 'Debe ser con este formato: LLL NNN.'
                    }
                }
            }
        },
    });
});

//EJERCICIO 6 - TP4
$(document).ready(function() {
    $('#tp4ej6').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                message: 'Nombre no valido',
                validators: {
                    notEmpty: {
                        message: 'El nombre es obligatorio'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: 'La primer letra en mayúscula. Solo letras.'
                    }
                }
            },
            apellido: {
                message: 'Apellido no valido',
                validators: {
                    notEmpty: {
                        message: 'El apellido es obligatorio'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: 'La primer letra en mayúscula. Solo letras.'
                    }
                }
            },
            nroDni: {
                message: 'DNI no valido',
                validators: {
                    notEmpty: {
                        message: 'El Dni es obligatorio'
                    },
                    regexp: {
                        regexp: /^\d{8}$/,
                        message: 'Debe ingresar 8 dígitos.'
                    }
                }
            },
            domicilio: {
                message: 'Domicilio invalido',
                validators: {
                    notEmpty: {
                        message: 'Se requiere un domicilio'
                    }
                }
            },
            fechaNac: {
                validators: {
                    notEmpty: {
                        message: 'Debe ingresar una fecha'
                    }
                }
            },
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese nro de teléfono'
                    }
                }
            }
        },
    });
});

//EJERCICIO 5 - TP4
$(document).ready(function() {
    $('#tp4_eje5').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Patente: {
                validators: {
                    notEmpty: {
                        message: ' Ingrese una patente'
                    },
                    regexp: {
                        regexp: /^[A-ZÑ]{3}\s\d{3}$/,
                        message: ' Formato: LLL NNN.'
                    }
                }
            },
            Marca: {
                message: 'Apellido no valido',
                validators: {
                    notEmpty: {
                        message: ' Ingrese una marca'
                    }
                }
            },
            DniDuenio: {
                message: 'Dni no valido',
                validators: {
                    notEmpty: {
                        message: ' El Dni es obligatorio'
                    },
                    regexp: {
                        regexp: /^\d{8}$/,
                        message: 'Debe ingresar 8 dígitos.'
                    }
                }
            },
            Modelo: {
                validators: {
                    notEmpty: {
                        message: ' Ingrese un modelo'
                    }
                }
            }
        },
    });
});

//EJERCICIO 6 - TP4
$(document).ready(function() {
    $('#tp4_eje6').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Patente: {
                validators: {
                    notEmpty: {
                        message: ' Debe ingresar una patente'
                    },
                    regexp: {
                        regexp: /^[A-ZÑ]{3}\s\d{3}$/,
                        message: ' Formato: LLL NNN.'
                    }
                }
            },
            DniDuenio: {
                message: 'Dni no valido',
                validators: {
                    notEmpty: {
                        message: ' El Dni es obligatorio'
                    },
                    regexp: {
                        regexp: /^\d{8}$/,
                        message: ' Debe ingresar 8 dígitos.'
                    }
                }
            },
            Dnicambio: {
                message: 'Dni no valido',
                validators: {
                    notEmpty: {
                        message: ' El Dni es obligatorio'
                    },
                    regexp: {
                        regexp: /^\d{8}$/,
                        message: ' Debe ingresar 8 dígitos.'
                    },
                    different: {
                        field: 'DniDuenio',
                        message: ' Debe ser distinto al dni del dueño'
                    }
                }
            }
        },
    });
});

//EJERCICIO 7 - TP4
$(document).ready(function() {
    $('#tp4_eje7').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            NroDni: {
                validators: {
                    notEmpty: {
                        message: ' El Dni es obligatorio'
                    },
                    regexp: {
                        regexp: /^\d{8}$/,
                        message: ' Debe ingresar 8 dígitos.'
                    }
                }
            }
        },
    });
});