import React, {FC} from 'react';
import inputTextStyles from './input-text.module.scss';

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

const TextInput: FC<ITextInputProps> = ({className, ...props}) => {
    return (
        <input type="text"
               className={`${inputTextStyles.input} ${className}`}
               {...props}
        >
            {props.children}
        </input>
    );
};

export default TextInput;