import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native'

const equalsZero = (num) => num === 0;
const errorMessage = 'CardStack component must have at least two child Card components. Please check the children of this CardStack instance.';

class CardStack extends React.Component {
	constructor (props) {
		super(props);
		const childrenLength = props.children.length || 1;
		//La altura de los encabezados (la parte visible de cada item) sera la del headerTouchableHeight
		const headerHeight = this.props.headerTouchableHeight; //props.height / childrenLength;

		if (childrenLength <= 1) throw new Error(errorMessage);

		this.initialTopOffsets = props.children.map((child, i) => equalsZero(i) ? 0 : headerHeight * i);

		this.state = {
			topOffsets: this.initialTopOffsets,
			cardSelected: false,
		};
	}

	handleCardClick (id, cb) {
		console.log("CardStack-handleClick");
		const initialState = {
			topOffsets: [],
			cardSelected: true,
		};
		const {cardSelected} = this.state;

		const nextState = (prev, offset, index) => {
			const newOffset = (index === id) ? 0 : this.props.height;
			return {
				cardSelected: cardSelected ? false : true,
				topOffsets: [
					...prev.topOffsets,
					cardSelected ? this.initialTopOffsets[index] : newOffset,
				],
			};
		};

		this.setState(this.state.topOffsets.reduce(nextState, initialState));

		if (cb) cb(this.state.cardSelected, id);
	}

	renderCards () {
		//Le pasamos heightVisible como height. Para que el alto solo sea lo visible de la pantalla.
		const cloneCard = (child, i) => React.cloneElement(child, {
			key: i,
			cardId: i,
			headerTouchableHeight: this.props.headerTouchableHeight,
			cardSelected: this.state.cardSelected,
			height: this.props.heightVisible,
			width: this.props.width,
			topOffset: this.state.topOffsets[i],
			onClick: this.handleCardClick.bind(this),
		});
		return this.props.children.map(cloneCard);
	}

	render () {
		const childrenLength = this.props.children.length || 1;
		const stackMinimizadoHeight = this.props.headerTouchableHeight*childrenLength;

		const variableHeight = this.state.cardSelected ? this.props.heightVisible : ( (stackMinimizadoHeight<this.props.heightVisible)? stackMinimizadoHeight : this.props.heightVisible );

		const stackStyles = {
			...styles,
			backgroundColor: this.props.background,
			height: variableHeight,
			width: this.props.width,
		};
		return (
			<View style={stackStyles}>
				{this.renderCards()}
			</View>
		);
	}
}

const styles = {
	flex: 1,
	flexDirection: 'column',
	position: 'relative',
	overflow: 'hidden',
	padding: 0,
	margin: 0,
};

CardStack.propTypes = {
	backgroundColor: React.PropTypes.string,
	height: React.PropTypes.number,
	headerTouchableHeight: React.PropTypes.number,
	width: React.PropTypes.number,
};

CardStack.defaultProps = {
	width: 350,
	height: 600,
	heightVisible: 600,
	backgroundColor: '#f8f8f8',
	headerTouchableHeight: 30,
};

export default CardStack;
