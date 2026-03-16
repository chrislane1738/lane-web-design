interface DeviceMockupProps {
  type?: "laptop" | "phone";
  gradient: string;
  className?: string;
}

export default function DeviceMockup({
  type = "laptop",
  gradient,
  className = "",
}: DeviceMockupProps) {
  if (type === "phone") {
    return (
      <div className={`flex justify-center ${className}`}>
        <div className="w-48 bg-charcoal rounded-3xl p-2 shadow-lg">
          <div className="rounded-2xl overflow-hidden aspect-[9/19]">
            <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="bg-charcoal rounded-t-xl pt-3 px-3">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal-light" />
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal-light" />
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal-light" />
        </div>
        <div className="rounded-t-md overflow-hidden aspect-[16/10]">
          <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        </div>
      </div>
      <div className="bg-charcoal-light h-3 rounded-b-lg mx-8" />
    </div>
  );
}
