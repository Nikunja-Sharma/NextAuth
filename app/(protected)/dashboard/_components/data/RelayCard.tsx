import { Badge } from "@/components/ui/badge";
import React from "react";

interface RelayCardProps {
    label: string;
    thresholdLabel: string;
    thresholdFrom: string;
    thresholdTo: string;

    isRelayon: boolean;
    unit: string;
}
const RelayCard = ({
    label,
    thresholdLabel,
    thresholdFrom,
    thresholdTo,
    isRelayon,
    unit,
}: RelayCardProps) => {
    return (
        <div className="block w-[150rem] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex w-[100%] justify-center text-center">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {label}
                </h5>
            </div>
            <div className="flex flex-row justify-between items-center">
                <h6 className="mb-2 text-xl flex gap-y-4 my-5 flex-col font-bold tracking-tight text-gray-600 dark:text-white">
                    {thresholdLabel} <span>Threshold Value</span>
                </h6>
                <h1 className="mb-2 flex flex-col text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {thresholdFrom} {unit}{" "}
                    <span className="text-base">TO </span>
                    {thresholdTo} {unit}
                </h1>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-xl  font-bold">
                    <span>{label}</span>
                </p>
                <Badge variant={isRelayon ? "success" : "destructive"}>
                    {isRelayon ? "ON" : "OFF"}
                </Badge>
            </div>
        </div>
    );
};

export default RelayCard;
