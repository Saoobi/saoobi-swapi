export async function searchItems(search) {
  //use of "proxy": "http://localhost:5000/" on package.json to call directly the backend
  const response = await fetch(`/search/${search}`);
  const result = await response.json();
  if (response.status !== 200) throw Error(result.message);
  return result;
}

export async function getItemCategoryById(category, id) {
  const response = await fetch(`/item/${category}/${id}`);
  const result = await response.json();
  if (response.status !== 200) throw Error(result.message);

  return result;
}
