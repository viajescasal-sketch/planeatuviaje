/**
 * CountdownTimer — Viajes Casal
 * Contador regresivo hasta el último día del mes actual
 */
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Obtener el último día del mes actual
      const now = new Date();
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      lastDay.setHours(23, 59, 59, 999);

      const difference = lastDay.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 text-sm font-semibold">
      <span className="text-white/80">⏱️ Termina en:</span>
      <div className="flex gap-2">
        <div className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-center min-w-12">
          <div className="text-lg font-bold">{String(timeLeft.days).padStart(2, "0")}</div>
          <div className="text-xs text-white/70">días</div>
        </div>
        <div className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-center min-w-12">
          <div className="text-lg font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xs text-white/70">hrs</div>
        </div>
        <div className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-center min-w-12">
          <div className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xs text-white/70">min</div>
        </div>
        <div className="bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-center min-w-12">
          <div className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-xs text-white/70">seg</div>
        </div>
      </div>
    </div>
  );
}
