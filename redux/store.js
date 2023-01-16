// // ===== add to cart # 2=========
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });
// ===>
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
