import React, {FC, useRef} from 'react';
import inputNumberStyles from './input-number.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

interface INumberInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

const NumberInput: FC<INumberInputProps> = (
    {
        value = 0, onChange,
        className, ...props
    }) => {
    const numberInput = useRef<HTMLInputElement>(null);

    const increment = () => {
        let event = new Event('input', { bubbles: true });
        numberInput.current?.stepUp();
        numberInput.current?.dispatchEvent(event);
    }

    const decrement = () => {
        let event = new Event('input', { bubbles: true });
        numberInput.current?.stepDown()
        numberInput.current?.dispatchEvent(event);
    }


    return (
        <div className={inputNumberStyles.inputWrapper}>
            <input ref={numberInput} type="number" value={value} onChange={onChange}
                   className={`${inputNumberStyles.input} ${className}`}
                   {...props}
            />
            <div className={inputNumberStyles.buttons}>
                <button type={"button"} onClick={decrement}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <button type={"button"} onClick={increment}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
        </div>
    );
};

export default NumberInput;