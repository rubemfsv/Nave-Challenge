import { getToken } from './auth';

export const useFetch = async (
  URL: string,
  method = 'GET',
  body?: object,
): Promise<Response | any> => {
  const headers = new Headers();
  const response = await fetch(URL, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  headers.append('Authorization', `Bearer ${getToken()}`);
  headers.append('Content-type', 'application/json');

  if (response.status === 401) {
    (window as any).handleChangeAuth(false);
  } else if (response.status !== 200) {
    throw new Error(`${response.status}`);
  }
  return response;
};
