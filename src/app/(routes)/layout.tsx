
import { GuestLayout } from '@/components/layouts/GuestLayout'

export default function GuestRouteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <GuestLayout>{children}</GuestLayout>
}