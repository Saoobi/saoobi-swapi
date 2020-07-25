const axios = require("axios");

const API = "https://swapi.dev/api/";

async function getItemCategoryById(category, id) {
  const urlPath = API + `${category}/${id}`;

  try {
    const response = await axios.get(urlPath);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = [
  {
    method: "GET",
    path: "/item/{category}/{id}",
    handler: async (request, h) => {
      const category = request.params.category;
      const id = request.params.id;

      return await getItemCategoryById(category, id);
    },
  },
];
