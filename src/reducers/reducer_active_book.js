//state argument is not application state,
//only state of the reducer it's responsible for
//all reducers get a state argument. Reducers are used when an action is called
export default function(state = null, action){
	//es6 syntax - when state argument comes in, if it's undefined - set it to null
	//redux doesnt allow to return undefined
	console.log(action.type);
	switch (action.type){
	//we only care if the book was selected
	//then we return action.payload which is a selected book
	case 'BOOK_SELECTED':
		return action.payload
	}
	//if action is not applicable, just pass through state
	return state
}



