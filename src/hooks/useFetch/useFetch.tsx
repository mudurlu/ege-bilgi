import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url: string){
    const [resultData, setResultData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>
    {
        fetchData()
    },[url])

    const fetchData = async() => {
        try{
            const {data} = await axios.get(url)
            setResultData(data)
            setLoading(false)
        }
        catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return {resultData,loading, error}
}