import React, {Component} from 'React';
import {connect} from 'react-redux';

class BookDetail extends Component {
	render() {
		console.log("this.props", this.props.book);
		return (
			<div> 
				
				{this.props.book ? this.props.book.title : <div> Click one of them</div>}
			</div>
		);
	}

}

function mapStateToProps(state) {
	// whatever is returned will show up as props
	// inside of BookList
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);