'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RegisterForm } from './RegisterForm';
import Image from 'next/image';

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (formData: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }) => {
        setIsLoading(true);
        
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Registration successful
                router.push('/login?registered=true');
            } else {
                // Handle error
                console.error('Registration failed:', data.error);
            }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex w-full h-screen">
            {/* FORM AREA - Left side */}
            <div className="flex flex-col items-center justify-center w-full lg:w-max px-4 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-24">
                <div className="flex flex-col w-full max-w-md px-4 sm:px-8 gap-8">
                    <div className="flex items-center justify-center w-full">
                        <span className="headline-l-medium text-neutral-200 whitespace-nowrap">
                            Registrar
                        </span>
                    </div>

                    <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />

                    <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="text-l-regular text-neutral-400 whitespace-nowrap">
                            Já possui uma conta?
                        </span>
                        <Link 
                            href="/login" 
                            className="text-b-l text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                        >
                            Iniciar Sessão
                        </Link>
                    </div>
                </div>
            </div>

            {/* IMAGE BOX - Right side */}
            <div className="flex-1 relative overflow-hidden hidden lg:block">
                <Image
                    src="/images/image 4.png"
                    alt="Register background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}