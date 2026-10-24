import { useEffect, useState } from "react";

// Chuyển banner sau 5 giây. Chọn thủ công sẽ bắt đầu lại thời gian chờ.
export default function useHeroAutoplay(slideCount: number, enabled: boolean) {
  const [index, setIndex] = useState(2);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const updateVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!enabled || hovered || focused || !visible) return;

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, 5000);

    // Hủy lịch cũ khi đổi slide, tạm dừng hoặc rời trang chủ.
    return () => window.clearTimeout(timer);
  }, [index, slideCount, enabled, hovered, focused, visible]);

  return { index, setIndex, setHovered, setFocused };
}
