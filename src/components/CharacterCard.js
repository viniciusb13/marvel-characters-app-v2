import React  from 'react'

const CharacterCard = (props) => {
	// const [character, setCharacter] = useState();

	return (
		<div
			style={{
				backgroundImage: `url(${props.thumbnail.path}/portrait_uncanny.${props.thumbnail.extension})`
			}}
			className="card">
			<h2>{props.characterName}</h2>
		</div>
	)
}

export default CharacterCard;
