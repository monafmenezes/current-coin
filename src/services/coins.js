import { api } from "./api";

export default {
  list: (coin) => {
    return api.get(
      `/coins/markets?vs_currency=brl&ids=${coin}&order=market_cap_desc&sparkline=false`
    );
  },
  listDateTime: (coin, unixTimestamp, unixDateAtt) => {
    return api.get(
      `/coins/${coin}/market_chart/range?vs_currency=brl&from=${unixTimestamp}&to=${unixDateAtt}`
    );
  },
};
