// src/components/ui/FileInput.tsx
'use client'

import { useState } from 'react'

interface FileInputProps {
  id: string;
  name: string;
  label: string;
  note?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  error?: string;
}

export default function FileInput({ 
    id, 
    name, 
    label, 
    note, 
    accept, 
    onChange, 
    error 
}: FileInputProps) {
    const [fileName, setFileName] = useState<string>('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] || null;
        setFileName(file?.name || '');
        onChange?.(file);
    }

    return (
        <div title={note} className="flex flex-col w-full gap-2">
            <label htmlFor={id} className="w-fit text-s-medium text-neutral-200">
                {label}
            </label>

            <div className={`flex items-center w-full px-4 py-3 bg-gray-400 border 
                border-gray-300 rounded-md focus-within:border-primary-600 
                focus-within:bg-gray-500 transition-colors ${error ? 'border-danger-600' : ''}`}
            >
                <input
                id={id}
                name={name}
                type="file"
                accept={accept}
                onChange={handleChange}
                className="w-full bg-transparent text-m-regular text-neutral-800 outline-none 
                    file:text-neutral-200 file:bg-transparent file:border-none file:p-0 
                    file:mr-4 file:cursor-pointer"
                />
                
                {
                    fileName && (
                        <span className="text-s-regular text-neutral-200 ml-2 whitespace-nowrap">
                            {fileName}
                        </span>
                    )
                }
            </div>

            {
                error && (
                    <p className="text-xs-medium text-danger-600">{error}</p>
                )
            }
        </div>
    )
}