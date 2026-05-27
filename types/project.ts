export interface Project {
    id: string
    tab: string
    title: string
    description: string
    architecture: string[]
    role: string
    features: string[]
    details: string
    contribution: string[]
    github?: string
    deploy?: string
    gallery?: Array<{
        image: string
        title: string
        description: string
    }>
}
