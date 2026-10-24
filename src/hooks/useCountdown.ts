import { useEffect, useState } from "react";

export function countdownParts(deadline: number, now: number) {
  const total = Math.max(0, Math.ceil((deadline - now) / 1000));
  const pad = (value: number) => String(value).padStart(2, "0");
  return {
    days: pad(Math.floor(total / 86400)),
    hours: pad(Math.floor(total / 3600) % 24),
    minutes: pad(Math.floor(total / 60) % 60),
    seconds: pad(total % 60),
  };
}

// Lưu thời hạn, không lưu số giây: chuyển tab hoặc tải lại vẫn đếm đúng.
export default function useCountdown(key: string, durationSeconds: number) {
  const [deadline] = useState(() => {
    const fallback = Date.now() + durationSeconds * 1000;
    try {
      const saved = Number(localStorage.getItem(key));
      if (Number.isFinite(saved) && saved > 0) return saved;
      localStorage.setItem(key, String(fallback));
    } catch {
      /* Vẫn đếm được khi trình duyệt chặn lưu trữ. */
    }
    return fallback;
  });
  const [now, setNow] = useState(Date.now);
  useEffect(() => {
    const update = () => setNow(Date.now());
    const timer = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return countdownParts(deadline, now);
}
