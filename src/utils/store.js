import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarSlice,
    search: searchSlice,
  },
});

export default store;
