export type NavBarType = {
    title: string
    link: string
}
export type ParamsType = {
    maincatalog?: string
    bladeweapon?: string
    souvenirs?: string
    flashlight?: string
    accessories?: string
    id: string | undefined
}
export type CatalogItemType = {
    id: number
    title: string
    price: number
    steel: string
    rating: number
    link: string
}

export type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}