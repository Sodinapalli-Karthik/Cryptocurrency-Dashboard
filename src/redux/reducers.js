import * as type from "./constants";

const initialState = {
  barChartData: {},
  lineChartData: {},
  currencyListData: {},
  selectedCurrencyData: [],
  advSearchQueryCondition: "",
  loading: false,
  error: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, loading: action.payload };
    case type.BAR_CHART_DETAILS_SUCCESS:
      return { ...state, barChartData: action.payload };
    case type.LINE_CHART_DEATILS_SUCCESS:
      return { ...state, lineChartData: action.payload };
    case type.SELECTED_CURRENCY_SUCCESS:
      return { ...state, selectedCurrencyData: action.payload };
    case type.BAR_CHART_DETAILS_FAILURE:
      return state;
    case type.CURRENCY_LIST_SUCCESS:
      return { ...state, currencyListData: action.payload };
    case type.LINE_CHART_DEATILS_FAILURE:
      return state;
    case type.SELECTED_CURRENCY_FAILURE:
      return state;
    case type.CURRENCY_LIST_FAILURE:
      return state;

    // case type.COMPANY_RECEIPT_SUMMARY_ADV_SEARCH:
    //   return { ...state, advSearchQueryCondition: action.payload };

    default:
      return state;
  }
};

export default Reducer;