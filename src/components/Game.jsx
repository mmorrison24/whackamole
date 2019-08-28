import React from "react";
import "./game.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20,faAngleDoubleLeft,faAngleDoubleDown, faAngleDoubleRight, faArrowsAltH, faDotCircle} from '@fortawesome/free-solid-svg-icons'

const numCols = 10
const numRows = 1
const symbols = [faDiceD20, faAngleDoubleLeft, faAngleDoubleDown, faAngleDoubleRight, faArrowsAltH, faDotCircle]

const Mole = ({icon, test}) => {
	return (<li className={'list-item ' + test} ><FontAwesomeIcon icon={icon}/></li>)
}

const Game = () => {
	const select = () => (Math.floor(Math.random() * (numCols * numRows)));
	const selected = select();
	const moles = symbols.map((item, i ) =>  <Mole icon={item} key={i} test={ (selected === i) ? "peaked" : "hiding" }/>);


	return (
		<div className="stage d-flex">
			<ul>
				{moles}
			</ul>
		</div>
	);
}

export default Game;
