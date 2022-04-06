const getData = () => {
  return fetch("http://localhost:3001/api/v1/tricks")
}

export default getData;
