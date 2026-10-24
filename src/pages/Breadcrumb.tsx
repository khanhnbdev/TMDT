import type { PageProps } from "./types";

export default function Breadcrumb({
  items,
  navigate,
}: {
  items: string[];
  navigate: PageProps["navigate"];
}) {
  return (
    <div className="page-crumb">
      <button onClick={() => navigate("/")}>Home</button>
      {items.map((item, i) => (
        <span key={i}>
          / &nbsp; <b>{item}</b>
        </span>
      ))}
    </div>
  );
}
