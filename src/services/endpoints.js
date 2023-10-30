const URL_BASE= "https://miniback-trip-booking-app.onrender.com/";


const endpoints = {
  userByEmailAndPassword:(email,password)=> `${URL_BASE}users?email=${email}&password=${password}`,
  userByEmail:(email)=> `${URL_BASE}users?email=${email}`,
  users: () => `${URL_BASE}users`,
  userById: (id) => `${URL_BASE}users/${id}`,
  trips: () => `${URL_BASE}trips`,
  tripById: (id) => `${URL_BASE}trips/${id}`,
  bookings: () => `${URL_BASE}bookings`,
}

export default endpoints;
