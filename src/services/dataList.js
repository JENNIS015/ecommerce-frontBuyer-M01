import axios from "axios";
import { baseURL } from "../config/config";
class BaseService {
  constructor() {
    this.api = "/api/productos";
    this.categorias = "/categorias";
    this.tendencia = "/api/productos/categoria/633eb05b3e8d3a9cff44378c";
    this.precios = "/precios";
    this.colores = "/colores";
    this.code = "/api/code";
    this.features = "/api/productos/destacados";
  }

  async getData() {
    let url = `${baseURL}${this.api}`;
    return await axios.get(`${url}`);
  }
  async getCategorias() {
    let url = `${baseURL}${this.categorias}`;
    return await axios.get(`${url}`);
  }
  async getPrices() {
    let url = `${baseURL}${this.precios}`;
    return await axios.get(`${url}`);
  }
  async getColors() {
    let url = `${baseURL}${this.colores}`;
    return await axios.get(`${url}`);
  }
  async getFeatures() {
    let url = `${baseURL}${this.features}`;
    return await axios.get(`${url}`);
  }
  async getTrendy() {
    let url = `${baseURL}${this.tendencia}`;
    return await axios.get(`${url}`);
  }

  async getCode() {
    let url = `${baseURL}${this.code}`;
    return await axios.get(`${url}`);
  }

  async postOrden(formValue) {
    let url = `${baseURL}/api/pedido`;

    return await axios({
      method: "post",
      url: url,
      data: formValue,
    });
  }
}

export default new BaseService();
