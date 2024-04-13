import React from "react";

const MQ135 = () => {
    return (
        <div className="block w-[150rem] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex w-[100%] justify-center text-center">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    MQ135
                </h5>
            </div>
            <div className="flex flex-col h-[75%] justify-center">
                <div className="flex flex-row justify-between items-center">
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Gas <br /> Concentration
                    </h6>
                    <h1 className="mb-2 flex flex-row gap-x-3  text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        200<p className="text-base">PPM</p>
                    </h1>
                </div>

                <p className="text-sm">TimeStamp</p>
            </div>
        </div>
    );
};

export default MQ135;
