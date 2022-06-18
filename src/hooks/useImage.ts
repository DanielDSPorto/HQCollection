import { useEffect, useState } from 'react'

const useImage = (fileName : string) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);
    const [image, setImage] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`./../assets/${fileName}`) // change relative path to suit your needs
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage