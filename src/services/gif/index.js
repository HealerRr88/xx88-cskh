import * as apiUrls from "../api_url";

export default class GifService {

  async getAll() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(
        apiUrls.GIFS_GET_ALL,
        {
          method: 'GET',
          signal: controller.signal,
        });
      clearTimeout(timeoutId);
      return response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

}