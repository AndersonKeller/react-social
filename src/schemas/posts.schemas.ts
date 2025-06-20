import {z} from "zod"
import { returnUserSchema } from "./usuario.schemas"

export const craetePostsSchema = z.object({
    title:z.string(),
    content:z.string(),
    
})
export const returnPostSchema = craetePostsSchema.extend({
    id: z.number(),
    usuario: returnUserSchema
})
export const returnAllPostsSchema = returnPostSchema.array()

export type CreatePost = z.infer<typeof craetePostsSchema>
export type Post = z.infer<typeof returnPostSchema>
export type iPosts = z.infer<typeof returnAllPostsSchema>