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
      {/* Browser chrome */}
      <div className="bg-[#202124] rounded-t-xl overflow-hidden">
        {/* Tab bar */}
        <div className="flex items-center gap-2 px-3 pt-2.5 pb-0">
          {/* Traffic lights */}
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#61C554]" />
          </div>
          {/* Tab */}
          <div className="flex items-center bg-[#35363A] rounded-t-lg px-4 py-1.5 ml-2 max-w-[160px]">
            <span className="text-[10px] text-white/60 truncate">New Tab</span>
          </div>
        </div>
        {/* Address bar */}
        <div className="px-3 pb-2.5 pt-1.5">
          <div className="bg-[#35363A] rounded-full px-4 py-1.5 flex items-center">
            <div className="w-3 h-3 rounded-full border border-white/20 mr-2 shrink-0" />
            <span className="text-[10px] text-white/40 truncate">yourwebsite.com</span>
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="rounded-b-md overflow-hidden aspect-[16/10]">
        <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
      </div>
    </div>
  );
}
