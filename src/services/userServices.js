import axios from "axios";
// import { useEffect, useState } from "react";
import endpoints from "./endpoints";

export const getUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await axios.get(
      endpoints.userByEmailAndPassword(email, password)
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(endpoints.userByEmail(email));
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getUsers = async () => {
  try {
    const response = await axios.get(endpoints.users());
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// create an user
export const createUser = async (user) => {
  try {
    const response = await axios.get(endpoints.userByEmail(user.email));
    if (response.data.length > 0) return false;
    const {data, status} = await axios.post(endpoints.users(), user);
    if ( status<200 && status>=300) return null;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// update an user
export const updateUser = async (user) => {
  try {
    const {data, status} = await axios.put(endpoints.userById(user.id), user);
    if ( status<200 && status>=300) return null;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// delete an user
export const deleteUser = async (id) => {
  try {
    const {data, status} = await axios.delete(endpoints.userById(id));
    if ( status<200 && status>=300) return null;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
