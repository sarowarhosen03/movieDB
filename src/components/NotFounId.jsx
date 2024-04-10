'use client'
import {useParams} from "next/navigation";

export default function NotFounId() {
    const {id} = useParams();
    return id;
}