import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from './reducers/User';
import {persistReducer, persistStore} from 'redux-persist';
import Category from './reducers/Category';
import Items from './reducers/Items';
const rootReducer = combineReducers({
  user: User,
  category: Category,
  items: Items,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistedStore = persistStore(store);
