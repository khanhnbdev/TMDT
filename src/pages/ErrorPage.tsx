import type { PageProps } from "./types";
import Breadcrumb from "./Breadcrumb";

export default function ErrorPage({ navigate }: Pick<PageProps, "navigate">) {
  return (
    <main className="route-main error-page">
      <Breadcrumb items={["404 Error"]} navigate={navigate} />
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <button className="red-button" onClick={() => navigate("/")}>
        Back to home page
      </button>
    </main>
  );
}
