
export default class FetchHelpers {
  static handleErrors(response) {
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}
