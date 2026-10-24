import { useEffect, useState } from "react";
import { pageHeights } from "../pages/routes";
import type { Route } from "../pages/types";

function currentRoute(): Route {
  const pathname = window.location.pathname;
  return Object.hasOwn(pageHeights, pathname) ? (pathname as Route) : "/404";
}

// Đường dẫn hiện tại và tỉ lệ hiển thị canvas Figma 1440px.
export default function useNavigation() {
  const [route, setRoute] = useState<Route>(currentRoute);
  const [scale, setScale] = useState(() =>
    Math.min(1, document.documentElement.clientWidth / 1440),
  );

  useEffect(() => {
    const update = () =>
      setScale(Math.min(1, document.documentElement.clientWidth / 1440));
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onPop = () => setRoute(currentRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const title =
      route === "/"
        ? "Home"
        : route.slice(1).replace(/^./, (letter) => letter.toUpperCase());
    document.title = `Exclusive — ${title}`;
  }, [route]);

  function navigateTo(next: Route) {
    if (window.location.pathname !== next)
      window.history.pushState({}, "", next);
    setRoute(next);
    window.scrollTo(0, 0);
  }

  return { route, scale, navigateTo };
}
