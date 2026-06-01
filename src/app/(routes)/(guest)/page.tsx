
import { Link } from '@/components/ui'

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            
            <div className="flex w-full bg-image-principal bg-cover bg-center">
                <div className="flex flex-col justify-center w-fit p-20 bg-gray-800/90">
                    <div className="flex flex-col items-center justify-center px-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                {/* DISPLAY */}
                                <span className="display-m-bold text-neutral-200 ">Um Espaço Aberto Para Encontrar e Partilhar Informações</span>

                                {/* INFORMATION */}
                                <div className="flex">
                                    <p className="text-xl-regular text-justify text-neutral-800">Partilhe as suas mais diversas questões ou ajude outros a encontrar respostas.</p>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <Link href="/register" className="justify-center w-fit px-4.5 py-3 bg-primary-600 rounded-md hover:bg-primary-500 focus:bg-primary-800">
                                <span className="text-b-l text-white font-semibold">Começar</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full p-1"></div>
            </div>
        </div>
    )
}
