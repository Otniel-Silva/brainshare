'use client';

import { useState } from 'react';
// import { AvatarShowcase } from './components/AvatarShowcase';
import ButtonShowcase from './components/ButtonShowcase';
// import { InputShowcase } from './components/InputShowcase'
import IconShowcase from './components/IconShowcase'

type TestView = 1 | 2 | 3;

export default function TestsPage() {
    const [currentView, setCurrentView] = useState<TestView>(1) // Começa com 2 como no exemplo

    return (
        <div className="flex flex-col justify-center items-center px-20 py-16">
            <div className="flex flex-col w-full px-8 gap-4">
                {/* Header */}
                <div className="w-full pb-4 border-b border-neutral-200">
                    <span className="headline-m-bold text-neutral-200">Testes</span>
                </div>

                {/* Content - Conditional Rendering */}
                {currentView === 1 && (
                    <>
                        {/* <AvatarShowcase /> */}
                        <ButtonShowcase />
                        {/* <InputShowcase /> */}
                    </>
                )}

                {currentView === 2 && <IconShowcase />}

                {currentView === 3 && (
                    <div className="text-neutral-200">
                        {/* Partial tests - implementar depois */}
                        <p>Partial tests content...</p>
                    </div>
                )}
            </div>
        </div>
    )
}