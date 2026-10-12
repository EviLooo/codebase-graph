import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

async function WorkspaceContent() {
  const { orgId, orgSlug } = await auth();
  return (
    <main className="workspace-shell">
      <section aria-labelledby="workspace-title" className="workspace-heading">
        <div>
          <p className="eyebrow">Team workspace</p>
          <h1 id="workspace-title">{orgSlug ?? "Codebase Graph"}</h1>
          <p className="workspace-identity">Organization <code>{orgId ?? "No active organization"}</code></p>
        </div>
        <div className="workspace-context">
          <span className="status-chip"><span aria-hidden="true" />Workspace ready</span>
        </div>
      </section>

      <section aria-label="Repository map" className="map-surface">
        <div className="map-toolbar">
          <div className="map-title-group">
            <span aria-hidden="true" className="map-title-mark"><svg viewBox="0 0 16 16" fill="none"><path d="M3 3.5h4v4H3zM9 8.5h4v4H9zM7 5.5h3v3" /></svg></span>
            <h2>Repository map</h2>
          </div>
          <span className="map-status"><span aria-hidden="true" />No repository mapped</span>
        </div>
        <div className="workspace-canvas">
          <div className="empty-state">
            <svg aria-hidden="true" className="empty-map-mark" viewBox="0 0 144 104" fill="none">
              <path className="map-link" d="M40 27h30m4 4v15m0 4v17m4 4h18M48 77h19" />
              <rect className="map-node map-node-primary" x="20" y="15" width="20" height="24" rx="4" />
              <rect className="map-node" x="70" y="15" width="24" height="16" rx="4" />
              <rect className="map-node" x="70" y="47" width="24" height="20" rx="4" />
              <rect className="map-node" x="96" y="67" width="28" height="20" rx="4" />
              <rect className="map-node" x="20" y="67" width="28" height="20" rx="4" />
              <circle className="map-point" cx="76" cy="37" r="2" />
              <circle className="map-point" cx="76" cy="73" r="2" />
            </svg>
            <p className="empty-label">Nothing mapped yet</p>
            <h3>Your repository map will live here</h3>
            <p className="empty-copy">Once a repository is connected, its folders and file dependencies will take shape on this canvas.</p>
          </div>
          <span aria-hidden="true" className="canvas-coordinate canvas-coordinate-top">MAP / 01</span>
          <span aria-hidden="true" className="canvas-coordinate canvas-coordinate-bottom">DEPENDENCY VIEW</span>
        </div>
      </section>
    </main>
  );
}

function WorkspaceFallback() {
  return (
    <main className="workspace-shell">
      <section className="workspace-heading" aria-label="Loading workspace">
        <p className="eyebrow">Team workspace</p>
      </section>
      <div aria-label="Loading workspace" className="workspace-canvas" />
    </main>
  );
}

export default function WorkspacePage() {
  return (
    <Suspense fallback={<WorkspaceFallback />}>
      <WorkspaceContent />
    </Suspense>
  );
}
