import {useState} from "react";
import Button from "./Button.jsx";
import {getImage} from "./APIService.js";

export default function Popup() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const [timeStamp, setTimeStamp] = useState("");

    function onClick() {
        setIsError(false);
        setImgSrc("");
        setIsLoading(true);
        getImage()
            .then(res => {
                setIsLoading(false)
                setImgSrc(res[0].url)
                setTimeStamp(new Date().toTimeString())
            })
            .catch(() => {
                setIsLoading(false)
                setIsError(true)
            })
    }

    return (
        <div>
            <h2>Random image generator extension</h2>
            <div>
                {isLoading && (<p>Loading...</p>)}
                {isError && (<p>Sorry, there was an error generating your image, please try again.</p>)}
                {imgSrc !== "" && (<img alt="Generated image" src={imgSrc}/>)}
            </div>
            {timeStamp !== "" && (<div>Last generation: {timeStamp}</div>)}
            <Button onClick={onClick}/>
        </div>
    )
}