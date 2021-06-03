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
    educationInputes: [],
    languages: [],
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

  const addEducation = () => {
    dispatch({
      type: InputNames.ADDEDUCATION,
      id: uuid(),
      value: { universityName: "", faculty: "", date: "" },
    });
  };

  const changeEducationValue = useCallback(
    (id, value, keyName) => {
      dispatch({
        type: InputNames.CHANGEEDUCATIONVALUE,
        id,
        value,
        keyName,
      });
    },
    [dispatch]
  );

  const addLanguage = () => {
    dispatch({ type: InputNames.ADDLANGUAGE, id: uuid() });
  };

  const inputLanguage = (id, value) => {
    dispatch({ type: InputNames.INPUTLANGUAGE, id, value });
  };

  const handleBool = (id) => {
    dispatch({ type: InputNames.HANDLEBOOL, bool: true, id });
  };

  const handleLvl = (lvl, id) => {
    dispatch({ type: InputNames.HANDLELVL, id, lvl });
  };

  return {
    addAreasOfExpertise,
    changeAreasOfExpertise,
    addCertificate,
    changeCertificate,
    addEducation,
    changeEducationValue,
    addLanguage,
    inputLanguage,
    handleBool,
    handleLvl,
  };
};

export const useProviderStateHook = () => {
  const { state } = useContext(Context);

  if (typeof state === undefined) {
    throw new Error("Context is undefined");
  }

  return state;
};
