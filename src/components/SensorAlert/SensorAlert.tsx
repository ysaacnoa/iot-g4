import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Thermometer, Wind, CheckCircle } from "lucide-react";

interface SensorAlertProps {
    temperatura: number;
    co2: number;
}

export default function SensorAlert({ temperatura, co2 }: SensorAlertProps) {
    const umbralTemperatura = 8;
    const umbralCO2 = 10000;

    const alertaTemperatura = temperatura > umbralTemperatura;
    const alertaCO2 = co2 > umbralCO2;
    const esCondicionNormal = !alertaTemperatura && !alertaCO2;

    return (
        <Card className={`p-4 rounded-lg w-full max-w-md flex items-center justify-center text-center min-h-32 border ${esCondicionNormal ? 'bg-green-200 border-green-400' : 'bg-blue-200 border-blue-400'}`}>
            <CardContent className="w-full flex flex-col items-center justify-center text-center flex-grow h-full">
                <div className="flex flex-col items-center justify-center h-full">
                    {alertaTemperatura && !alertaCO2 && (
                        <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                            <Thermometer className="w-6 h-6" />
                            <span>Temperatura Alta 🔥 ({temperatura}°C)</span>
                        </div>
                    )}

                    {alertaCO2 && !alertaTemperatura && (
                        <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                            <Wind className="w-6 h-6" />
                            <span>CO₂ Elevado 🌫️ ({co2} ppm)</span>
                        </div>
                    )}

                    {alertaTemperatura && alertaCO2 && (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                                <Thermometer className="w-6 h-6" />
                                <span>Temperatura Alta 🔥 ({temperatura}°C)</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                                <Wind className="w-6 h-6" />
                                <span>CO₂ Elevado 🌫️ ({co2} ppm)</span>
                            </div>
                        </div>
                    )}

                    {esCondicionNormal && (
                        <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                            <CheckCircle className="w-6 h-6" />
                            <span>Condiciones Normales ✅</span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}