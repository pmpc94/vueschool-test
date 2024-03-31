import type { PostWithUser } from '../types'
import { fetchPosts, fetchPostDetail } from '../services'
 

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: <PostWithUser[]>[],
    currentPost: <PostWithUser>{},
  }),
  getters: {
    getPosts({ posts }) {
      return posts
    },
    getPostDetail({ currentPost }) {
      return currentPost
    }
  },
  actions: {
    async fetch(offset: number, order: string) {
      this.posts = await fetchPosts(offset, order)
    },
    async fetchDetail(id: string) {
      this.currentPost = await fetchPostDetail(id)
    }
  }
})
