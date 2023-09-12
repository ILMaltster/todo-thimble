import React, {FC} from 'react';
import inputSwitchStyles from './input-switch.module.scss';

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    title: string;
    className?: string;
}

const SwitchInput: FC<ITextInputProps> = ({title, className, ...props}) => {
    return (
        <div className={inputSwitchStyles.container}>
            <label className={inputSwitchStyles.wrapper}>
                <input type="checkbox"
                       className={`${inputSwitchStyles.checkbox} ${className}`}
                       {...props}
                >
                </input>
                <div className={inputSwitchStyles.circle}/>
            </label>
            <label>{title}</label>
        </div>
    );
};

export default SwitchInput;