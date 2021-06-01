import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from "react";
import { reducer } from "./reducer";
import uuid from "react-uuid";
import { InputNames } from "./inputNames";

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
    certificateInputes: [],
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

  const addCertificate = useCallback(() => {
    dispatch({
      type: InputNames.CERTIFICATEINPUTES,
      value: "",
      id: uuid(),
    });
  }, [dispatch]);

  const changeCertificate = useCallback(
    (id, value) => {
      dispatch({
        type: InputNames.CHANGECERTIFICATEINPUTEVALUE,
        id,
        value,
      });
    },
    [dispatch]
  );

  return {
    addAreasOfExpertise,
    changeAreasOfExpertise,
    addCertificate,
    changeCertificate,
  };
};

export const useProviderStateHook = () => {
  const { state } = useContext(Context);

  if (typeof state === undefined) {
    throw new Error("Context is undefined");
  }

  return state;
};
