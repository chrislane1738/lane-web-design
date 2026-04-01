"use client";

import Image from "next/image";

const projects = [
  {
    title: "Payback Brazilian Jiu-Jitsu",
    category: "Martial Arts & Fitness",
    image: "/work-payback-bjj.png",
    url: "https://paybackjiujitsu.com",
    fileSize: "248 KB",
    modified: "3/12/2025",
    type: "Web Page",
  },
  {
    title: "Stralane",
    category: "Finance & Technology",
    image: "/work-stralane.png",
    url: "https://stralane.com/",
    fileSize: "192 KB",
    modified: "1/08/2025",
    type: "Web Page",
  },
  {
    title: "Flying Squid Drones",
    category: "Media & Photography",
    image: "/work-flying-squid.png",
    url: "https://flyingsquiddrones.com/",
    fileSize: "310 KB",
    modified: "11/20/2024",
    type: "Web Page",
  },
];

export default function FeaturedWork() {
  return (
    <section
      style={{
        background: "var(--win-silver-light)",
        fontFamily: "Tahoma, Verdana, sans-serif",
        paddingBottom: 60,
      }}
    >
      <div style={{ height: 2, background: "var(--raised-dark)", borderBottom: "1px solid var(--raised-light)" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
        {/* Section header */}
        <div style={{ marginBottom: 16 }}>
          <div className="win-titlebar" style={{ fontSize: 12, fontWeight: "bold", marginBottom: 1 }}>
            <span>📁</span>
            <span>Recent Work — Windows Explorer</span>
            <div className="flex gap-0.5 ml-auto">
              <button className="win-button" style={{ width: 14, height: 12, minWidth: 0, padding: "0 2px", fontSize: 8 }}>_</button>
              <button className="win-button" style={{ width: 14, height: 12, minWidth: 0, padding: "0 2px", fontSize: 8 }}>□</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win-menubar flex items-center px-1" style={{ height: 18 }}>
            {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
              <span key={m} className="px-2 cursor-default hover:bg-win-highlight hover:text-white" style={{ fontSize: 11, lineHeight: "18px" }}>{m}</span>
            ))}
          </div>

          {/* Toolbar */}
          <div
            style={{
              background: "var(--win-silver)",
              borderBottom: "1px solid var(--raised-dark)",
              padding: "3px 4px",
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            {["Back", "Forward", "Up"].map((b) => (
              <button key={b} className="win-button" style={{ padding: "2px 8px", fontSize: 10, minWidth: 0 }}>{b}</button>
            ))}
            <div style={{ width: 1, height: 16, background: "var(--raised-dark)", margin: "0 4px" }} />
            <span style={{ fontSize: 10 }}>Address:</span>
            <div className="win-inset flex-1" style={{ height: 18, display: "flex", alignItems: "center", padding: "0 4px" }}>
              <span style={{ fontSize: 10, color: "var(--win-navy)" }}>C:\My Websites\Portfolio</span>
            </div>
          </div>
        </div>

        {/* Explorer-style layout: left pane + right list */}
        <div className="win-window" style={{ overflow: "hidden", display: "flex", minHeight: 400 }}>
          {/* Left pane */}
          <div
            style={{
              width: 160,
              flexShrink: 0,
              background: "var(--win-white)",
              borderRight: "1px solid var(--raised-dark)",
              padding: 8,
              fontSize: 11,
            }}
          >
            <div style={{ marginBottom: 8, fontWeight: "bold", fontSize: 11 }}>Folders</div>
            {[
              { icon: "🖥️", name: "Desktop" },
              { icon: "📁", name: "My Documents" },
              { icon: "📂", name: "Portfolio", active: true },
              { icon: "📄", name: "Resume.doc" },
              { icon: "🌐", name: "Favorites" },
            ].map((item) => (
              <div
                key={item.name}
                className={item.active ? "win-selected" : ""}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "2px 4px",
                  cursor: "default",
                  fontSize: 11,
                  color: item.active ? "#fff" : "#000",
                  marginBottom: 1,
                }}
              >
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Right content: icon or detail view */}
          <div style={{ flex: 1, overflow: "auto" }}>
            {/* Toolbar: view options */}
            <div
              style={{
                background: "var(--win-silver)",
                padding: "2px 6px",
                borderBottom: "1px solid var(--raised-dark)",
                display: "flex",
                gap: 4,
                alignItems: "center",
                fontSize: 10,
              }}
            >
              <span>3 objects</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                {["Icons", "List", "Details"].map((v) => (
                  <button key={v} className="win-button" style={{ padding: "1px 5px", fontSize: 9, minWidth: 0 }}>{v}</button>
                ))}
              </div>
            </div>

            {/* Project cards in icon view */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: 12 }}>
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", width: "calc(33% - 8px)", minWidth: 180 }}
                >
                  <div
                    className="win-window"
                    style={{ overflow: "hidden", cursor: "pointer" }}
                  >
                    {/* Mini title bar */}
                    <div className="win-titlebar" style={{ fontSize: 10, padding: "2px 4px" }}>
                      <span>🌐</span>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 120 }}>
                        {project.title}
                      </span>
                    </div>

                    {/* Screenshot */}
                    <div className="win-inset" style={{ margin: 6, position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                      <Image
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* File info */}
                    <div style={{ padding: "4px 6px 6px", fontSize: 10, borderTop: "1px solid var(--win-silver-dark)" }}>
                      <div style={{ fontWeight: "bold", fontSize: 10, marginBottom: 2, color: "var(--win-navy)" }}>
                        {project.title}
                      </div>
                      <div style={{ color: "#666" }}>
                        Type: {project.type}<br />
                        Category: {project.category}<br />
                        Modified: {project.modified}<br />
                        Size: {project.fileSize}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="win-statusbar" style={{ fontSize: 9 }}>
                      <span>{project.type}</span>
                      <span style={{ marginLeft: "auto" }}>{project.fileSize}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Explorer status bar */}
        <div className="win-statusbar flex items-center" style={{ fontSize: 10 }}>
          <span>3 object(s)</span>
          <span style={{ marginLeft: 16 }}>750 KB</span>
          <span style={{ marginLeft: "auto" }}>Local Disk (C:)</span>
        </div>
      </div>
    </section>
  );
}
