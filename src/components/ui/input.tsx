'use client'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    note?: string;
}

export default function Input({ 
    label, 
    error, 
    note, 
    className = '', 
    id, 
    ...props 
}: InputProps) {
    return (
        <div title={note} className="flex flex-col w-full gap-2">
            {
                label && (
                    <label htmlFor={id} className="w-full text-s-medium text-neutral-200">
                        {label}
                    </label>
                )
            }

            <div className={`flex items-center w-full px-4 py-3 bg-gray-400 border 
                border-gray-300 rounded-md focus-within:border-primary-600 
                focus-within:bg-gray-500 transition-colors ${error ? 'border-danger-600' : ''}`}
            >
                <input
                    id={id}
                    className={`w-full bg-transparent text-m-regular text-neutral-200 
                        outline-none appearance-none placeholder:text-neutral-800 ${className}`}
                    {...props}
                />
            </div>

            {
                error && (
                    <span className="text-xs-medium text-danger-600">{error}</span>
                )
            }
        </div>
    )
}