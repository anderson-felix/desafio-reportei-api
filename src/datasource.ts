import Sequelize from 'sequelize';
import path from 'path';
let database = null;
const loadModels = (sequelize) => {
  const dir = path.join(__dirname, './../models/');
  const models = [];
  const filePages = path.join(dir, 'pages');
  const fileProducts = path.join(dir, 'products');

  const modelPages = sequelize.import(filePages);
  const modelProducts = sequelize.import(fileProducts);
  models[modelPages.name] = modelPages;
  models[modelProducts.name] = modelProducts;
  return models;
};
