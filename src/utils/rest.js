/* eslint-disable no-unused-vars */
import axios from 'axios';

export const getQueryParams = (queryParams) => {
  let query = [];
  let queryKeys = Object.keys(queryParams);
  for (let i = 0; i < queryKeys.length; i += 1) {
    if (typeof queryParams[queryKeys[i]] === 'object') {
      query.push(...queryParams[queryKeys[i]].map((soloObjectParam) => (
        `${queryKeys[i]}=${soloObjectParam}`
      )));
    } else {
      query.push(`${queryKeys[i]}=${queryParams[queryKeys[i]]}`);
    }
  }
  return query.join('&');
};
const resolve = (response) => {
  switch (response.status) {
    case 200:
    case 201:
    case 202:
    case 204:
      return response;
      // return null;
    default:
      // console.warn(`Unknown response status: ${response.status}\n`, response);
      return null;
  }
};
const reject = (error) => {
  switch (error.response.status) {
    case 400:
    case 401:
    case 402:
    case 403:
      throw new Error(error.response.data.errorDescription ?? undefined);
    case 404:
      throw new Error('Страница не найдена');
    case 413:
      throw new Error(error.response.data.errorDescription ?? undefined);
    case 500:
    case 501:
    case 502:
      throw new Error('Произошла ошибка на сервере, попробуйте позже!');
    default:
      throw new Error('Неизвестная ошибка!');
  }
};

const options = ({
  method,
  url,
  body,
  path,
  queryParams,
  headers,
  responseType,
}) => {
  const tokenType = 'Bearer';
  const accessToken = localStorage.getItem('authToken');
  const urlPath = `${url ?? ''}${(queryParams && Object.keys(queryParams).length !== 0) ? `?${getQueryParams(queryParams)}` : ''}`;
  return {
    method,
    url: urlPath,
    ...responseType && { responseType },
    headers: {
      ...accessToken && { Authorization: `${tokenType} ${accessToken}` },
      ...headers,
    },
    data: body ?? null,
  };
};
const addToken = (authToken) => {
  localStorage.setItem('authToken', authToken);
};
const request = ({
  ...props
}) => axios(options(props))
  .then(
    (response) => resolve(response),
  ).catch((error) => { reject(error); });

const restAPI = () => {
  const restMethod = ({ method, ...opts }) => (
    args,
  ) => request({
    method,
    ...args,
    ...opts,
  });
  const get = restMethod({ method: 'GET' });
  const post = restMethod({ method: 'POST' });
  const put = restMethod({ method: 'PUT' });
  const patch = restMethod({ method: 'PATCH' });
  const remove = restMethod({ method: 'DELETE' });

  const drugs = (url) => ({
    getPopular: () => (
      get({
        url: `${url}/popular`,
      })
    ),
    getSearch: (value, params) => (
      get({
        url: `${url}${value}${params}`,
      })
    ),
    getAllCountries: () => (
      get({
        url: `${url}/allManufCountries`,
      })
    ),
    getFullSearch: (value) => (
      get({
        url: `${url}/${value}`,
      })
    ),
    getAnalogs: (value, page) => (
      get({
        url: `${url}/${value}/analogs?pageNumber=${page}`,
      })
    ),
    putImages: (id, formData) => (
      put({
        url: `${url}/${id}/setImage`,
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
        body: formData,
      })
    ),
  });

  return {
    drugs: drugs('/api'),
  };
};

export default restAPI();
