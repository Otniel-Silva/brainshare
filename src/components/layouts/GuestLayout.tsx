
import Header from '../common/header'
import Footer from '../common/Footer'

export function GuestLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full bg-linear-to-br from-gray-950 via-gray-950 to-gray-800 min-h-screen">
            <Header />

            <main className="flex-1">
                {children}
            </main>
            
            <Footer />
        </div>
    )
}