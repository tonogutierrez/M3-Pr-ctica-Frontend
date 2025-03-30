import axios from "axios";

const API_URL = "http://localhost:4000/api/agencias";

export const getAgencias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las agencias", error);
    return [];
  }
};
