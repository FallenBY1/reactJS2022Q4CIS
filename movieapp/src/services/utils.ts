type SearchParams = {
  searchBy: string;
  filter: string;
  sortBy: string;
};

export function searchParamsToQueryString(params: SearchParams | null): string {
  return `http://localhost:4000/movies?searchBy=${params?.searchBy || ''}&filter=${params?.filter || ''}&sortBy=${params?.sortBy || ''}&sortOrder=asc`;
}
