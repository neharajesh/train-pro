import { ReactNode } from "react"

export type SectionProps = Readonly<{
    title: string
    description?: string
    children: ReactNode
}>