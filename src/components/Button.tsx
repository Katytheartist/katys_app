import React from "react";

type ButtonProps = {
    label: string;
    variant?: 'default' | 'primary' | 'secondary' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ 
    label, 
    variant = 'default', 
    size= 'medium',
    icon,
    iconPosition = 'left',
}) => {
    let baseStyle = 'px-4 py-2 rounded focus:outline-none';
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
        
    }
    return (
        <button
        onClick={onClick}
        style={style}
        >
            {label}
        </button>
    );
};

export default Button;