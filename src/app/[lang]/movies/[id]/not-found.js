import React from "react";
import Image from "next/image";
import NotFounId from "@/components/NotFounId";
function Pathname() {
    return (
        <div className="h-full w-full min-h-[30rem] flex items-center justify-center flex-col "

        >

            <Image
                src='/assets/notfoundico.svg'
                height={200}
                width={200}
                alt={"not found"}
                priority
            />

            <h1 className="font-bold dark:text-white text-2xl">
                Opps !
            </h1>
            <p className="font-bold dark:text-white text-xl">
                This movie with <NotFounId/> id was not found
            </p>

        </div>
    );
}

export default Pathname;