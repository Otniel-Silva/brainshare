
import Image from "next/image"
import {Link} from "components/ui" 

export default function LoginPage() {
    return (
        <div className="flex w-full h-screen">
            {/* IMAGE BOX - Left side */}
            <div className="flex-1 relative overflow-hidden hidden lg:block">
                <Image
                    src="/images/image 2.png"
                    alt="Login background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* FORM AREA - Right side */}
            <div className="flex flex-col items-center justify-center w-full lg:w-max px-4 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-24">
                <div className="flex flex-col w-full max-w-md px-4 sm:px-8 gap-8">
                    <div className="flex items-center justify-center w-full">
                        <span className="headline-l-medium text-neutral-200 whitespace-nowrap">
                            Iniciar sessão
                        </span>
                    </div>

                    {/* <LoginForm onSubmit={handleLogin} isLoading={isLoading} /> */}

                    <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="text-l-regular text-neutral-400 whitespace-nowrap">
                            Não possui uma conta?
                        </span>
                        <Link 
                            href="/register" 
                            className="text-b-l text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                        >
                            Registrar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}