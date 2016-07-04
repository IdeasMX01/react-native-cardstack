React Native Card Stack
=========================

Built for React Native, this component is based on [cameronbourke.github.io/react-cardstack](http://cameronbourke.github.io/react-cardstack).  Allows you to achieve a UI similar to the iOS passbook app. This is a beta version, so you don’t have to expect a final solution.

## NPM

This module isn't yet in the npm repository.

## Usage

React Card Stack exports an object with two components. These are `CardStack` and `Card`. The `CardStack` component is responsible for holding the state of it's child `Card` components. However, this is abstracted away which makes using the component a whole deal simpler. **Note: there must be at least two instances of Card as children of CardStack, otherwise the component will throw an error**.

In cameronbourke’s example (reactJS) all the card is clickable. In mobile devices was a problem because if you want to scroll the content the card was pressed and closed. To fix this problem in mobile, we should have two components inside the card: CardTouchable and CardContent. Only when you touch the CardTouchable the card is opened or closed.

In the example below CardTouchable is the first view inside Card. And CardContent is the second View.

An example use of React Native Card Stack looks like:

```js
import { CardStack, Card } from 'react—native-cardstack';

<CardStack
	height={500}
	width={400}
	background='#f8f8f8'
	hoverOffset={125}>

	<Card background='#2980B9'>
		<View>
			<Text>Title</Text>
			<Text>Subtitle</Text>
		</View>
		<View>
			<Text>Content</Text>
		</View>
	</Card>

	<Card background='#27AE60'>
		<View>
			<Text>Title</Text>
			<Text>Subtitle</Text>
		</View>
		<View>
			<Text>Content</Text>
		</View>
	</Card>

</CardStack>
```

The `Card` component wraps around the content you want to render for each card. You can render both elements or components inside `Card`.

### Figuring out the Header Height

When all `Card` components are collapsed, the top of each card will be visible. This is basically the header of the `Card` component.
The size of the header will be the hoverOffset passed in the props to CardStack.

## Options

### CardStack

Property  		| Type 	  | Default | Description
------------- 		| -------------     | ------ 				| --------
width       		| number | 350px    | the width of the component. In the example takes the width of the display’s height.
height      		| number | 500px    | the height of the component. In the example takes the width of the display’s width.
background  		| string | f8f8f8   | can be a hex, rgba, gradiant value or a url()
headerTouchableHeight 	| number | 30px     | how far the card will shift up when being hovered

### Card

Property  | Type | Default | Description
------------- | ------------- | ------- | -------
background  | string | undefined | can be a hex, rgba, gradiant value or a url()
cardClicked | func   | undefined | read below for description on how to use

`cardClicked` is a prop which can be passed to `Card`. It takes a function, acting as a callback, and will get invoked when a user clicks on the card in which you passed it to. For example, look below:

```js
<Card
	background='#27AE60'
	cardClicked={this.handleCardClick.bind(this)}>
	<NumberTwo />
</Card>

// example of the function being bound
handleCardClick(isCardSelected) {
	console.log(isCardSelected);
}
```

When `this.handleCardClick` is invoked, it will receive the parameter `cardSelected` which will be a boolean describing whether there is currently a card selected or not.

## Notes about module installation

To install the module from example just execute:

```
npm install
```

to add the local module to the node_modules directory.

After execute npm install sometimes I got the following error: Requiring unknown module 'react-native-cardstack'.
To resolve this, you need to execute:

```
npm restart
```
to update the modules in your project.
Note: When I executed 'npm restart' I got the following message:

```
Failed at the CardStackDemo@0.0.1 start script 'node node_modules/react-native/local-cli/cli.js start'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
```

Anyway the error was solved.

## Todo

- Add Unit Tests

## License

MIT Licensed Copyright (c) Erik Gooven 2016
