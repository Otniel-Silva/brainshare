'use client';

import { useEffect, useState, useCallback } from 'react';

interface ToggleProps {
    id: string;
    name: string;
    colorScheme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    size?: 'sm' | 'md' | 'lg';
    value?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    children?: React.ReactNode;
    disabled?: boolean;
}

const colorSchemes = {
    primary: {
        active: 'bg-primary-600',
        hover: 'hover:bg-primary-700',
        focus: 'focus:ring-primary-500',
    },
    secondary: {
        active: 'bg-secondary-600',
        hover: 'hover:bg-secondary-700',
        focus: 'focus:ring-secondary-500',
    },
    success: {
        active: 'bg-green-600',
        hover: 'hover:bg-green-700',
        focus: 'focus:ring-green-500',
    },
    danger: {
        active: 'bg-red-600',
        hover: 'hover:bg-red-700',
        focus: 'focus:ring-red-500',
    },
    warning: {
        active: 'bg-yellow-600',
        hover: 'hover:bg-yellow-700',
        focus: 'focus:ring-yellow-500',
    },
};

const sizes = {
    sm: {
        container: 'w-10 h-5',
        handle: 'w-4 h-4',
        translate: 'translate-x-5',
        left: 'left-0.5',
        bottom: 'bottom-0.5',
    },
    md: {
        container: 'w-14 h-7',
        handle: 'w-5 h-5',
        translate: 'translate-x-7',
        left: 'left-1',
        bottom: 'bottom-1',
    },
    lg: {
        container: 'w-16 h-8',
        handle: 'w-6 h-6',
        translate: 'translate-x-8',
        left: 'left-1',
        bottom: 'bottom-1',
    },
};

export default function Toggle({
    id,
    name,
    colorScheme = 'primary',
    size = 'md',
    value = 'on',
    checked,
    defaultChecked = false,
    onChange,
    children,
    disabled = false,
}: ToggleProps) {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const colors = colorSchemes[colorScheme];
    const sizeStyles = sizes[size];

    // useEffect(() => {
    //     if (checked !== undefined) {
    //         setIsChecked(checked);
    //     }
    // }, [checked])

    const handleToggle = () => {
        const newValue = !isChecked;

        setIsChecked(newValue);

        onChange?.(newValue);
    }

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        setIsChecked(newValue);
        onChange?.(newValue);
    }, [onChange]);

    return (
        <label
            htmlFor={id}
            className={`
                flex items-center gap-3 
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer group'}
            `}
        >
            {/* Conteúdo do children (slot) */}
            {children && (
                <div className="flex-1 text-neutral-200">
                    {children}
                </div>
            )}
            
            {/* Toggle Switch */}
            <div className="relative">
                {/* Input real - o valor muda aqui! */}
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    className="sr-only peer"
                    disabled={disabled}
                    onChange={handleInputChange}
                />
                
                {/* Background do toggle - visual apenas */}
                <div
                    className={`
                        ${sizeStyles.container}
                        rounded-full transition-all duration-200 ease-in-out
                        ${isChecked ? colors.active : 'bg-gray-600'}
                        ${!disabled && colors.hover}
                        ${!disabled && 'cursor-pointer'}
                    `}
                    onClick={handleToggle}
                />
                
                {/* Handle (bola) - visual apenas */}
                <div
                    className={`
                        absolute
                        ${sizeStyles.handle}
                        ${sizeStyles.left}
                        ${sizeStyles.bottom}
                        bg-white rounded-full shadow-md
                        transition-all duration-200 ease-in-out
                        ${isChecked ? sizeStyles.translate : 'translate-x-0'}
                        ${!disabled && 'cursor-pointer group-hover:scale-105'}
                    `}
                    onClick={handleToggle}
                />
            </div>
        </label>
    );
}