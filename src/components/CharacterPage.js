import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { GetCharacter } from '../actions/index'
import _ from "lodash";
import { useParams, Link } from 'react-router-dom';

const CharacterPage = () => {
	const { characterId } = useParams();
	const [characterState, setCharacterData] = useState(null);

	
	const dispatch = useDispatch();
	const characterSave = useSelector(state => state.Character, _.isEqual);

	
	useEffect(() => {
		const characterData = characterSave.data[characterId];
		if (_.isEmpty(characterData)) {
			
			dispatch(GetCharacter(characterId));
			
		} else {
			
			setCharacterData(characterSave.data[characterId].results[0])
		}
		
	}, [characterSave]);

	
	
	const ShowData = () => {
		let characterDescription = characterState.description;
		let characterSeries = characterState.series;

		if (!_.isEmpty(characterState)) {
			// const characterData = characterState[characterId];

			if (characterDescription === "") {
				characterDescription = 'Descrição indisponível';
			}
			
			return (
				<div className="characterPage-container">
					<Link to={'/'} style={{textDecoration: "none"}}>
						<p className="back-button">Voltar</p>
					</ Link>
					<h1>{characterName}</h1>
					<p>{characterDescription}</p>
					<div>
						<h2 className="nome-personagem">Séries</h2>
						<ul>
							{characterSeries.items.map(item => {
								return (
									<li
										key={item.resourceURI}
										className="list-item">{item.name}</li>
								)
							})}
						</ul>
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

	

	return (
		<div>
			{ShowData()}
		</div>
	)
}

export default CharacterPage;