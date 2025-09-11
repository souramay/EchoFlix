import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const err = useRouteError();
  return (
    <div style={{ padding: 32, color: "white", background:"#111" }}>
      <h2>Route Error</h2>
      <pre>{(err && (err.status + " " + (err.statusText || err.message))) || "Unknown error"}</pre>
    </div>
  );
}