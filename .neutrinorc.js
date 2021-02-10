const reactComponents = require("@neutrinojs/react-components");
const airbnb = require("@neutrinojs/airbnb");

module.exports = {
  use: [airbnb(), reactComponents()],
};
