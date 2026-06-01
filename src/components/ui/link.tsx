
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

export default function LinkButton({
    href,
    children,
    external = false,
    className = '',
    ...props
}: LinkProps) {
    const classes = `flex items-center gap-1.5 ${className}`

    if (external) {
        return (
            <a
                href={href}
                className={classes}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    }

    return (
        <Link href={href} className={classes} {...props}>
            {children}
        </Link>
    )
}