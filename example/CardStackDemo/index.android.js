/**
 * React-Native CardStack
 * https://github.com/IdeasMX01/react-native-cardstack.git
 * @flow
 * @author Erik Gooven Arellano Casillas.
 * @website http://www.ideasmx.com.mx
 */

 'use-strict'

 import React,{Component} from 'react'
 import {
   AppRegistry,
   View,
   Text,
   StyleSheet,
   ListView,
   TouchableHighlight,
   Image,
   ScrollView
 } from 'react-native'

import { CardStack, Card } from 'react-native-cardstack';

var { Dimensions } = require('react-native')

var {height, width} = Dimensions.get('window');

const people = [{
	background: '#27AE60',//Verde
	imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pancho_villa_horseback.jpg/100px-Pancho_villa_horseback.jpg',
	imgBorderColor: '#015389',
	name: 'Pancho Villa',
	title: 'Revolution Leader',
	mobileNo: '0491 570 156',
	location: 'Durango, México',
	role: 'José Doroteo Arango Arámbula, más conocido por su seudónimo Francisco Villa o el hipocorístico de este, Pancho Villa, fue uno de los jefes de la revolución mexicana, cuya actuación militar fue decisiva para la derrota del régimen del entonces presidente Victoriano Huerta.'
}, {
	background: '#2980B9',//Azul
	imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Pedro_Infante_Cruz.jpg',
	imgBorderColor: '#086C32',
	name: 'Pedro Infante',
	title: 'Mexican Singer',
	mobileNo: '0491 570 157',
	location: 'Sinaloa, México',
	role: "Pedro Infante Cruz fue un cantante y actor mexicano, uno de los íconos de la Época de Oro del Cine Mexicano, así como uno de los grandes representantes de la música ranchera. A partir de 1939 apareció en más de 60 películas, y desde 1943 grabó aproximadamente 310 canciones."
}, {
	background: '#DF4948',//Rojo
	imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg',
	imgBorderColor: '#6A067A',
	name: 'Frida Kahlo',
	title: 'Mexican Painter',
	mobileNo: '0491 570 158',
	location: 'Coyoacán, México',
	role: "Magdalena Carmen Frida Kahlo Calderón, más conocida como Frida Kahlo, fue una pintora y poetisa mexicana. Casada con el célebre muralista mexicano Diego Rivera."
}, {
	background: '#e67e22',//Naranja
	imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Retrato_de_Sor_Juana_In%C3%A9s_de_la_Cruz_%28Miguel_Cabrera%29.jpg',
	imgBorderColor: '#9D4F09',
	name: 'Sor Juana Ines de la Cruz',
	title: 'Mexican Writer',
	mobileNo: '0491 570 110',
	location: 'San Miguel Nepantla, México',
	role: `"Juana Inés de Asbaje y Ramírez de Santillana, más conocida como sor Juana Inés de la Cruz fue una religiosa de la Orden de San Jerónimo y escritora novohispana, exponente del Siglo de Oro de la literatura en español. Cultivó la lírica, el auto sacramental y el teatro, así como la prosa. Por la importancia de su obra, recibió los sobrenombres de «el Fénix de América», «la Décima Musa» o «la Décima Musa mexicana». Firma Pilatos la que juzga ajena
Sentencia, y es la suya. ¡Oh caso fuerte!
¿Quién creerá que firmando ajena muerte
el mismo juez en ella se condena?

La ambición de sí tanto le enajena
Que con el vil temor ciego no advierte
Que carga sobre sí la infausta suerte,
Quien al Justo sentencia a injusta pena.

Jueces del mundo, detened la mano,
Aún no firméis, mirad si son violencias
Las que os pueden mover de odio inhumano;

Examinad primero las conciencias,
Mirad no haga el Juez recto y soberano
Que en la ajena firméis vuestras sentencias"`
}];

