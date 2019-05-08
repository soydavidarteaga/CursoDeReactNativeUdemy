import apisauce from "apisauce"

let instance = null;

const create = (baseURL = "https://my-json-server.typicode.com/soydavidarteaga/dbRecipesApp") => {
  if (instance !== null) {
    return instance;
  }
    const api = apisauce.create({
        baseURL,
        headers: {
        "Cache-Control": "no-cache",
        Accept: "application/json; version=0",
        "Content-Type": "application/json"
        },
        timeout: 15000
    });

    api.getCategories = () => {
        return api.get("/categories");
    };

    api.getRecipes = filter => {
        return api.get("/recipes", {
          categoryId: filter,
          _expand: "category"
        });
      };
    
    api.getFavorites = () => {
        return api.get("/recipes",{
            favorite:1,
            _expand:"category"
        })
    }

    api.getRecomended = () => {
        return api.get("/recipes",{
            recommended:1,
            _expand:"category"
        })
    }

    instance = api;
    return instance;
}

export default {
    create
}