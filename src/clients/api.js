import request from 'browser-request';

class ApiClient {
    constructor(config) {
        this.apiUrl = `${config.baseUrl}/?apikey=${config.apiKey}`;
        this.page = 1;
    }

    getAllMovies() {
      const options = this._getAllMoviesRequestOptions();
      return this._makeRequest(options);
    }

    getMovieInfo(id) {
      const options = this._getMovieInfoRequestOptions(id);
      return this._makeRequest(options);
    }

    _getMovieInfoRequestOptions(id) {
      return {
        method: 'GET',
        url: `${this.apiUrl}&i=${id}`
      };
    }

    _getAllMoviesRequestOptions() {
      return {
        method: 'GET',
        url: '/api/all'
      };
    }

    _makeRequest(options) {
      return new Promise((resolve, reject) => {
          request(options, (err, res, body) => {
              if (err) reject(err);
              else resolve(body);
          });
      });
    }
}

const config = { baseUrl: 'https://www.omdbapi.com/', apiKey: '6808da72' };
export const Api = new ApiClient(config);
