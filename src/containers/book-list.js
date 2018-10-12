import React, {Component} from 'react';
import {connect} from 'react-redux'; //import a single property from react-redux
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
//makes sure action flows through all reducers

//BookList -cares about when the list of books changes
class BookList extends Component {
	renderList(){
		return this.props.books.map((book) =>{
			return (
				<li 
				key={book.title} 
				onClick={() => this.props.selectBook(book)} //es6 - func with no params
				className="list-group-item">{book.title}</li>
			)
		})
		//we are going to wire up prop books to be inside BookList
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//state parameter is all app state
//when state changes, this container will instantly rerender with a new list of books
//look at the export statement on the bottom - BookList container will rerender
function mapStateToProps(state){
	//built in function name. whatever is returned here will show up inside of BookList
	//as this.props.books
	return {
		books: state.books
	}
	//our state has 2 props now: books and activeBook. state.books has array of books from reducer_books
	//this is what connects redux and react
}

// Anything returned from this function will end up as props
// on the BookList container
//this func makes sure the action is passed to all reducers

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to container. It needs to know about this new dispatch method,
//selectBook. Make it available as a prop.
//we dont want to export a class, but a container now
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

