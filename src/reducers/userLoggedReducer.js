export const userLoggedInitial = {
    isAuthenticated: false,
    user: null
}

const userLoggedReducer = (state = userLoggedInitial, action) => { //Las funciones reductoras reciben dos parámetros y un objeto action ( action tiene 2 propiedades: que tipo de función se ejecutará para actualizar el estado userLogged (type) -> Tipo de acción a ejecutar, (payload) -> Toda la información que se requiere para que el estado sea actualizado)
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload);
            return action.payload;
        case 'LOGOUT':
            return userLoggedInitial;
        case 'UPDATEPROFILE':
            return action.payload;
        default:
            return state;
    }
}

export default userLoggedReducer;