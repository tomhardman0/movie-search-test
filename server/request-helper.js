const request = require('request-promise-native');
const memoize = require('lodash.memoize');

const _getMoviesForPage = (page) => {
  return {
    method: 'GET',
    url: `http://www.omdbapi.com/?apikey=6808da72&s=star&type=movie&y=2016&page=${page}`
  };
}

const getAllMovies = async () => {
  const firstSearchOpts = _getMoviesForPage(1);
  const firstSearchReq = await request(firstSearchOpts);
  const firstSearchData = JSON.parse(firstSearchReq);

  const resultsPerReq = firstSearchData.Search.length;
  const totalResults = Number(firstSearchData.totalResults);
  const fullPages = Math.floor(totalResults / resultsPerReq);
  const totalPages = fullPages + (totalResults % resultsPerReq > 0 ? 1 : 0);

  const requests = [];
  for (let i = 2; i <= totalPages; i++) {
    const options = _getMoviesForPage(i);
    requests.push(request(options));
  }

  return Promise.all(requests).then((pageData) => {
    const allPageData = pageData.reduce((accum, page) => {
      return [...accum, ...JSON.parse(page).Search];
    }, [])
    return [...firstSearchData.Search, ...allPageData];
  });

};

module.exports = memoize(getAllMovies);
