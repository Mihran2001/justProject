import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import reducer, { initialState } from "./reducer";
import useRestaurant from "hooks/useRestaurant";
import { RestaurantTypeEnum } from "constants/restaurant";
import { ActionType } from "./actionTypes";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { DISH_PRODUCT_TYPE } from "constants/transaction";
import useProductGroup from "hooks/useProductGroup";
import useDishGroup from "hooks/useDishGroup";
import useProductType from "hooks/useProductType";
import useProduct from "hooks/useProduct";
import useDish from "hooks/useDish";
import useDepartment from "hooks/useDepartment";
import useProductTransactionType from "hooks/useProductTransactionType";
import useSupplier from "hooks/useSupplier";
import useCommonPaymentMethod from "hooks/useCommonPaymentMethod";
import useWarehouse from "hooks/useWarehouse";
import useRestaurantWarehouse from "hooks/useRestaurantWarehouse";
import usePartner from "hooks/usePartner";
import useExpense from "hooks/useExpense";
import useUnitOfMeasurement from "hooks/useUnitOfMeasurement";
import useProductWithdrawal from "components/productsWithdrawal/hooks/useProductWithdrawal";

const StateContext = createContext({});
const DispatchContext = createContext({});

const ProductsWithdrawalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

ProductsWithdrawalProvider.propTypes = {
  children: PropTypes.element,
};

const useProductsWithdrawalState = () => {
  const state = useContext(StateContext);

  if (typeof state === "undefined") {
    throw new Error(
      "useProductsWithdrawalState musts be used within a ProductsWithdrawalProvider"
    );
  }

  return state;
};

const useProductsWithdrawalDispatch = () => {
  const dispatch = useContext(DispatchContext);

  if (typeof dispatch === undefined) {
    throw new Error(
      "useProductsWithdrawalDispatch must be used within a ProductsWithdrawalProvider"
    );
  }

  const setTransactionDisabled = useCallback(
    (disabled) => {
      dispatch({ type: ActionType.SET_TRANSACTION_DISABLED, disabled });
    },
    [dispatch]
  );

  return {
    setTransactionDisabled,
  };
};

export {
  ProductsWithdrawalProvider,
  useProductsWithdrawalState,
  useProductsWithdrawalDispatch,
};
