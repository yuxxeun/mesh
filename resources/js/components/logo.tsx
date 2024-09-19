import { IconBrandJustd } from 'justd-icons'
import type React from 'react'
import { cn } from 'ui'

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return <IconBrandJustd className={cn('size-6', className)} {...props} />
}
