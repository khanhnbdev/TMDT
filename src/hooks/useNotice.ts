import { useEffect, useRef, useState } from "react";

// Mỗi thông báo tồn tại 3,5 giây. Thông báo mới sẽ thay thế lịch tắt cũ.
export default function useNotice() {
  const [notice, setNotice] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  function showNotice(message: string) {
    if (timer.current) clearTimeout(timer.current);
    setNotice(message);
    timer.current = setTimeout(() => setNotice(""), 3500);
  }

  return { notice, showNotice };
}
