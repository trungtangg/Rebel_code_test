import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/artists";

function artistUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getArtists() {
  return http.get(apiEndpoint);
}


export function toggleComplete(id) {
  if (id) {
    return http.put(artistUrl(id));
  }
}
