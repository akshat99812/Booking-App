'use client'
import { useEffect, useState } from "react"
import { Booking } from "./Booking"

export default function MakeBooking() {

    const [data, setData] = useState<null|any>(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
    fetch('/api/sessions')
        .then((res) => res.json())
        .then((data) => {
        setData(data)
        setLoading(false)
        })
    }, [])

if (!data) return <p>No profile data</p>


    return (
        <div  className="">
            {data.map(s=> <div>
                <Booking date={s.date} type={s.typeId} duration={s.duration} available={s.available} slot={s.slot} ></Booking>
                </div>)}
        </div>
    )
}