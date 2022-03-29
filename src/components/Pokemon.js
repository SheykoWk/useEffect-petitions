const Pokemon = ({name, image, id, abilities}) => {

    

    return(
        <div>
            <h1>{name}</h1>
            <h3> {id} </h3>
            <img src={image} alt='' />
            
        </div>
    )
}

export default Pokemon