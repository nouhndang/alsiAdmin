// import { createContext, useEffect, useReducer } from "react";
// import postsReducer from "./reducer";

// const INITIAL_STATE = {
//   posts: [],
//   post: "",
//   loading: false,
//   error: null,
// };
// export const postContext = createContext(INITIAL_STATE);
// export const PostContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(postsReducer, INITIAL_STATE);
//   return (
//     <postContext.Provider
//       value={{
//         posts: state.posts,
//         post: state.post,
//         loading: state.loading,
//         error: state.error,
//         mess: "hello test",
//         dispatch,
//       }}
//     >
//       {children}
//     </postContext.Provider>
//   );
// };
