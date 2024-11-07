const axios = require("axios");

const fetchData = async () => {
  const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
  return response.data;
};

module.exports = fetchData;
