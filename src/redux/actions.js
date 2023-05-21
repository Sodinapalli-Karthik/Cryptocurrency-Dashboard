import axios from "axios";
import * as type from "./constants";


export const barChartDetailsSuccess = (res) => ({
  type: type.BAR_CHART_DETAILS_SUCCESS,
  payload: res,
});

export const lineChartDetailsSuccess = (res) => ({
  type: type.LINE_CHART_DEATILS_SUCCESS,
  payload: res,
});

export const selectedCurrencySuccess = (res) => ({
  type: type.SELECTED_CURRENCY_SUCCESS,
  payload: res,
});
export const currencyListSuccess = (res) => ({
  type: type.CURRENCY_LIST_SUCCESS,
  payload: res,
});

export const barChartDetailsFailure = (err) => ({
  type: type.BAR_CHART_DETAILS_FAILURE,
  payload: err,
});

export const lineChartDetailsFailure = (err) => ({
  type: type.LINE_CHART_DEATILS_FAILURE,
  payload: err,
});

export const currencyListFailure = (err) => ({
  type: type.CURRENCY_LIST_FAILURE,
  payload: err,
});
export const selectedCurrencyFailure = (err) => ({
  type: type.SELECTED_CURRENCY_FAILURE,
  payload: err,
});




// export const currencyListAPI = () => (dispatch) => {
//   let result = {};
//   return axios
//     .get(
//       `https://api.coingecko.com/api/v3/coins/list?include_platform=${true}`,
//       {
//         headers: {
//         }
//       }
//     )
//     .then((res) => {
//       result.data = res.data;
//       console.log("helo", result.data)
//       // dispatch(currencyListSuccess(result.data));
//     })
//     .catch((err) => {
//       console.log(err)
//     });
// };




export const currencyMarketListAPI = () => (dispatch) => {
  let result = {};
  return axios
    .get(
      `
      https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=${true}&locale=en

      `,
      {
        headers: {
        }
      }
    )
    .then((res) => {
      result.data = res.data;
      console.log("heloool ", result.data)
      dispatch(currencyListSuccess(result.data));
    })
    .catch((err) => {
      console.log(err)
    });
};


export const graphMarketListAPI = (fromDate,toDate) => (dispatch) => {
  let result = {};
  return axios
    .get(
      ` 
      https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1493098674&to=1682420874

      `,
      {
        headers: {
        }
      }
    )
    .then((res) => {
      result.data = res.data;
      
      result.data.prices.map((pricelist)=>{
        pricelist[0]= new Date(pricelist[0]).getMonth().toLocaleString('default', { month: 'long' })

      })
      console.log("hell",result.data)
      dispatch(lineChartDetailsSuccess(result.data))
      dispatch(barChartDetailsSuccess(result.data)) ;
    })
    .catch((err) => {
      console.log(err)
    });
};