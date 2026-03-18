import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lane Web Design - Custom Web Design in Concord, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDF6EC",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "#C75B3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFDF9",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            CL
          </div>
          <div style={{ fontSize: 48, color: "#2D2A26", fontWeight: 700 }}>
            Lane Web Design
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#C75B3A",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Custom Web Design for Small Businesses
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#4A453F",
            textAlign: "center",
          }}
        >
          Concord, CA &middot; East Bay &middot; Bay Area
        </div>
      </div>
    ),
    { ...size },
  );
}
