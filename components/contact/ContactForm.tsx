"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const projectTypes = [
  "New Website",
  "Website Redesign",
  "SEO & Optimization",
  "Maintenance & Support",
  "Other",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $2,000",
  "$2,000 - $5,000",
  "$5,000+",
  "Not sure yet",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="bg-sage/10 rounded-2xl p-8 text-center">
        <h3
          className="text-2xl text-charcoal mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thanks for reaching out!
        </h3>
        <p className="text-charcoal-light">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-warm-white border border-border text-charcoal text-sm focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
          Name <span className="text-terracotta">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={inputClasses}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-terracotta text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
          Email <span className="text-terracotta">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClasses}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-terracotta text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={inputClasses}
          placeholder="(555) 555-5555"
        />
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-1.5">
          Project Type
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => handleChange("projectType", e.target.value)}
          className={inputClasses}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-1.5">
          Budget Range
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => handleChange("budget", e.target.value)}
          className={inputClasses}
        >
          <option value="">Select a range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Tell us about your project <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={inputClasses}
          placeholder="What are you looking to build? What's your timeline?"
        />
        {errors.message && (
          <p className="text-terracotta text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {errors.form && (
        <p className="text-terracotta text-sm text-center">{errors.form}</p>
      )}

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
