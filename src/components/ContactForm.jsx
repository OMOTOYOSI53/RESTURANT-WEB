import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Tag, 
  FileText 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Dining Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide your phone number';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message (at least 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    let text = `📩 *NEW CONTACT ENQUIRY - BLESSINGS RESTAURANT*\n`;
    text += `═══════════════════════════\n`;
    text += `👤 *Sender:* ${formData.fullName.trim()}\n`;
    text += `📞 *Phone:* ${formData.phone.trim()}\n`;
    text += `✉️ *Email:* ${formData.email.trim()}\n`;
    text += `📌 *Subject:* ${formData.subject}\n`;
    text += `═══════════════════════════\n`;
    text += `*MESSAGE:*\n${formData.message.trim()}\n`;
    text += `═══════════════════════════\n`;
    text += `_Sent via Blessings Restaurant Website Contact Form._`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/2348144638639?text=${encoded}`;

    setSubmittedStatus(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="rustic-card"
      style={{
        padding: '2.5rem',
        borderRadius: '16px',
        backgroundColor: '#3a251a',
        border: '1px solid rgba(193, 138, 69, 0.35)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <span className="section-tag">Direct Transmission</span>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.9rem',
            color: '#F3E8D5',
            marginTop: '0.4rem',
            marginBottom: '0.6rem',
          }}
        >
          Send Us a Message
        </h3>
        <p style={{ fontSize: '0.92rem', color: '#D8C7B0' }}>
          Have a query about private catering, bookings, special dietary requirements, or feedback? Fill in your details below.
        </p>
      </div>

      {submittedStatus && (
        <div
          style={{
            backgroundColor: 'rgba(193, 138, 69, 0.15)',
            border: '1px solid #C18A45',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#F3E8D5',
            fontSize: '0.88rem',
          }}
        >
          <CheckCircle2 size={20} color="#E2B66F" style={{ flexShrink: 0 }} />
          <div>
            <strong>WhatsApp Message Prepared:</strong> Your message has been prepared for WhatsApp (+234 814 463 8639). Please tap "Send" in WhatsApp to dispatch it to our desk.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
              placeholder="e.g. Babatunde Adeleke"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="form-error">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'has-error' : ''}`}
              placeholder="e.g. you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {/* Phone */}
          <div className="form-group">
            <label className="form-label">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className={`form-input ${errors.phone ? 'has-error' : ''}`}
              placeholder="e.g. 0814 463 8639"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          {/* Subject */}
          <div className="form-group">
            <label className="form-label">Subject</label>
            <select
              name="subject"
              className="form-select"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="General Dining Enquiry">General Dining Enquiry</option>
              <option value="Table Reservation Assistance">Table Reservation Assistance</option>
              <option value="Event & Wedding Catering">Event & Wedding Catering</option>
              <option value="Bulk Food Delivery Order">Bulk Food Delivery Order</option>
              <option value="Guest Feedback & Compliments">Guest Feedback & Compliments</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label className="form-label">
            Your Message <span className="required">*</span>
          </label>
          <textarea
            name="message"
            rows="5"
            className={`form-textarea ${errors.message ? 'has-error' : ''}`}
            placeholder="Tell us how we can help you experience the best of Blessings..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
        >
          <MessageCircle size={18} />
          <span>Send Message via WhatsApp</span>
        </button>

        <p
          style={{
            fontSize: '0.76rem',
            color: '#A8957D',
            textAlign: 'center',
            marginTop: '0.75rem',
            lineHeight: '1.4',
          }}
        >
          Submitting opens WhatsApp with your pre-formatted enquiry directly addressed to Blessings management (+234 814 463 8639).
        </p>
      </form>
    </div>
  );
}

