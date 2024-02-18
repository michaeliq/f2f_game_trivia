import background_img_ring from "../resources/background_image.png" 
import "../styles/components/ContainerGame.css"
const ContainerGame = ({children}) => {

    return(
        <div className="container-game">
            <img src={background_img_ring} className="background-img-game" alt="Imagen del ring"/>
            {children}
        </div>
    )
}

export default ContainerGame