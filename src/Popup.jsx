import {useState} from "react";
import Button from "./Button.jsx";

export default function Popup() {
    const [isLoading, setIsLoading] = useState(false);

    function onClick() {
        setIsLoading(true);
        setTimeout(() => {setIsLoading(false)}, 3000)
    }

    return (
        <div>
            <h2>Random image generator extension</h2>
            {isLoading && (<p>Loading...</p>)}
            <Button onClick={onClick}/>
        </div>
    )
}