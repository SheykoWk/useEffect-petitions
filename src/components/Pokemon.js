import Abilities from "./Abilities"

const Pokemon = ({name, image, id, abilities}) => {

    const abilitieList = abilities.map((obj) => {
        console.log(obj)
        return <Abilities name={obj.ability.name} key={obj.ability.name} />
    })

   
    return(
        <div>
            <h1>{name}</h1>
            <h3> {id} </h3>
            <img src={image} alt='' />
            {abilitieList}
        </div>
    )
}

export default Pokemon