import React, { useEffect, useState } from "react";
import { getAgencias } from "../src/services/agenciasService.js"; // Importamos el servicio
import Agencia from "../src/models/Agencia.js"; // Importamos el modelo

const Agencias = () => {
  const [agencias, setAgencias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAgencias();
      const agenciasData = data.map(agencia => new Agencia(agencia.agencyNum, agencia.name, agencia.numBookings));
      setAgencias(agenciasData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Agencias de Viajes</h2>
      <ul>
        {agencias.map((agencia, index) => (
          <li key={index}>
            <strong>{agencia.name}</strong> <br />
            🆔 <strong>ID:</strong> {agencia.agencyNum} <br />
            📅 <strong>Reservas:</strong> {agencia.numBookings} <br />
            ℹ️ {agencia.getFormattedInfo()} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agencias;
