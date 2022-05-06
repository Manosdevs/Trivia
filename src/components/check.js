import React,{useState, useEffect, useRef} from "react";




export default function CheckButton (props) {
    const [active, setActive] = useState(false)
    const ref = useRef(false)

    useEffect(() => {

        if (ref.current) {
         setActive(props.toggleCheck.every(elem => elem === true)) 
        } else {
            ref.current = true
        }
        
        
       
}, [props.toggleCheck])

    useEffect( () => {
        if (ref.current) {
            if (props.checkstate && active) {
                setActive(false)
            }
        } else {
            ref.current = true
        }
    }, [props.checkstate])


    console.log(active)
    console.log(props.toggleCheck)


    return (
        <button disabled={!active} onClick={props.handleCheck} className="checkbtn">Check Answers</button>
    )
}