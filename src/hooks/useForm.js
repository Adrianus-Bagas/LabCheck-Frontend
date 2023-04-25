import { useState } from "react";

function useForm(defaultValue){
    const [formInput, setFormInput] = useState(defaultValue);

    const handleInput = (type,value)=>{
        const copyFormInput = {...formInput}
        copyFormInput[type] = value
        setFormInput(copyFormInput)
      }

    return {
        formInput,
        handleInput,
        setFormInput
    };
}
export default useForm;