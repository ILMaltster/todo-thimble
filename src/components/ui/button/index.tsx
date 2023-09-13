import React, {FC, memo} from 'react';
import buttonStyles from './button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const Button: FC<IButtonProps> = memo((
    {
        className,
        ...props
    }) => {
    return (
        <button className={`${buttonStyles.button} ${className}`} {...props}>
            {props.children}
        </button>
    );
});

export default Button;