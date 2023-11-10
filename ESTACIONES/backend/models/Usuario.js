import { pool } from "../config/db.js";
import bcrypt from "bcrypt";

class Usuario {
  static async obtenerUsuarioPorEmail(email) {
    const query = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearUsuario(usuarioData) {
    const { nombre, email, password } = usuarioData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO usuarios (nombre, email, password, token) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [nombre, email, hashedPassword, hashedPassword];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async comprobarPassword(usuario, passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, usuario.password);
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
