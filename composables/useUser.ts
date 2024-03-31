export const useUser = (user: User) => {
    const getFullName = computed(() => {
        return user.firstName + ' ' + user.lastName
    })

    return {
        getFullName
    }
}
