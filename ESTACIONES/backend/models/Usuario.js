import { pool } from "../config/db.js";
import bcrypt from "bcrypt";

class Usuario {
  static async obtenerUsuarioPorEmail(correo) {
    const query = "SELECT * FROM usuarios WHERE correo = $1";
    const values = [correo];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearUsuario(usuarioData) {
    const { nombre, correo, contraseña } = usuarioData;
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const query =
      "INSERT INTO usuarios (nombre, correo, contraseña) VALUES ($1, $2, $3) RETURNING *";
    const values = [nombre, correo, hashedPassword];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async comprobarPassword(usuario, passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, usuario.contraseña);
  }

  static async actualizarUsuarioConfirmado(id, token) {
    const query =
      "UPDATE usuarios SET confirmado = true, token = '' WHERE id = $1 AND token = $2 RETURNING *";
    const values = [id, token];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarTokenOlvidePassword(id, token) {
    const query = "UPDATE usuarios SET token = $1 WHERE id = $2 RETURNING *";
    const values = [token, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarPassword(id, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query =
      "UPDATE usuarios SET contraseña = $1, token = '' WHERE id = $2 RETURNING *";
    const values = [hashedPassword, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Usuario;
