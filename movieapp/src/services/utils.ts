import queryString, { ParsedQuery } from 'query-string';

type SearchParams = {
  searchBy: string;
  genre: string;
  sortBy: string;
  keyword: string;
  movie: string;
};

export function updateBrowserUrl(params: SearchParams | queryString.ParsedQuery): string {
  return queryString.stringify({ ...queryString.parseUrl(window.location.href).query, ...params });
}

export function searchParamsToQueryString(params: SearchParams | ParsedQuery): string {
  let searchString: string | Array<string | null> = '';
  let searchEndpoint = 'http://localhost:4000/movies?';
  let searchStringAddon = `&searchBy=title&sortBy=${params?.sortBy || 'id'}&sortOrder=desc`;
  if (params.keyword) {
    searchString += `search=${params?.keyword}&`;
  }
  if (params.genre) {
    searchString += `filter=${params?.genre}&`;
  }
  if (params.movie) {
    searchEndpoint = 'http://localhost:4000/movies/';
    searchString = params.movie;
    searchStringAddon = '';
  }

  return `${searchEndpoint}${searchString}${searchStringAddon}`;
}
