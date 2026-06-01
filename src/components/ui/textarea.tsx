// src/components/ui/Textarea.tsx
'use client'

import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    note?: string;
    resize?: boolean;
}

export default function Textarea({ 
    label, 
    error, 
    note, 
    resize = true, 
    className = '', 
    id, 
    ...props 
}: TextareaProps) {
    return (
        <div title={note} className="flex flex-col w-full gap-2">
            {
                label && (
                    <label htmlFor={id} className="w-fit text-s-medium text-neutral-200">
                        {label}
                    </label>
                )
            }

            <textarea
                id={id}
                className={`w-full px-4 py-3 bg-gray-400 text-m-regular text-neutral-200 
                border border-gray-300 outline-none rounded-md 
                placeholder:text-neutral-800 focus:border-primary-600 
                focus:bg-gray-500 transition-colors
                ${!resize ? 'resize-none' : ''} 
                ${error ? 'border-danger-600' : ''} 
                ${className}`}
                {...props}
            />

            {
                error && (
                    <span className="text-xs-medium text-danger-600">{error}</span>
                )
            }
        </div>
    )
}