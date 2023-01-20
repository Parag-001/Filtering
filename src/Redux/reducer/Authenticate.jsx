const intialdata = {
  isAuthenticate: false,
  login: false,
  toggle: true,
};
export const Authenticate = (state = intialdata, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        isAuthenticate: true,
      };
    case "LOGIN":
      return {
        ...state,
        login: true,
      };
    case "LOGINOUT":
      return {
        ...state,
        login: false,
      };
    case "TOGGALE":
      return {
        ...state,
        toggle: false,
      };
    case "ISTOGGALE":
      return {
        ...state,
        toggle: true,
      };
    case "AUTHENTICAT":
      return {
        ...state,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};
