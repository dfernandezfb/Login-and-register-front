export const validateRegister = (values)=> {
    let errors = {};
    
    if (!values.name) {
        errors.name = 'Nombre requerido';
    } 
    if (values.name.length < 3 || values.name.length >20) {
        errors.name = 'El nombre debe tener entre 3 y 20 letras';
    }
    if (!values.lastname) {
        errors.name = 'Apellido requerido';
    } 
    if (values.lastname.length < 3 || values.lastname.length >20) {
        errors.name = 'El apellido debe tener entre 3 y 20 letras';
    }
    if(values.country==='No'){
        errors.country = 'Debes seleccionar un país de procedencia'
    }
    if (!values.email) {
        errors.email = 'Email requerido';
    } 
    if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Dirección de email invalida';
    }
    if (!values.password) {
        errors.password = 'Contraseña requerida';
    } 
    if (values.password.length < 8 || values.password.length > 16) {
        errors.password = 'La contraseña debe tener entre 8 y 16 caracteres';
    }
    if (!values.password2) {
        errors.password2 = 'Contraseña requerida';
    } 
    if (values.password2 !== values.password) {
        errors.password2 = 'Las contraseñas no coinciden';
    }
    return errors;
}

export const validateLogin = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email requerido';
    } 
    if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Dirección de email invalida';
    }
    if (!values.password) {
        errors.password = 'Contraseña requerida';
    }
    if (values.password.length < 8 || values.password.length > 16) {
        errors.password = 'La contraseña debe tener entre 8 y 16 caracteres';
    }
    return errors;
}