import { useState } from "react";

const useForm = (initalValue = {}) => {

    const [dataForm, setDataForm] = useState(initalValue);

    const handleChangeInputs = (event) => {
        // console.log(event);
        const { name, value, files, type } = event.target;
        if(type === 'file'){
            console.log(files);
        }
        setDataForm({
            ...dataForm,
            [name]: type === 'file' ? files : value
        });
    }

    return {dataForm, handleChangeInputs}
}

export default useForm