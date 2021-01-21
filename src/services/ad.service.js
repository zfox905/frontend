import http from "../http-common";

class AdDataService {
  getAll() {
    return http.get("/ads");
  }

}

export default new AdDataService();