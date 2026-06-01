
import Link from "next/link"

export default function Logotipo() {
    return (
        <Link href="/" className="flex items-center w-fit h-fit gap-3">
            {/* Imagem */}
            <div
                className="flex items-center justify-center w-12 h-12 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/images/brainlogo.png')" }}
            />
            <span className="headline-xxs-bold text-white select-none">BrainShare</span>
        </Link>
    );
}