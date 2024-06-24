import { useState, useCallback } from "react";

export function useForm(inputValues) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };
    return { values, handleChange, setValues };
}

export function useFormWithValidation(defaults) {
    const [values, setValues] = useState(defaults);
    const [errors, setErrors] = useState({});
    const [isValid, setisValid] = useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage});
        setisValid(target.closet("form").checkValidity();)
    };

    const resetForm = useCallback (
        (newValues = defaults, newErrors = {}, newIsValid= false) => {
            setValues(newValues);
            setErrors(newErrors);
            setisValid(newIsValid);
        },
        [setValues, setErrors, setIsValid, defaults]
    );

    return { values, handleChange, errors, isValid, resetForm };
}