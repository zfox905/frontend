export function getList() {
  return fetch('http://127.0.0.1:8080/api/brands')
    .then(data => data.json())
}

export function getCellsFromBrand(brand) {
  return fetch('http://127.0.0.1:8080/api/cells?id='+brand)
    .then(data => data.json())
}