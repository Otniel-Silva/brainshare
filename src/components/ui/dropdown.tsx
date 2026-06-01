'use client'

import { useState, useRef, useEffect } from 'react'

interface DropdownItem {
    id: string | number;
    name: string;
}

interface DropdownProps {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    items: DropdownItem[];
    // value?: string;
    onChange?: (item: DropdownItem) => void;
    note?: string;
}

export default function Dropdown({
    id,
    name,
    label,
    placeholder,
    items,
    // value,
    onChange,
    note,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (item: DropdownItem) => {
        setSelectedItem(item)
        onChange?.(item)
        setIsOpen(false)
    }

    return (
        <div className="flex flex-col w-full gap-2" ref={dropdownRef}>
            <label htmlFor={id} title={note} className="w-full text-s-medium text-neutral-200">
                {label}
            </label>

            <div className="relative">
                <InputDrop 
                    isOpen={isOpen}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    selectedItem={selectedItem}
                    setIsOpen={setIsOpen}
                />

                {
                    isOpen && (
                        <div className="absolute pt-1 z-10 w-full">
                            <div className="flex flex-col max-h-40 bg-gray-400 border border-gray-300 
                            overflow-auto shadow-md shadow-black/20 rounded">
                                {
                                    items.map((item) => (
                                        <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => handleSelect(item)}
                                        className="flex items-center justify-between gap-2 px-2 py-1 
                                            border-b border-gray-300 hover:bg-gray-100/10 transition-colors"
                                        >
                                            <span className="text-m-regular text-neutral-800 capitalize">
                                                {item.name}
                                            </span>
                                        {
                                            selectedItem?.id === item.id && (
                                                <span className="text-m-regular text-neutral-800">✓</span>
                                            )
                                        }
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function InputDrop({ isOpen, id, name, placeholder, selectedItem, setIsOpen }: {
    isOpen: boolean;
    id: string;
    name: string;
    placeholder: string;
    selectedItem: DropdownItem | null;
    setIsOpen: (isOpen: boolean) => void;
}) {
    return (
        <div className={`flex items-center gap-2.5 w-full px-4 py-3 bg-gray-600 
                border rounded-md overflow-hidden transition-colors duration-200
                ${isOpen ? 'border-secondary-600 bg-gray-600' : 'border-gray-300'}`}
                >
                    <input
                        id={id}
                        name={name}
                        type="text"
                        readOnly
                        className="w-full bg-transparent text-m-regular text-neutral-200 capitalize 
                        outline-none appearance-none placeholder:text-neutral-800 placeholder:normal-case cursor-pointer"
                        placeholder={placeholder}
                        value={selectedItem?.name || ''}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                        {/* <ChevronDown className="w-4 h-4 text-neutral-200" /> */}
                    </button>
                </div>
    )
}