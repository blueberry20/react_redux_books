export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property. payload is more info about the action
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}