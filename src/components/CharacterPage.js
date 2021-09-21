import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { GetCharacter } from '../actions/index'
import _ from "lodash";
import { useParams, Link } from 'react-router-dom';

const CharacterPage = () => {
	const { characterId } = useParams();
	const [characterState, setCharacterState] = useState(null);
	
	
	const dispatch = useDispatch();
	const characterSave = useSelector(state => state.Character, _.isEqual);
	
	
	useEffect(() => {
		const characterData = characterSave.data[characterId];
		if (_.isEmpty(characterData)) {
			
			dispatch(GetCharacter(characterId));
			
		} else {
			
			setCharacterState(characterSave.data[characterId].results[0])
		}
		
	}, [characterSave]);

	// handleEdit = () => {

	// }
	
	const ShowData = () => {
		let characterDescription = characterState.description;
		let characterSeries = characterState.series;

		if (!_.isEmpty(characterState)) {

			if (characterDescription === "") {
				characterDescription = 'Descrição indisponível';
			}
			
			return (
				<div className="characterPage-container">
					<Link to={'/'} style={{textDecoration: "none"}}>
						<button className="button back">Voltar</button>
					</ Link>
					<button className="button edit">Editar</button>
					<div className="characterStats">
						<div className="characterThumb">
							<img
								src={`${characterThumb.path}/standard_fantastic.${characterThumb.extension}`}
								alt="Foto do personagem"
								width="420px"/>
						</div>
						<div className="characterInfo">
							<h1>{characterName}</h1>
							<p>{characterDescription}</p>
						</div>
					</div>
					<div>
						<div className="series-container">
							<h2>Séries</h2>
							<ul>
								{characterSeries.items.map(item => {
									return <li key={item.resourceURI}>{item.name}</li>
								})}
							</ul>
						</div>
					</div>
				</div>
			)
		}
		
		if (characterState.errorMsg !== "") {
			return <p>{characterState.errorMsg}</p>
		}
		
		return <p>Erro ao tentar achar personagem</p>
		
		
	}
	
	if (characterSave.loading || !characterState) {
		return <p>Carregando...</p>
	}

	const characterName = characterState.name;
	const characterThumb = characterState.thumbnail;


	

	return (
		<div>
			{ShowData()}
		</div>
	)
}

export default CharacterPage;