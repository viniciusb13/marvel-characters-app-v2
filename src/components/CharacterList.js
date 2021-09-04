import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import SearchBar from './SearchBar';
import { GetCharacterList } from '../actions/index'
import _ from 'lodash';
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


const CharacterList = (props) => {
	// const [search, setSearch] = useState("");

	const dispatch = useDispatch();
	const characterList = useSelector(state => state.CharacterList);

	useEffect(() => {
		FetchData(1)
	}, [])

	const FetchData = (page = 1) => {
		dispatch(GetCharacterList(page))
	}


	const ShowData = () => {
		if (characterList.loading) {
			return <p>Carregando...</p>
		}

		if (!_.isEmpty(characterList.data)) {
			return(
				<div className="list-container">
					{characterList.data.map(character => {
						return(
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
					})}
				</div>
			)
		}

		if (characterList.errorMsg !== "") {
			return <p>{characterList.errorMsg}</p>
		}

		return <p>Não foi possível achar nenhum personagem</p>
	}
	return (
		<>
			<h1 className="list-title">Personagens Marvel</h1>
			{/* <SearchBar /> */}
			{ShowData()}
			{!_.isEmpty(characterList.data) && (
				<ReactPaginate
				pageCount={78}
				pageRangeDisplayed={2}
				marginPagesDisplayed={1}
				onPageChange={(data) => FetchData(data.selected + 1)}
				containerClassName={"pagination"}
				disabledClassName={"pagination__link--disabled"}
				activeClassName={"pagination__link--active"}
				/>
				)}
		</>
	)
}

export default CharacterList;