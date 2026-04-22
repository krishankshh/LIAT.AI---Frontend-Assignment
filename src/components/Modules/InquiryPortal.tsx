import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle, MapPin, Phone, Clock, Mail } from 'lucide-react';
import './InquiryPortal.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const interestOptions = [
  { value: '', label: 'Select your interest' },
  { value: 'leasing-flagship', label: 'Leasing — Flagship & Anchor' },
  { value: 'leasing-inline', label: 'Leasing — In-Line Retail' },
  { value: 'leasing-popup', label: 'Leasing — Pop-Up & Seasonal' },
  { value: 'leasing-fnb', label: 'Leasing — F&B Concepts' },
  { value: 'sponsorship', label: 'Sponsorship & Brand Activation' },
  { value: 'events', label: 'Event Booking & Production' },
  { value: 'venue', label: 'Venue Rental — The Rotunda' },
  { value: 'other', label: 'Other / General Inquiry' },
];

const InquiryPortal: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interest: preselectedType,
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '4e6373e4-bb24-4e3c-8d0c-e78068db59c5',
          subject: `MOA Inquiry — ${formData.interest || 'General'}`,
          from_name: formData.contactName,
          company: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch {
      // Simulate success for demo purposes
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inquiry-portal">
      {/* Hero */}
      <motion.div className="inquiry-hero" {...fadeUp}>
        <span className="inquiry-eyebrow">Partner Inquiry</span>
        <h1 className="inquiry-title">
          Let's <span style={{ color: '#fdd500' }}>Talk.</span>
        </h1>
        <p className="inquiry-subtitle">
          Connect with our partnerships team to explore how Mall of America can amplify your brand, host your event, or become your next flagship location.
        </p>
      </motion.div>

      {/* Two-Column Layout */}
      <div className="inquiry-layout">
        {/* Form Column */}
        <motion.div className="inquiry-form-col" {...fadeUp}>
          {isSuccess ? (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">
                <CheckCircle size={36} />
              </div>
              <h2 className="success-title">
                Inquiry <span style={{ color: '#fdd500' }}>Sent.</span>
              </h2>
              <p className="success-text">
                Our partnerships team will review your inquiry and respond within 1-2 business days. We look forward to exploring opportunities together.
              </p>
            </motion.div>
          ) : (
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    className="form-input"
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Name</label>
                  <input
                    type="text"
                    name="contactName"
                    className="form-input"
                    placeholder="Full name"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Area of Interest</label>
                <select
                  name="interest"
                  className="form-select"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Timeline</label>
                <select
                  name="timeline"
                  className="form-select"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 30 days)</option>
                  <option value="quarter">This quarter</option>
                  <option value="half-year">Within 6 months</option>
                  <option value="year">Within 12 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your brand, goals, and what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                <Send size={14} />
              </button>
            </form>
          )}
        </motion.div>

        {/* Map + Contact Column */}
        <motion.div className="inquiry-map-col" {...fadeUp}>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.234567890!2d-93.2422!3d44.8549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f6208325555555%3A0x12345678!2sMall+of+America!5e0!3m2!1sen!2sus!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mall of America Location"
            />
          </div>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={18} />
              </div>
              <div>
                <div className="contact-detail-label">Address</div>
                <div className="contact-detail-value">
                  60 E Broadway<br />
                  Bloomington, MN 55425
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={18} />
              </div>
              <div>
                <div className="contact-detail-label">Leasing Office</div>
                <div className="contact-detail-value">+1 (952) 883-8800</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">partnerships@mallofamerica.com</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Clock size={18} />
              </div>
              <div>
                <div className="contact-detail-label">Business Hours</div>
                <div className="contact-detail-value">
                  Mon – Fri: 9:00 AM – 6:00 PM CST<br />
                  Sat – Sun: By Appointment
                </div>
              </div>
            </div>
          </div>

          <div className="trusted-by">
            <div className="trusted-label">Trusted by 520+ brands including</div>
            <div className="trusted-logos">
              <span className="trusted-logo">Nordstrom</span>
              <span className="trusted-logo">Nike</span>
              <span className="trusted-logo">Apple</span>
              <span className="trusted-logo">Zara</span>
              <span className="trusted-logo">Tesla</span>
              <span className="trusted-logo">Lululemon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InquiryPortal;
