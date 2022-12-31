import fetchRequest from "./fetchRequest.js";
import renderGoods from "./render.js";

const getGoods = (list) => {
  fetchRequest('https://shorthaired-veiled-fascinator.glitch.me/api/goods', {
    method: 'GET',
    callback: renderGoods,
    args: [list]
  })
};

export default getGoods;