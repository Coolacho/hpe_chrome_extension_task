import {useState} from "react";
import Button from "./Button.jsx";

export default function Popup() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    function onClick() {
        setIsError(false);
        setImgSrc("");
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
            //setIsError(true)
            //setImgSrc("https://cdn2.thecatapi.com/images/MTk1NjM4MA.jpg")
        }, 3000)
    }

    return (
        <div>
            <h2>Random image generator extension</h2>
            <div>
                {isLoading && (<p>Loading...</p>)}
                {isError && (<p>Sorry, there was an error generating your image, please try again.</p>)}
                {imgSrc !== "" && (<img alt="Generated image" src={imgSrc}/>)}
            </div>
            <Button onClick={onClick}/>
        </div>
    )
}