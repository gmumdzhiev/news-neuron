import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "../screens/Feeds/News/components/NewsFeed/reducer";
import { headlinesReducer } from "../screens/Feeds/News/components/NewsHeadlines/reducer";
import { favouritesReducer } from "../screens/Favourites/reducer";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsHeadlines: headlinesReducer,
    favourites: favouritesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
