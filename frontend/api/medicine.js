export const getMedicines = (params) => {
  return axios.get('/medicines', { params })
}