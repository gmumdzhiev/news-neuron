import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "../screens/Feeds/News/components/NewsFeed/reducer";
import { headlinesReducer } from "../screens/Feeds/News/components/NewsHeadlines/reducer";
import { techReducer } from "../screens/Feeds/Tech/components/TechFeed/reducer"
import { techHeadlineReducer } from "../screens/Feeds/Tech/components/TechHeadlines/reducer"
import { localReducer } from '../screens/Feeds/Local/components/LocalFeed/reducer'
import { localHeadlinesReducer } from "../screens/Feeds/Local/components/LocalHeadlines/reducer";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsHeadlines: headlinesReducer,
    tech: techReducer,
    techHeadlines: techHeadlineReducer,
    local: localReducer,
    localHeadlines: localHeadlinesReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
