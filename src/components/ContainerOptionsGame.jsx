import module_opcion_a from "../resources/modulo_opcion_a.png"
import module_opcion_b from "../resources/modulo_opcion_b.png"
import module_opcion_c from "../resources/modulo_opcion_c.png"
import module_opcion_d from "../resources/modulo_opcion_d.png"
import "../styles/components/ContainerOptionsGame.css"
import OptionGame from "./OptionGame"

const ContainerOptionsGame = () => {
    const optionsGameItem = [
        { classN: "module-option a", src: module_opcion_a, altText: "Imagen de la opción a" },
        { classN: "module-option b", src: module_opcion_b, altText: "Imagen de la opción b" },
        { classN: "module-option c", src: module_opcion_c, altText: "Imagen de la opción c" },
        { classN: "module-option d", src: module_opcion_d, altText: "Imagen de la opción d" },
    ]

    const textOptions = [
        "gatkja dlakjdljadlkj",
        "kjskldjalkjdljasd aklsdjaslkjdlkasndlk",
        "jdlkjaldna dkanjsdkjsa dkjasndkjasbda",
        "kjsdhakhdka hdajhsd"
    ]


    return (
        <div className="container-options-game">
            {optionsGameItem.map((option,key) => (
                <OptionGame key={key} src={option.src} classN={option.classN} altText={option.altText}>
                    <p>{textOptions[key]}</p>
                </OptionGame>
            ))}
        </div>
    )
}

export default ContainerOptionsGame