import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map((book) =>{
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
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

function mapStateToProps(state){
	//built in function name. whatever is returned here will show up inside of BookList
	return {
		books: state.books
	}
	//our state has 2 props now: books and activeBook. state.books has array of books from reducer_books?
	//this is what connects redux and react
}

export default connect(mapStateToProps)(BookList);