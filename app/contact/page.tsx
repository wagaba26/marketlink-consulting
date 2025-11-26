'use client';

import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [activeTab, setActiveTab] = useState<'trader' | 'supplier'>('trader');
    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Get in Touch</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Have questions or ready to get started? We're here to help.
                </p>
            </div>

            <div className="grid grid-2 mb-8">
                {/* Contact Info */}
                <div>
                    <div className="card mb-4">
                        <h3 className="mb-4">Contact Information</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <MapPin color="var(--primary)" />
                                <div>
                                    <h4 style={{ fontSize: '1rem', margin: 0 }}>Visit Us</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Plot 90, Kanjokya House, 4th Floor,<br />
                                        Kanjokya Street, Kamwokya,<br />
                                        Kampala, Uganda
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Mail color="var(--primary)" />
                                <div>
                                    <h4 style={{ fontSize: '1rem', margin: 0 }}>Email Us</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>info@marketlinkconsulting.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Phone color="var(--primary)" />
                                <div>
                                    <h4 style={{ fontSize: '1rem', margin: 0 }}>Call Us</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>+256 709 938 589</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Clock color="var(--primary)" />
                                <div>
                                    <h4 style={{ fontSize: '1rem', margin: 0 }}>Working Hours</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Mon - Fri: 8:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ background: 'var(--accent)', border: 'none' }}>
                        <h3 className="mb-2">Ready to Join?</h3>
                        <p className="mb-4">Select your path to get started immediately.</p>

                        {/* Toggle Switch */}
                        <div style={{
                            background: 'white',
                            padding: '4px',
                            borderRadius: 'var(--radius)',
                            display: 'flex',
                            position: 'relative',
                            marginBottom: '1.5rem',
                            border: '1px solid var(--border)'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '4px',
                                left: '4px',
                                width: 'calc(50% - 4px)',
                                height: 'calc(100% - 8px)',
                                background: 'var(--primary)',
                                borderRadius: '4px',
                                transform: activeTab === 'trader' ? 'translateX(0)' : 'translateX(100%)',
                                transition: 'transform 0.3s ease',
                                zIndex: 1
                            }} />

                            <button
                                onClick={() => setActiveTab('trader')}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    border: 'none',
                                    background: 'transparent',
                                    zIndex: 2,
                                    color: activeTab === 'trader' ? 'white' : 'var(--text-secondary)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s'
                                }}
                            >
                                Trader
                            </button>
                            <button
                                onClick={() => setActiveTab('supplier')}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    border: 'none',
                                    background: 'transparent',
                                    zIndex: 2,
                                    color: activeTab === 'supplier' ? 'white' : 'var(--text-secondary)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s'
                                }}
                            >
                                Supplier
                            </button>
                        </div>

                        {activeTab === 'trader' ? (
                            <div className="fade-in">
                                <p className="mb-4" style={{ fontSize: '0.9rem' }}>
                                    Join our network of trusted automotive traders. Access genuine parts, financing, and business support.
                                </p>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Register as Trader</button>
                            </div>
                        ) : (
                            <div className="fade-in">
                                <p className="mb-4" style={{ fontSize: '0.9rem' }}>
                                    Partner with us to distribute your automotive products in the African market.
                                </p>
                                <button className="btn btn-primary" style={{ width: '100%' }}>Register as Supplier</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="card">
                    <h3 className="mb-4">Send us a Message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="grid grid-2" style={{ gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>First Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Last Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                            <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Subject</label>
                            <select style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                                <option>General Inquiry</option>
                                <option>Trader Registration</option>
                                <option>Supplier Consultation</option>
                                <option>Partnership</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                            <textarea rows={5} style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontFamily: 'inherit' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
                    </form>
                </div>
            </div>

            {/* Map Embed */}
            <div style={{ width: '100%', height: '400px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757333646394!2d32.5858!3d0.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnMDAuMCJOIDMywrAzNScwOS4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
