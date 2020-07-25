const axios = require("axios");

//Function to get all categories from API
async function getCategories() {
  const urlPath = "https://swapi.dev/api/";

  try {
    const response = await axios.get(urlPath);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//Function to get the search result for one Category
async function searchOneItem(category, url, searchStr) {
  const urlPath = `${url}?search=${searchStr}`;

  try {
    const response = await axios.get(urlPath);
    const res = response.data;
    if (res.count > 0) {
      return res.results;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

async function searchAllItems(searchStr) {
  //Get all categories (species, people, planets,...) with their api url (ex : http://swapi/dev/api/people/)
  const categories = await getCategories();

  const resultSearch = [];

  for (const [key, value] of Object.entries(categories)) {
    const resultSearchOneItem = await searchOneItem(key, value, searchStr);
    if (Array.isArray(resultSearchOneItem)) {
      resultSearch.push(resultSearchOneItem);
    }
  }
  return resultSearch;
}

module.exports = [
  {
    method: "GET",
    path: "/search/{search}",
    handler: async (request, h) => {
      const search = request.params.search;
      return await searchAllItems(search);
    },
  },
];
