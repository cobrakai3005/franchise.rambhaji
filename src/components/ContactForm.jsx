import { useState } from "react";

import { Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const zones = [
  "Arera Colony",
  "MP Nagar",
  "Kolar Road",
  "Hoshangabad Road",
  "Saket Nagar",
  "Shahpura",
  "Bawadiya Kalan",
  "Ayodhya Nagar",
  "Other",
];

const capacityOptions = ["₹2 - ₹3 Lakhs", "₹3 - ₹4 Lakhs", "₹4 - ₹5 Lakhs"];

const INITIAL = {
  name: "",
  phone: "",
  email: "",
  area: "",
  zone: "",
  capacity: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm(INITIAL);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="apply" pink>
      <div className="mb-14 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            color: "#EA33FF",
            border: "1px solid rgba(234, 51, 255, 0.3)",
            backgroundColor: "rgba(234, 51, 255, 0.08)",
          }}
        >
          Take the First Step
        </span>
        <h2
          className="mt-4 text-3xl font-bold md:text-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          Apply for{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #33C3FF, #EA33FF)",
            }}
          >
            Your Franchise
          </span>
        </h2>
      </div>

      <div className="mx-auto max-w-xl">
        {submitted ? (
          <div
            className="rounded-2xl border p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <CheckCircle size={48} className="mx-auto" style={{ color: "#33C3FF" }} />
            <h3
              className="mt-4 text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Application Received!
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Our team will call you within 4 hours for a quick screening. We'll
              then invite you to visit our Bhopal sorting unit.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3342FF, #EA33FF)",
              }}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
              <InputField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
            </div>

            <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />

            <InputField label="Current Area in Bhopal" name="area" value={form.area} onChange={handleChange} required />

            <SelectField label="Preferred Zone" name="zone" value={form.zone} onChange={handleChange} options={zones} required />

            <SelectField
              label="Investment Capacity"
              name="capacity"
              value={form.capacity}
              onChange={handleChange}
              options={capacityOptions}
              placeholder="Select range"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-base font-semibold text-white shadow-lg transition-shadow hover:shadow-xl disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #3342FF, #EA33FF)",
              }}
            >
              {loading ? (
                <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  Schedule a Callback
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}

function InputField({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label
        className="mb-1.5 block text-sm font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#33C3FF")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder, required }) {
  return (
    <div>
      <label
        className="mb-1.5 block text-sm font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#33C3FF")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
      >
        <option value="">{placeholder || "Select"}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
