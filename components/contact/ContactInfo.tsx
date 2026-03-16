import { Mail, Phone, MapPin, Clock } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "chris@clanewebdesign.com",
    href: "mailto:chris@clanewebdesign.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(925) 542-2284",
    href: "tel:+19255422284",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Concord, CA",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-2xl text-charcoal mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s Talk
        </h2>
        <p className="text-charcoal-light text-sm leading-relaxed">
          Have a project in mind? We&apos;d love to hear about it. Reach out using any
          method below, or fill out the form.
        </p>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-terracotta/10 rounded-xl flex items-center justify-center shrink-0">
              <item.icon size={18} className="text-terracotta" />
            </div>
            <div>
              <p className="text-xs text-charcoal-light uppercase tracking-wider mb-0.5">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-charcoal font-medium text-sm hover:text-terracotta transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-charcoal font-medium text-sm">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
