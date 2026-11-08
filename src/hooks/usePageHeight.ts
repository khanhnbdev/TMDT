import { useLayoutEffect, useRef, useState } from "react";
import { pageHeights } from "../pages/routes";
import type { Route } from "../pages/types";

const FOOTER_HEIGHT = 440;
const CONTENT_FOOTER_GAP = 96;

// Cart và Checkout dài ra theo số sản phẩm, nên footer phải theo sau nội dung.
export default function usePageHeight(route: Route) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [measured, setMeasured] = useState<{ route: Route; height: number }>();

  useLayoutEffect(() => {
    if (route !== "/cart" && route !== "/checkout") return;

    const main = pageRef.current?.querySelector<HTMLElement>(".route-main");
    if (!main) return;

    const updateHeight = () => {
      const needed =
        main.offsetTop + main.offsetHeight + CONTENT_FOOTER_GAP + FOOTER_HEIGHT;
      setMeasured((current) =>
        current?.route === route && current.height === needed
          ? current
          : { route, height: needed },
      );
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(main);
    return () => observer.disconnect();
  }, [route]);

  const pageHeight = Math.max(
    pageHeights[route],
    measured?.route === route ? measured.height : 0,
  );
  return { pageRef, pageHeight };
}
