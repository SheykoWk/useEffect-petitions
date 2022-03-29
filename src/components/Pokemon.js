import Abilities from "./Abilities"

const Pokemon = ({name, image, id, abilities}) => {

    const abilitieList = abilities.map((ability) => <Abilities name={ability.ability.name} key={ability.ability.name} />)

    const frutas = ['manzana', 'pera', 'sandia', 'papaya', 'fresa']

    const nums = [1 , 7, 5, 9]

    const numList = nums.map((num) => num + 10)
    console.log(numList)
    console.log(nums)

    const arrList = frutas.map((fruta) => `Amo la ${fruta}`)

    console.log(arrList)
    console.log(frutas)

    for(let fruta of frutas){
        console.log(`Amo la ${fruta}`)
    }

    return(
        <div>
            <h1>{name}</h1>
            <h3> {id} </h3>
            <img src={image} alt='' />
            {abilitieList}
            {arrList}
        </div>
    )
}

export default Pokemon