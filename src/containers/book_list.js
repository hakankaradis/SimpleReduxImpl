import React, {Component} from 'React';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	constructor(props){
		super(props);

		console.log("props", props);
	}
	
	renderList() {

		return this.props.books.map( (book) => {
			return (
				<li 
				onClick= {() => this.props.selectBook(book)}
				className="list-group-item" 
				key={book.title}> {book.title} </li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}

}

function mapStateToProps(state) {
	// whatever is returned will show up as props
	// inside of BookList
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as 
// on the BookList container
function mapDispatchToPros(dispatch) {
	// whenever selectBook is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote book list from component to container -  it needs to know 
// about this new  dispatch method, selectBook. Make it available
// as a props
export default connect(mapStateToProps, mapDispatchToPros)(BookList);