import type { PanelProps } from "./types";

export default function InfoPanel(props: PanelProps) {
  return (
    <div className="info-content">
      {props.infoTitle === "Contact" ? (
        <>
          <p>Have a question about the shop?</p>
          <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          <p>+88015-88888-9999</p>
        </>
      ) : props.infoTitle === "About" ? (
        <p>
          Exclusive brings together fashion, electronics, home goods and more in
          one storefront.
        </p>
      ) : (
        <p>
          This is an interactive front-end preview. The{" "}
          {props.infoTitle.toLowerCase()} page is not connected to a backend
          service.
        </p>
      )}
      <button
        className="panel-secondary"
        onClick={() => props.onMode("search")}
      >
        Browse products
      </button>
    </div>
  );
}
