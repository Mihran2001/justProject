import { InputNames } from "./inputNames";

export const reducer = (state, action) => {
  if (action.type === InputNames.NAME) {
    return {
      ...state,
      nameSurName: action.value,
    };
  } else if (action.type === InputNames.PROFESSION) {
    return {
      ...state,
      profession: action.value,
    };
  } else if (action.type === InputNames.ABOUTYOU) {
    return {
      ...state,
      aboutYou: action.value,
    };
  } else if (action.type === InputNames.EMAIL) {
    return {
      ...state,
      email: action.value,
    };
  } else if (action.type === InputNames.LINKEDIN) {
    return {
      ...state,
      linkedIn: action.value,
    };
  } else if (action.type === InputNames.LOCATION) {
    return {
      ...state,
      location: action.value,
    };
  } else if (action.type === InputNames.NUMBER) {
    return {
      ...state,
      number: action.value,
    };
  } else if (action.type === InputNames.TWITER) {
    return {
      ...state,
      twiter: action.value,
    };
  } else if (action.type === InputNames.INSTA) {
    return {
      ...state,
      insta: action.value,
    };
  } else if (action.type === InputNames.EXPERTISEINPUTS) {
    return {
      ...state,
      expertiseInputs: [...state.expertiseInputs, action],
    };
  } else if (action.type === InputNames.ADDEXPERTISEINPUT) {
    const changedExpertiseInputs = state.expertiseInputs.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          value: action.value,
        };
      }
      return item;
    });
    return { ...state, expertiseInputs: changedExpertiseInputs };
  } else if (action.type === InputNames.CERTIFICATEINPUTES) {
    return {
      ...state,
      certificateInputes: [...state.certificateInputes, action],
    };
  } else if (action.type === InputNames.CHANGECERTIFICATEINPUTEVALUE) {
    const changedCertificateInputs = state.certificateInputes.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          value: action.value,
        };
      }
      return item;
    });
    return { ...state, certificateInputes: changedCertificateInputs };
  } else if (action.type === InputNames.ADDEDUCATION) {
    return {
      ...state,
      educationInputes: [...state.educationInputes, action],
    };
  } else if (action.type === InputNames.CHANGEEDUCATIONVALUE) {
    const { keyName } = action;
    const mapedInput = state.educationInputes.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          value: {
            ...item.value,
            [keyName]: action.value,
          },
        };
      }
      return item;
    });
    return { ...state, educationInputes: mapedInput };
  }
};
