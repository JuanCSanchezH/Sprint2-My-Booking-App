const URL_BASE = 'https://miniback-trip-booking-app.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?email=${email}&&password=${password}`,
    tickets: (id) => `${URL_BASE}tickets?userID=${id}`
}

export default endpoints;