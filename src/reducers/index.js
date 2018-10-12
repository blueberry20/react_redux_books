import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
//looks like whatever is returned from the path above becomes ActiveBook

//Reducers are always functions that return a piece of state

//any key in combineReducers is available in global state
const rootReducer = combineReducers({
  	books: BooksReducer,
	//books is a piece of state. connects booksReducer to the array of objects inside reducer_books.js
	activeBook: ActiveBook
});

export default rootReducer;
