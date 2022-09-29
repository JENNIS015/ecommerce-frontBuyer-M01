import axios from "axios";
import { baseURL } from "../config/config";
class BaseService {
  constructor() {
    this.api = "/api/productos";
      this.code = "/api/code";
  }

  async getData() {
    let url = `${baseURL}${this.api}`;
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
    })
 
    }
}

export default new BaseService();
