import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  MessageCircle, 
  AlertCircle,
  Info
} from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    seatingPreference: 'Indoor Rustic Dining Room',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) errs.phone = 'Please enter your phone number';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.date) errs.date = 'Please select a date';
    if (!formData.time) errs.time = 'Please select a preferred time';

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

    let text = `🍷 *TABLE RESERVATION ENQUIRY - BLESSINGS RESTAURANT*\n`;
    text += `═══════════════════════════\n`;
    text += `👤 *Guest Name:* ${formData.fullName.trim()}\n`;
    text += `📞 *Phone:* ${formData.phone.trim()}\n`;
    text += `✉️ *Email:* ${formData.email.trim()}\n`;
    text += `📅 *Preferred Date:* ${formData.date}\n`;
    text += `⏰ *Preferred Time:* ${formData.time}\n`;
    text += `👥 *Number of Guests:* ${formData.guests} person(s)\n`;
    text += `🪑 *Seating Preference:* ${formData.seatingPreference}\n`;
    if (formData.specialRequests.trim()) {
      text += `✨ *Special Requests / Occasion:* ${formData.specialRequests.trim()}\n`;
    }
    text += `═══════════════════════════\n`;
    text += `_I understand table availability is subject to confirmation by the Blessings reservations team._`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/2348144638639?text=${encoded}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

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
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="section-tag">Direct Table Reservation</span>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: '#F3E8D5',
            marginTop: '0.4rem',
            marginBottom: '0.6rem',
          }}
        >
          Reserve Your Table at Blessings
        </h3>
        <p style={{ fontSize: '0.94rem', color: '#D8C7B0', maxWidth: '580px', margin: '0 auto' }}>
          Experience our rustic dark walnut dining room, golden ambient lighting, and authentic African hospitality.
        </p>
      </div>

      {/* Mandatory Availability Disclaimer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          backgroundColor: 'rgba(33, 21, 15, 0.85)',
          border: '1px solid rgba(193, 138, 69, 0.4)',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          color: '#E2B66F',
          fontSize: '0.85rem',
          lineHeight: '1.5',
        }}
      >
        <Info size={20} color="#E2B66F" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ display: 'block', color: '#F3E8D5', marginBottom: '3px' }}>
            Reservation Confirmation Policy:
          </strong>
          Submitting this form generates an enquiry to our reservations desk via WhatsApp. Our team will verify table availability and confirm with you directly. Tables are not confirmed automatically.
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="fullName"
                className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                placeholder="e.g. Babatunde Adeleke"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {errors.fullName && <span className="form-error">{errors.fullName}</span>}
          </div>

          {/* Phone Number */}
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

          {/* Email */}
          <div className="form-group">
            <label className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'has-error' : ''}`}
              placeholder="e.g. yourname@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          {/* Reservation Date */}
          <div className="form-group">
            <label className="form-label">
              Reservation Date <span className="required">*</span>
            </label>
            <input
              type="date"
              name="date"
              min={today}
              className={`form-input ${errors.date ? 'has-error' : ''}`}
              value={formData.date}
              onChange={handleChange}
              style={{ colorScheme: 'dark' }}
            />
            {errors.date && <span className="form-error">{errors.date}</span>}
          </div>

          {/* Reservation Time */}
          <div className="form-group">
            <label className="form-label">
              Preferred Time <span className="required">*</span>
            </label>
            <select
              name="time"
              className="form-select"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="12:00">12:00 PM (Lunch)</option>
              <option value="13:00">1:00 PM (Lunch)</option>
              <option value="14:00">2:00 PM (Lunch)</option>
              <option value="15:00">3:00 PM (Afternoon)</option>
              <option value="17:00">5:00 PM (Early Dinner)</option>
              <option value="18:00">6:00 PM (Dinner)</option>
              <option value="19:00">7:00 PM (Dinner)</option>
              <option value="20:00">8:00 PM (Late Dinner)</option>
              <option value="21:00">9:00 PM (Late Dinner)</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div className="form-group">
            <label className="form-label">
              Number of Guests <span className="required">*</span>
            </label>
            <select
              name="guests"
              className="form-select"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Person (Solo Dining)</option>
              <option value="2">2 Persons (Couple)</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons (Family/Friends)</option>
              <option value="5">5 Persons</option>
              <option value="6">6 Persons</option>
              <option value="8">8 Persons (Party)</option>
              <option value="10">10+ Persons (Large Group Event)</option>
            </select>
          </div>
        </div>

        {/* Seating Preference */}
        <div className="form-group">
          <label className="form-label">Seating Preference</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {[
              'Indoor Rustic Dining Room',
              'Outdoor Patio Garden',
              'Intimate Couple Booth',
              'VIP / Private Celebration Area',
            ].map((option) => (
              <label
                key={option}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  backgroundColor: formData.seatingPreference === option ? 'rgba(193, 138, 69, 0.2)' : 'rgba(33, 21, 15, 0.6)',
                  border: `1px solid ${formData.seatingPreference === option ? '#C18A45' : 'rgba(193, 138, 69, 0.2)'}`,
                  color: formData.seatingPreference === option ? '#E2B66F' : '#D8C7B0',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <input
                  type="radio"
                  name="seatingPreference"
                  value={option}
                  checked={formData.seatingPreference === option}
                  onChange={handleChange}
                  style={{ accentColor: '#C18A45' }}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Requests */}
        <div className="form-group">
          <label className="form-label">
            Special Requests or Occasion (Optional)
          </label>
          <textarea
            name="specialRequests"
            rows="3"
            className="form-textarea"
            placeholder="e.g. Birthday celebration, anniversary, high chair needed, dietary allergies, quiet corner request..."
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', maxWidth: '420px', margin: '0 auto' }}
          >
            <MessageCircle size={20} />
            <span>Send Reservation Enquiry via WhatsApp</span>
          </button>
          <span
            style={{
              display: 'block',
              fontSize: '0.78rem',
              color: '#A8957D',
              marginTop: '0.8rem',
            }}
          >
            Opens WhatsApp chat with Blessings at +234 814 463 8639
          </span>
        </div>
      </form>
    </div>
  );
}

