import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native'

class Card extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			hover: false,
		};
	}

	handleClick () {
    console.log("Card-handleClick");
		const {cardId, cardClicked} = this.props;
		this.props.onClick(cardId, cardClicked);
		this.setState({ hover: false });
	}

	render () {
		const {cardId, cardSelected, topOffset, headerTouchableHeight} = this.props;
		const offset = (cardId !== 0) && this.state.hover && !cardSelected ? headerTouchableHeight : 0;
    const transform = [
            {'translate':[0,(topOffset - offset),cardId]}
        ];
		//const transform = `translate3d(0,${topOffset - offset}px,0)`;
		const cardStyles = {
			...styles,
			backgroundColor: this.props.background,
      "transform": transform,
      //transform: [{'translate':[0,0,1]}],
      //"top": offset,
			height: this.props.height,
      width: this.props.width,
		};
		return (
        <View style={cardStyles}>
            <View style={{ top: 0 }}  >
              <TouchableHighlight  onPress={this.handleClick.bind(this)}>
                <View>
                  {this.props.children[0]}
                </View>
              </TouchableHighlight>
              {this.props.children[1]}
            </View>
				</View>
		);
	}
}

const styles = {
	flex: 1,
	top: 0,
  position: 'absolute'
	//transition: '0.5s transform ease',
	//WebkitTransition: '-webkit-transform 0.5s ease',
};

export default Card;
