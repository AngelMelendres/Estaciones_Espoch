import { pool } from "../config/db.js";

class Estacion {
  static async obtenerTodasLasEstaciones() {
    const query = "SELECT * FROM estaciones";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerEstacionPorId(id) {
    const query = "SELECT * FROM estaciones WHERE id = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearEstacion(estacionData) {
    const {
      nombre,
      canton,
      parroquia,
      provincia,
      longitud,
      latitud,
      altura,
      imagen,
    } = estacionData;
    const query =
      "INSERT INTO estaciones (nombre, canton, parroquia, provincia, longitud, latitud, altura, imagen) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [
      nombre,
      canton,
      parroquia,
      provincia,
      longitud,
      latitud,
      altura,
      imagen,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarEstacion(id, estacionData) {
    const {
      nombre,
      canton,
      parroquia,
      provincia,
      longitud,
      latitud,
      altura,
      imagen,
    } = estacionData;
    const query =
      "UPDATE estaciones SET nombre = $1, canton = $2, parroquia = $3, provincia = $4, longitud = $5, latitud = $6, altura = $7, imagen = $8 WHERE id = $9 RETURNING *";
    const values = [
      nombre,
      canton,
      parroquia,
      provincia,
      longitud,
      latitud,
      altura,
      imagen,
      id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarEstacion(id) {
    const query = "DELETE FROM estaciones WHERE id = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Estacion;
