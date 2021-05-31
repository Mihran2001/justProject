import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from "react";
import { reducer } from "./reducer";
import uuid from "react-uuid";
import { InputNames } from "./inputNames";
import { AreasOfExpertiseInputsDiv } from "./Body/styled";
import { Input } from "antd";

export const Context = createContext({});

export default function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    nameSurName: "",
    profession: "",
    aboutYou: "",
    email: "",
    linkedIn: "",
    location: "",
    number: "",
    twiter: "",
    insta: "",
    expertiseInputs: [],
  });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export const useProviderDispatchHook = () => {
  const { dispatch } = useContext(Context);

  if (typeof dispatch === undefined) {
    throw new Error("Context is undefined");
  }

  const addAreasOfExpertise = useCallback(() => {
    dispatch({
      type: InputNames.EXPERTISEINPUTS,
      value: "",
      id: uuid(),
    });
  }, [dispatch]);

  const changeAreasOfExpertise = useCallback(
    (id, value) => {
      dispatch({
        type: InputNames.ADDEXPERTISEINPUT,
        id,
        value,
      });
    },
    [dispatch]
  );

  return {
    addAreasOfExpertise,
    changeAreasOfExpertise,
  };
};

export const useProviderStateHook = () => {
  const { state } = useContext(Context);

  if (typeof state === undefined) {
    throw new Error("Context is undefined");
  }

  return state;
};
