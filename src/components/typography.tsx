import { cn } from "@/lib/utils";
import { TypographyProps } from "@/types";

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1 className={cn("font-mono font-normal xl:text-[32px] text-[28px]", className)}>
            {children}
        </h1>
    )
}

export function TypographyH2({ children, className }: TypographyProps) {
    return (
        <h2 className={cn("font-mono font-medium text-[26px] leading-[140%] -tracking-[1%]", className)}>{children}</h2>
    )
}

export function TypographyH3({ children, className }: TypographyProps) {
    return (
        <h3 className={cn("font-mono font-medium text-[22px] leading-[150%] -tracking-[1%]", className)}>{children}</h3>
    )
}

export function TypographyTitle({ children, className }: TypographyProps) {
    return (
        <h5 className={cn("font-sans font-medium text-[20px] leading-[150%] -tracking-[1%]", className)}>{children}</h5>
    )
}

export function TypographySubtitle({ children, className }: TypographyProps) {
    return (
        <h6 className={cn("font-sans font-medium text-[18px] -tracking-[1%]", className)}>{children}</h6>
    )
}


export function TypographyLink({ children, className }: TypographyProps) {
    return (
        <span className={cn("font-sans font-semibold text-[16px] leading-[150%] -tracking-[1%]", className)}>{children}</span>
    )
}

export function TypographyBodyLight({ children, className }: TypographyProps) {
    return (
        <p className={cn("font-sans font-light text-[16px] leading-[153%] -tracking-[1%]", className)}>{children}</p>
    )
}

export const typographyBodyBoldClassName = "font-sans font-bold text-[16px] leading-[172%] -tracking-[1%]"
export function TypographyBodyBold({ children, className }: TypographyProps) {
    return (
        <p className={cn(typographyBodyBoldClassName, className)}>{children}</p>
    )
}

export const typographyBodyRegularClassNames = `font-sans font-normal text-[16px] leading-[169%] -tracking-[1%]`
export function TypographyBodyRegular({ children, className }: TypographyProps) {
    return (
        <p className={cn(typographyBodyRegularClassNames, className)}>{children}</p>
    )
}

export function TypographyNavbarLink({ children, className }: TypographyProps) {
    return (
        <span className={cn("font-noto text-[18px]", className)}>{children}</span>
    )
}

export function TypographyHighlight({ children, className }: TypographyProps) {
    return (
        <span className={cn("font-bold text-red", className)}>{children}</span>
    )
}