'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui';
import { Button } from '@/components/ui';

interface RegisterFormProps {
    onSubmit: (data: {
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }) => void;
    isLoading?: boolean;
}

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
}

export function RegisterForm({ onSubmit, isLoading = false }: RegisterFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<{
        name: boolean;
        email: boolean;
        password: boolean;
        password_confirmation: boolean;
    }>({
        name: false,
        email: false,
        password: false,
        password_confirmation: false,
    });

    // Validações
    const validateName = (name: string): string => {
        if (!name) return 'Nome é obrigatório';
        if (name.length < 2) return 'Nome deve ter pelo menos 2 caracteres';
        return '';
    };

    const validateEmail = (email: string): string => {
        if (!email) return 'Email é obrigatório';
        if (!/\S+@\S+\.\S+/.test(email)) return 'Email inválido';
        return '';
    };

    const validatePassword = (password: string): string => {
        if (!password) return 'Palavra-passe é obrigatória';
        if (password.length < 6) return 'A palavra-passe deve ter pelo menos 6 caracteres';
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            return 'A palavra-passe deve conter letras maiúsculas e minúsculas';
        }
        return '';
    };

    const validatePasswordConfirmation = (confirmation: string): string => {
        if (!confirmation) return 'Confirmação de palavra-passe é obrigatória';
        if (confirmation !== formData.password) return 'As palavras-passe não coincidem';
        return '';
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Validar em tempo real após touched
        if (touched[field as keyof typeof touched]) {
            let error = '';
            switch (field) {
                case 'name':
                    error = validateName(value);
                    break;
                case 'email':
                    error = validateEmail(value);
                    break;
                case 'password':
                    error = validatePassword(value);
                    // Re-validar password_confirmation se já estiver touched
                    if (touched.password_confirmation) {
                        const confirmError = validatePasswordConfirmation(formData.password_confirmation);
                        setErrors(prev => ({ ...prev, password_confirmation: confirmError }));
                    }
                    break;
                case 'password_confirmation':
                    error = validatePasswordConfirmation(value);
                    break;
            }
            setErrors(prev => ({ ...prev, [field]: error }));
        }
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        
        let error = '';
        switch (field) {
            case 'name':
                error = validateName(formData.name);
                break;
            case 'email':
                error = validateEmail(formData.email);
                break;
            case 'password':
                error = validatePassword(formData.password);
                if (touched.password_confirmation) {
                    const confirmError = validatePasswordConfirmation(formData.password_confirmation);
                    setErrors(prev => ({ ...prev, password_confirmation: confirmError }));
                }
                break;
            case 'password_confirmation':
                error = validatePasswordConfirmation(formData.password_confirmation);
                break;
        }
        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        // Validar todos os campos
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        const confirmError = validatePasswordConfirmation(formData.password_confirmation);
        
        setErrors({
            name: nameError,
            email: emailError,
            password: passwordError,
            password_confirmation: confirmError,
        });
        
        setTouched({
            name: true,
            email: true,
            password: true,
            password_confirmation: true,
        });
        
        if (!nameError && !emailError && !passwordError && !confirmError) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-6">
                {/* NAME FIELD */}
                <Input
                    label="Nome"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Insira o seu nome"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    error={touched.name ? errors.name : undefined}
                    required
                />

                {/* EMAIL FIELD */}
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Insira o seu email"
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
                    note="Password (mínimo 6 caracteres)"
                    required
                />

                {/* PASSWORD CONFIRMATION FIELD */}
                <Input
                    label="Confirmação da Palavra-passe"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Insira novamente a palavra-passe"
                    value={formData.password_confirmation}
                    onChange={(e) => handleChange('password_confirmation', e.target.value)}
                    onBlur={() => handleBlur('password_confirmation')}
                    error={touched.password_confirmation ? errors.password_confirmation : undefined}
                    required
                />
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
                    {isLoading ? 'A processar...' : 'Confirmar'}
                </Button>
            </div>
        </form>
    );
}