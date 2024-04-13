import React from "react";
import DHT11 from "./_components/data/DH11Card";
import LDRCard from "./_components/data/LDRCard";
import MQ135 from "./_components/data/MQ135";
import RelayCard from "./_components/data/RelayCard";
const page = () => {
    return (
        <>
            <div className="bg-secondary w-[100%] flex flex-col items-center justify-center p-9 rounded-xl mx-4  md:w-[70vw] gap-9 shadow-sm">
                <div className="flex w-[100%] flex-wrap gap-y-3 justify-between flex-row">
                    <DHT11 />
                    <MQ135 />
                    <LDRCard />
                </div>
                <div className="flex w-[100%] flex-wrap gap-y-3 justify-between flex-row">
                    <RelayCard
                        label="Fan"
                        thresholdLabel="Temperature"
                        thresholdFrom="20"
                        thresholdTo="12"
                        isRelayon={true}
                        unit="°C"
                    />
                    <RelayCard
                        label="Ventilation"
                        thresholdLabel="Gas
Concentration"
                        thresholdFrom="20"
                        thresholdTo="12"
                        isRelayon={false}
                        unit="PPM"
                    />
                    <RelayCard
                        label="Light"
                        thresholdLabel="Light Intensity"
                        thresholdFrom="20"
                        thresholdTo="12"
                        isRelayon={false}
                        unit="LUX"
                    />
                </div>
            </div>
        </>
    );
};

export default page;
