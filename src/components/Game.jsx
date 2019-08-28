import React from "react";
import "./game.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleDoubleLeft,faAngleDoubleDown, faAngleDoubleRight, faArrowsAltH, faDotCircle} from '@fortawesome/free-solid-svg-icons'

const numCols = 10
const symbols = [faAngleRight, faAngleDoubleLeft, faAngleDoubleDown, faAngleDoubleRight, faArrowsAltH, faDotCircle]

const Mole = ({icon}) => {
	return (<li className={'list-item'} ><FontAwesomeIcon icon={icon}/></li>)
}

const Game = () => {

	const items = symbols.map((item, i ) =>  <Mole icon={item} key={i}/>);

	return (
		<div className="stage d-flex">
			<ul>
				{items}
			</ul>

			<ul>
				{items}
			</ul>

			<ul>
				{items}
			</ul>
		</div>
	);
}

export default Game;
