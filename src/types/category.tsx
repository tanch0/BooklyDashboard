export type Category ={
    id: string,
    name: string,
    status: number,
    created_at: string,
    updated_at: string,
}
export type PaginatedCategory = {
    categories: Category[],
    total: number
}
export type CategoryCreate = Omit<Category, "id" | "created_at" | "updated_at">