const HEIGHT_TOUCHABLE = 125;
const HEIGHT_ACTIONBAR_AND_TABBAR = 0;
const MARGIN_TOPBOTTOM_ROW = 10;

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<Image
		style={{
			width: 60,
			height: 60,
			borderRadius: 50,
      borderColor,
      borderWidth: 3,
		}}
		source={{uri:imgSrc}}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	const renderSummary = () => {
		if (summary)	return (
			<Text style={styles.detailsRow.summary}>
				{summary}
			</Text>
		);
		return null;
	};
  if (summary){
  	return (
  		<ScrollView
        height={height-HEIGHT_ACTIONBAR_AND_TABBAR-HEIGHT_TOUCHABLE-(MARGIN_TOPBOTTOM_ROW*2)-130}>
        <View style={styles.detailsRow.row}>
    			<Text
    			className={`icon ${icon}`}
    			style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
    			/>
          <View style={{ width: width*.8 }}>
    				<Text style={styles.detailsRow.title}>
    					{title}
    				</Text>
    				{renderSummary()}
    			</View>
        </View>
  		</ScrollView>
  	);
  }else{
    return (
        <View style={styles.detailsRow.row}>
    			<Text
    			className={`icon ${icon}`}
    			style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
    			/>
          <View style={{ width: width*.8 }}>
    				<Text style={styles.detailsRow.title}>
    					{title}
    				</Text>
    				{renderSummary()}
    			</View>
        </View>
  	);
  }
};

const CardTouchable = (props) => (
		<View style={styles.cardHeader} className='cardheaderdetails'>
			<ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
			<View>
				<Text style={styles.headerName}>{props.name}</Text>
				<Text style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</Text>
			</View>
		</View>
);

const CardContent = (props) => (
	<View style={{ flex:1,flexDirection:'column' }}>
		<DetailsRow
			icon='ion-ios-telephone-outline'
			title={props.mobileNo}
		/>

		<DetailsRow
			icon='ion-ios-location-outline'
			title={props.location}
		/>

		<DetailsRow
			icon='icon ion-ios-paper-outline'
			title='Main Role'
			summary={props.role}
		/>
	</View>
);

class CardStackDemo extends Component {
  handleCardClick = (isCardSelected)=>{
    console.log("Click in card:"+isCardSelected);
  }

  render(){
    return (
      <View style={styles.container}>
    		<CardStack
          heightVisible={height-HEIGHT_ACTIONBAR_AND_TABBAR}
    			height={height}
    			width={width}
    			background="#f8f8f8"
    			headerTouchableHeight={HEIGHT_TOUCHABLE}>

          {people.map((person, i) =>
    				<Card
    					key={i}
    					background={person.background}
              cardClicked={this.handleCardClick.bind(this)}>
    					<CardTouchable {...person} />
              <CardContent {...person} />
    				</Card>
    			)}

    		</CardStack>
    	</View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
	cardHeader: {
    flexDirection: 'row',
		height: HEIGHT_TOUCHABLE,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
	},
	headerName: {
		margin: 0,
		fontWeight: '500',
    fontSize: 25,
    color: 'white'
	},
	headerTitle: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 0,
    marginRight: 0,
		fontWeight: '300',
		opacity: 0.8,
    fontSize: 17,
    color: 'white'
	},
	detailsRow: {
		row: {
			width: width*1,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
			alignItems: 'center',
      marginTop: (MARGIN_TOPBOTTOM_ROW/2),
      marginBottom: (MARGIN_TOPBOTTOM_ROW/2),
      marginLeft: 0,
      marginRight: 0,
		},
		icon: {
			width: width*.25,
			height: 30,
			marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 20,
      borderBottomColor: 'rgba(255, 255, 255, 0.8)',
      borderStyle: 'solid',
      borderBottomWidth: 1
		},
		title: {
			fontWeight: '500',
			margin: 0,
			fontStyle: 'italic',
      color: 'white',
      fontSize: 20,
		},
    summary : {
      fontWeight: '300',
      fontSize: 15,
      color: 'white',
    }
	},
  cardheaderdetails: {
  	position: 'relative',
    right: 7,
    top: 1
  }
};


AppRegistry.registerComponent('CardStackDemo', () => CardStackDemo);
