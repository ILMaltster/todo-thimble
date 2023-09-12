import React, {FC} from 'react';
import inputSwitchStyles from './input-switch.module.scss';

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

const SwitchInput: FC<ITextInputProps> = ({className, ...props}) => {
    return (
        <label className={inputSwitchStyles.wrapper}>
            <input type="checkbox"
                   className={`${inputSwitchStyles.checkbox} ${className}`}
                   {...props}
            >
            </input>
            <div className={inputSwitchStyles.circle}/>
        </label>
    );
};

export default SwitchInput;