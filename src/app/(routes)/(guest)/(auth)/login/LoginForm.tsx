'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui';
import { Toggle } from '@/components/ui';
import { Button } from '@/components/ui';
import Link from 'next/link';

interface LoginFormProps {
    onSubmit: (data: { email: string; password: string; remember: boolean }) => void;
    isLoading?: boolean;
}

interface FormErrors {
    email?: string;
    password?: string;
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({
        email: false,
        password: false,
    });

    // Validação em tempo real
    const validateEmail = (email: string): string => {
        if (!email) return 'Email é obrigatório';
        if (!/\S+@\S+\.\S+/.test(email)) return 'Email inválido';
        return '';
    };

    const validatePassword = (password: string): string => {
        if (!password) return 'Palavra-passe é obrigatória';
        if (password.length < 6) return 'A palavra-passe deve ter pelo menos 6 caracteres';
        return '';
    };

    const handleChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Validar em tempo real após touched
        if (touched[field as keyof typeof touched]) {
            const error = field === 'email' 
                ? validateEmail(value as string)
                : field === 'password' 
                    ? validatePassword(value as string)
                    : '';
            setErrors(prev => ({ ...prev, [field]: error }));
        }
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        
        const error = field === 'email' 
            ? validateEmail(formData.email)
            : field === 'password' 
                ? validatePassword(formData.password)
                : '';
        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        // Validar todos os campos
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        
        setErrors({
            email: emailError,
            password: passwordError,
        });
        
        setTouched({ email: true, password: true });
        
        if (!emailError && !passwordError) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-6">
                {/* EMAIL FIELD */}
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    error={touched.email ? errors.email : undefined}
                    note="Email"
                    required
                />

                {/* PASSWORD FIELD */}
                <Input
                    label="Palavra-passe"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Insira a sua palavra-passe"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onBlur={() => handleBlur('password')}
                    error={touched.password ? errors.password : undefined}
                    note="Password"
                    required
                />

                {/* OPTIONS */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 sm:gap-9">
                    <Toggle
                        id="remember"
                        name="remember"
                        checked={formData.remember}
                        onChange={(checked) => handleChange('remember', checked)}
                    />

                    <Link 
                        href="/forgot-password" 
                        className="text-b-l text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                    >
                        Esqueceu a palavra-passe?
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full gap-6">
                <Button
                    id="submit_user"
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    disabled={isLoading}
                >
                    {isLoading ? 'A entrar...' : 'Entrar'}
                </Button>
            </div>
        </form>
    );
}