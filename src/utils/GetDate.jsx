export const getDate = (due_date) => {
    const now = Date.now()
    const diff = due_date - now

    if (diff <= 0) return 'Срок истёк'

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)

    return days ? `${days} kun` : hours ? `${hours} soat` : minutes ? `${minutes} daqiqa` : ''
}