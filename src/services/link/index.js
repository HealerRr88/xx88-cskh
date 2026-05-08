import * as apiUrls from "../api_url";
import { get } from "../api_helpers";

export default class LinkService {
  async getAll() {
    try {
      return await get(
        apiUrls.LINKS_GET_ALL,
        apiUrls.LINKS_GET_ALL_WORKER,
        {
          'Content-Type': 'application/json',
        }
      );
    } catch (error) {
      throw error;
    }
  }
}