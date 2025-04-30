// components/Folder.tsx
import React from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  const r = Math.max(
    0,
    Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent)))
  );
  const g = Math.max(
    0,
    Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent)))
  );
  const b = Math.max(
    0,
    Math.min(255, Math.floor((num & 0xff) * (1 - percent)))
  );
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  color = "#00d8ff",
  size = 1,
  items = [],
  className = "",
}) => {
  const folderBackColor = darkenColor(color, 0.08);
  const paperColors = [
    darkenColor("#ffffff", 0.1),
    darkenColor("#ffffff", 0.05),
    "#ffffff",
  ];

  const papers = [...items.slice(0, 3)];
  while (papers.length < 3) papers.push(null);

  const scaleStyle = { transform: `scale(${size})` };

  const colorValues = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  const r = colorValues ? parseInt(colorValues[1], 16) : 0;
  const g = colorValues ? parseInt(colorValues[2], 16) : 216;
  const b = colorValues ? parseInt(colorValues[3], 16) : 255;

  return (
    <div style={scaleStyle} className={className}>
      <div
        className="group relative transition-all duration-200 ease-in cursor-pointer hover:-translate-y-2"
        style={{ "--folder-color": color } as React.CSSProperties}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {papers.map((item, i) => {
            const sizes = [
              "w-[70%] h-[80%]",
              "w-[80%] h-[70%]",
              "w-[90%] h-[60%]",
            ];
            return (
              <div
                key={i}
                className={`absolute z-20 bottom-[10%] left-1/2 transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0 transition-all duration-300 ease-in-out ${sizes[i]}`}
                style={{
                  backgroundColor: paperColors[i],
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {item}
              </div>
            );
          })}

          {/* 뒷표지 */}
          <div
            className="absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out group-hover:[transform:skew(-15deg)_scaleY(0.6)]"
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
            }}
          />

          {/* 앞표지 */}
          <div
            className="absolute z-40 w-full h-full origin-bottom transition-all duration-300 ease-in-out group-hover:[transform:skew(15deg)_scaleY(0.6)]"
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              pointerEvents: "none",
              filter: `drop-shadow(0 0 8px rgba(${r}, ${g}, ${b}, 0.3))`,
              position: "relative",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Folder;
