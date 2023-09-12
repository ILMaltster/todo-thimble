import React, {FC} from 'react';
import inputCheckboxStyles from './input-checkbox.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    title: string;
    className?: string;
}

const CheckBox: FC<ITextInputProps> = ({title, className, ...props}) => {
    return (
        <label className={inputCheckboxStyles.wrapper}>
            <input type="checkbox"
                   className={`${inputCheckboxStyles.checkbox} ${className}`}
                   {...props}
            >
            </input>
            <div className={inputCheckboxStyles.checkboxFake}>
                <FontAwesomeIcon icon={faCheck}/>
            </div>
            {title}
        </label>
    );
};

export default CheckBox;