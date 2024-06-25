'use client'
import { Timing } from "./Timing";
import { useEffect, useState } from "react";


export default function GetSessions() {

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

if (!data) return <div> </div>
 
    return (
                <div className="grid grid-cols-5 gap-8">
                {data.map((s: { available: boolean; slot: string; id: number; duration: number; })=> <div>
                <Timing available={s.available} slot={s.slot} id={s.id} duration={s.duration} ></Timing>
                </div>)}
                </div>
    )
}