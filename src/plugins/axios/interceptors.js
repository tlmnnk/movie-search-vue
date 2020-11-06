import config from '../../config';

function setParams(configuration) {
  const params = configuration.params || {};
  // eslint-disable-next-line no-param-reassign
  configuration.params = Object.assign(params, {
    apiKey: config.OMDB_API_KEY,
    plot: 'full',
  });

  return configuration;
}

function returnData(res) {
  return res.data;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
}
