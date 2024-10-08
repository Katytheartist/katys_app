import React from "react";

type ButtonProps = {
    label?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ 
    label = 'string', 
    variant = 'default', 
    size= 'medium',
    icon,
    iconPosition = 'left',
}) => {
    const baseStyle = 'px-4 py-2 rounded focus:outline-none';
    let variantStyle = '';
    let sizeStyle = '';

    switch (variant) {
        case 'primary':
            variantStyle = 'bg-primary text-white';
            break;
        case 'secondary':
            variantStyle = 'bg-secondary text-white';
            break;
        case 'outlined':
            variantStyle = 'border border-gray-500 text-gray-500';
            break;
        default:
            variantStyle = 'bg-gray-200 text-black';   
    }

    switch (size) {
        case 'small':
            sizeStyle = 'text-sm';
            break;
        case 'medium':
            sizeStyle = 'text-base';
            break;
        case 'large':
            sizeStyle = 'text-lg';
            break;
    }

    return (
        <button
        className={`${baseStyle} ${variantStyle} ${sizeStyle}`}
        >
            {icon && iconPosition === 'left' && <span className="mr-2"> {icon} </span>}
            {label}
            {icon && iconPosition === 'right' && <span className="ml-2"> {icon} </span>}
        </button>
    );
};

export default Button;