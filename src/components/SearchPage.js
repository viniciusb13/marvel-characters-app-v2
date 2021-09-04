import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

import _ from 'lodash';
import SearchBar from './SearchBar';
import {GetCharacterList} from '../actions/index';
import { Link } from "react-router-dom";


const SearchPage = () => {
	const dispatch = useDispatch();
	const characterList = useSelector(state => state.CharacterList);


	useEffect(() => {
		dispatch(GetCharacterList())
	}, [])

	const ShowSearchedData = () => {
		if (characterList.loading) {
			return <p>Procurando...</p>
		}

		if (!_.isEmpty(characterList.data)) {
			return (
				<div>
					{characterList.data.map(character => {
						if ((character.name).toLowerCase().includes(searchedTerm.toLowerCase())) {
							return (
								<Link 
								key={character.id}
								to={`/character/${character.id}`}
								>
									<CharacterCard
										characterName={character.name}
										thumbnail={character.thumbnail}>
									</CharacterCard>
								</Link>
							)
						}
					})}
				</div>
			)
		}

		if (characterList.errorMsg !== "") {
			return <p>{characterList.errorMsg}</p>
		}

		return <p>Não foi possível encontrar o personagem</p>
	}

	return (
		<div>
			<h1>Personagens Encontrados</h1>
			{ShowSearchedData()}
		</div>
	)
}

export default SearchPage
