
import { Link } from 'ui/index'
import Logotipo from '@/components/common/logotipo'

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-20 py-16 bg-transparent">
            <div className="flex flex-col w-full px-8 gap-8">
                <div className="flex items-center justify-between w-full">
                    {/* LOGOTIPO */}
                    <Logotipo/>

                    {/* LINKS */}
                    <div className="flex items-center w-fit gap-12">
                        <Link href="/about" className="justify-center w-fit group">
                            <span className="text-b-s text-neutral-800 font-semibold group-hover:text-primary-800">Sobre Nós</span>
                        </Link>

                        <Link href="/#" className="justify-center w-fit group">
                            <span className="text-b-s text-neutral-800 font-semibold group-hover:text-primary-800">Ajuda</span>
                        </Link>

                        <Link href="/#" className="justify-center w-fit group">
                            <span className="text-b-s text-neutral-800 font-semibold group-hover:text-primary-800">Contactos</span>
                        </Link>
                    </div>

                    {/* SOCIAL ICONS */}
                    {/* <div></div> */}
                </div>

                <div className="flex items-center justify-between w-full pt-8 border-t border-gray-300">
                    <div>
                        <span className="text-l-regular text-neutral-800">© 2023 BrainShare. Todos os direitos reservados.</span>
                    </div>

                    <div className="flex items-center w-fit gap-12">
                        <Link href="/#" className="justify-center w-fit group">
                            <span className="text-b-s text-neutral-800 font-semibold group-hover:text-primary-800">Política de Privacidade</span>
                        </Link>

                        <Link href="/#" className="justify-center w-fit group">
                            <span className="text-b-s text-neutral-800 font-semibold group-hover:text-primary-800">Termos e Condições</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}