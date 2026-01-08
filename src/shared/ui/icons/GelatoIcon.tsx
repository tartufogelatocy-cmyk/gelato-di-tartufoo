import { SVGProps } from "react";

export interface GelatoIconProps extends SVGProps<SVGSVGElement> {
  /** Icon size in px, applied to both width and height. If not provided, icon will take size from CSS. */
  size?: number | string;
  /** Fill color */
  color?: string;
  className?: string;
}

/**
 * Re-usable gelato bubbles icon.
 *
 * ‑ `size` — задаёт и ширину, и высоту. Если не передано, размеры можно контролировать из CSS (например, через media-query).
 * ‑ `color` — цвет через `currentColor`.
 */
export const GelatoIcon = ({
  size,
  color,
  style,
  className,
  ...props
}: GelatoIconProps) => {
  const dimensionStyle = size ? { width: size, height: size } : {};
  const mergedStyle = {
    ...dimensionStyle,
    color,
    ...style,
  } as React.CSSProperties;
  return (
    <svg
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
      style={mergedStyle}
      {...props}
    >
      <path
        d="M38.5667 13.4727C38.5667 20.9135 32.9404 26.9455 26 26.9455C19.0596 26.9455 13.4333 20.9135 13.4333 13.4727C13.4333 6.03195 19.0596 0 26 0C32.9404 0 38.5667 6.03195 38.5667 13.4727Z"
        fill="currentColor"
      />
      <path
        d="M38.5667 38.5273C38.5667 45.9681 32.9404 52 26 52C19.0596 52 13.4333 45.9681 13.4333 38.5273C13.4333 31.0865 19.0596 25.0545 26 25.0545C32.9404 25.0545 38.5667 31.0865 38.5667 38.5273Z"
        fill="currentColor"
      />
      <path
        d="M23.4 26.2364C23.4 33.155 18.1617 38.7636 11.7 38.7636C5.23827 38.7636 0 33.155 0 26.2364C0 19.3177 5.23827 13.7091 11.7 13.7091C18.1617 13.7091 23.4 19.3177 23.4 26.2364Z"
        fill="currentColor"
      />
      <path
        d="M52 26.2364C52 33.155 46.7617 38.7636 40.3 38.7636C33.8383 38.7636 28.6 33.155 28.6 26.2364C28.6 19.3177 33.8383 13.7091 40.3 13.7091C46.7617 13.7091 52 19.3177 52 26.2364Z"
        fill="currentColor"
      />
    </svg>
  );
};
