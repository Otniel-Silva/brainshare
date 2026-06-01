
import { Link } from 'ui/index'
import Logotipo from '@/components/common/logotipo'

export default function Header() {
    return (
        <div className="flex items-center justify-center w-full px-20 py-5 border-b border-gray-300 shadow-md">
            <div className="flex items-center justify-between w-full px-8">
                <div className="flex items-center gap-16">
                    {/* Logotipo */}
                    <Logotipo/>

                    {/* ITEMS */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="">
                            <span className="text-b-l text-white font-semibold hover:text-neutral-800">Início</span>
                        </Link>
                        
                        <Link href="/about" className="">
                            <span className="text-b-l text-white font-semibold hover:text-neutral-800">Sobre Nós</span>
                        </Link>

                        <Link href="/contacts" className="">
                            <span className="text-b-l text-white font-semibold hover:text-neutral-800">Contactos</span>
                        </Link>

                        <Link href="/tests" className="">
                            <span className="text-b-l text-white font-semibold hover:text-neutral-800">Testes</span>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/register" className="">
                        <span className="text-b-l text-primary-600 font-semibold hover:text-primary-800">Registrar</span>
                    </Link>

                    <Link href="/login" className="w-fit px-4.5 py-3 bg-primary-600 rounded-md hover:bg-primary-500 focus:bg-primary-800">
                        <span className="text-b-l text-white font-semibold">Entrar</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}