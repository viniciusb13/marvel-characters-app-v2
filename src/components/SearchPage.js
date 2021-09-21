import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import { GetCharacterSearch } from '../actions/index';
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";



const SearchPage = () => {
	const dispatch = useDispatch();
	const characterSearch = useSelector(state => state.CharacterSearch);
	const { searchTerm } = useParams();


	useEffect(() => {
		FetchData(1)
	}, [])


	const FetchData = (page = 1) => {
		dispatch(GetCharacterSearch(searchTerm, page))
	}

	const ShowSearchedData = () => {
		if (characterSearch.loading) {
			return <p>Procurando...</p>
		}

		if (!_.isEmpty(characterSearch.data)) {
			return (
				<div className="list-container">
					{characterSearch.data.map(character => {
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
					})}
				</div>
			)
		}

		if (characterSearch.errorMsg !== "") {
			return <p>{characterSearch.errorMsg}</p>
		}

		return <p>Não foi possível encontrar o personagem</p>
	}

	return (
		<div>
			<Link to={'/'} style={{textDecoration: "none"}}>
				<button className="button back">Voltar</button>
			</ Link>
			<h1 className="title">Personagens Encontrados</h1>
			{ShowSearchedData()}
			{!_.isEmpty(characterSearch.data) && (
				<ReactPaginate
				pageCount={Math.ceil(characterSearch.total / 20)}
				pageRangeDisplayed={2}
				marginPagesDisplayed={1}
				onPageChange={(data) => FetchData(data.selected + 1)}
				containerClassName={"pagination"}
				disabledClassName={"pagination__link--disabled"}
				activeClassName={"pagination__link--active"}
				/>
				)}
		</div>
	)
}

export default SearchPage
