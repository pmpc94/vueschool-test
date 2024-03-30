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
        console.log('data', data)
        return data.value as PostWithUser[]
    } catch (e) {
        console.error('An error occurred:', e);
        throw(e)
    }
}

export {
    fetchPosts
}
