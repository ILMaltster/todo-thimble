import React, {FC} from 'react';
import selectStyles from './select.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

interface INumberInputProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    className?: string;
}

const Select: FC<INumberInputProps> = ({value, className, ...props}) => {
    return (
        <div className={selectStyles.selectWrapper}>
            <select id={selectStyles.select}
                   className={`${selectStyles.select} ${className}`}
                   {...props}
            >
                {props.children}
            </select>
                <button>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
        </div>
    );
};

export default Select;