import type { PostWithUser } from '../types'

const fetchPosts = async (offset: number, order: string): Promise<PostWithUser[]> => {
    try {
        const { data } = await useFetch('api/posts', {
        query: {
            limit: 10,
            offset,
            include: 'user',
            order,
            select: "id,title,excerpt,publishedAt,image,user.firstName, user.lastName, user.avatar",
        }
        })
        return data.value as PostWithUser[]
    } catch (e) {
        console.error('An error occurred in fetchPosts:', e);
        throw(e)
    }
}

const fetchPostDetail = async (id: string): Promise<PostWithUser> => {
    try {
        const { data } = await useFetch(`/api/posts/${id}`, {
            query: {
                include: 'user',
                select: "title,content,publishedAt,image,user.firstName, user.lastName, user.avatar, user.email",
            }
        })
        return data.value as PostWithUser
    } catch (e) {
        console.error('An error occurred in fetchPostDetail:', e);
        throw(e)
    }
}

export {
    fetchPosts,
    fetchPostDetail
}
