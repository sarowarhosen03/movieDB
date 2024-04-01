"use client";

import {useRouter} from "next/navigation";
import {useCallback, useEffect, useRef} from "react";


const Modal = ({children}) => {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);


    return (

        <div ref={overlay}
             onClick={onClick}
             className="animate-fade fixed top-0 bottom-0  right-0  left-0  transition-all duration-150  flex flex-col items-center justify-center  bg-black bg-opacity-70 z-20 ">
            <div
                ref={wrapper}
                className=" animate-fade max-w-[70%] bg-body p-3 rounded-md ">
                {children}
            </div>
        </div>

    )

};

export default Modal;