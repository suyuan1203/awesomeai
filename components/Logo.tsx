import { cn } from "@/lib/utils";

const gradients = [
  "from-indigo-500 to-violet-500",
  "from-sky-500 to-indigo-500",
  "from-rose-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-fuchsia-500 to-pink-500",
  "from-amber-500 to-red-500",
];

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

const sizes = {
  sm: "h-9 w-9 text-base rounded-lg",
  md: "h-11 w-11 text-lg rounded-xl",
  lg: "h-14 w-14 text-2xl rounded-2xl",
};

export default function Logo({
  glyph,
  name,
  size = "md",
}: {
  glyph: string;
  name: string;
  size?: keyof typeof sizes;
}) {
  const g = gradients[hash(name) % gradients.length];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center bg-gradient-to-br text-white shadow-sm",
        g,
        sizes[size]
      )}
      aria-hidden="true"
    >
      <span className="drop-shadow-sm">{glyph}</span>
    </div>
  );
}
