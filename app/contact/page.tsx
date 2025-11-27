'use client';

import { MapPin, Mail, Phone, Clock, LucideIcon } from 'lucide-react';
import { useState, FormEvent } from 'react';


// Types
type UserType = 'trader' | 'supplier';

interface ContactInfoItemProps {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
}

interface ToggleSwitchProps {
    activeTab: UserType;
    onTabChange: (tab: UserType) => void;
}

interface RegistrationCardContentProps {
    type: UserType;
}

// Contact Information Item Component
function ContactInfoItem({ icon: Icon, title, children }: ContactInfoItemProps) {
    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Icon color="var(--primary)" />
            <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>{title}</h4>
                <div style={{ color: 'var(--text-secondary)' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

// Toggle Switch Component
function ToggleSwitch({ activeTab, onTabChange }: ToggleSwitchProps) {
    const toggleStyles = {
        container: {
            background: 'white',
            padding: '4px',
            borderRadius: 'var(--radius)',
            display: 'flex',
            position: 'relative' as const,
            marginBottom: '1.5rem',
            border: '1px solid var(--border)'
        },
        slider: {
            position: 'absolute' as const,
            top: '4px',
            left: '4px',
            width: 'calc(50% - 4px)',
            height: 'calc(100% - 8px)',
            background: 'var(--primary)',
            borderRadius: '4px',
            transform: activeTab === 'trader' ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            zIndex: 1
        },
        button: (isActive: boolean) => ({
            flex: 1,
            padding: '10px',
            border: 'none',
            background: 'transparent',
            zIndex: 2,
            color: isActive ? 'white' : 'var(--text-secondary)',
            fontWeight: '600' as const,
            cursor: 'pointer',
            transition: 'color 0.3s'
        })
    };

    return (
        <div style={toggleStyles.container}>
            <div style={toggleStyles.slider} />
            <button
                onClick={() => onTabChange('trader')}
                style={toggleStyles.button(activeTab === 'trader')}
            >
                Trader
            </button>
            <button
                onClick={() => onTabChange('supplier')}
                style={toggleStyles.button(activeTab === 'supplier')}
            >
                Supplier
            </button>
        </div>
    );
}

// Registration Card Content Component
function RegistrationCardContent({ type }: RegistrationCardContentProps) {
    const content = {
        trader: {
            description: 'Join our network of trusted automotive traders. Access genuine parts, financing, and business support.',
            buttonText: 'Register as Trader'
        },
        supplier: {
            description: 'Partner with us to distribute your automotive products in the African market.',
            buttonText: 'Register as Supplier'
        }
    };

    const { description, buttonText } = content[type];

    return (
        <div className="fade-in">
            <p className="mb-4" style={{ fontSize: '0.9rem' }}>
                {description}
            </p>
            <button className="btn btn-primary" style={{ width: '100%' }}>
                {buttonText}
            </button>
        </div>
    );
}

// Contact Form Component
function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again or email us directly at info@marketlinkconsulting.com.');
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '0.8rem',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: '500' as const
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {success && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#d4edda',
                    color: '#155724',
                    borderRadius: 'var(--radius)',
                    border: '1px solid #c3e6cb'
                }}>
                    Thank you! Your message has been sent.
                </div>
            )}

            {error && (
                <div style={{
                    padding: '1rem',
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    borderRadius: 'var(--radius)',
                    border: '1px solid #f5c6cb'
                }}>
                    {error}
                </div>
            )}

            <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div>
                    <label style={labelStyle}>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        disabled={loading}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        disabled={loading}
                    />
                </div>
            </div>
            <div>
                <label style={labelStyle}>Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    disabled={loading}
                />
            </div>
            <div>
                <label style={labelStyle}>Subject</label>
                <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    disabled={loading}
                >
                    <option>General Inquiry</option>
                    <option>Trader Registration</option>
                    <option>Supplier Consultation</option>
                    <option>Partnership</option>
                </select>
            </div>
            <div>
                <label style={labelStyle}>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    style={{ ...inputStyle, fontFamily: 'inherit' }}
                    disabled={loading}
                ></textarea>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}

// Main Contact Page Component
export default function Contact() {
    const [activeTab, setActiveTab] = useState<UserType>('trader');

    return (
        <div className="container section">
            {/* Header */}
            <div className="text-center mb-8">
                <h1>Get in Touch</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Have questions or ready to get started? We're here to help.
                </p>
            </div>

            <div className="grid grid-2 mb-8">
                {/* Contact Info Section */}
                <div>
                    {/* Contact Information Card */}
                    <div className="card mb-4">
                        <h3 className="mb-4">Contact Information</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <ContactInfoItem icon={MapPin} title="Visit Us">
                                <p>
                                    Plot 90, Kanjokya House, 4th Floor,<br />
                                    Kanjokya Street, Kamwokya,<br />
                                    Kampala, Uganda
                                </p>
                            </ContactInfoItem>

                            <ContactInfoItem icon={Mail} title="Email Us">
                                <a
                                    href="mailto:info@marketlinkconsulting.com"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    info@marketlinkconsulting.com
                                </a>
                            </ContactInfoItem>

                            <ContactInfoItem icon={Phone} title="Call Us">
                                <a
                                    href="tel:+256709938589"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    +256 709 938 589
                                </a>
                            </ContactInfoItem>

                            <ContactInfoItem icon={Clock} title="Working Hours">
                                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                            </ContactInfoItem>
                        </div>
                    </div>

                    {/* Registration Card */}
                    <div className="card" style={{ background: 'var(--accent)', border: 'none' }}>
                        <h3 className="mb-2">Ready to Join?</h3>
                        <p className="mb-4">Select your path to get started immediately.</p>

                        <ToggleSwitch activeTab={activeTab} onTabChange={setActiveTab} />
                        <RegistrationCardContent type={activeTab} />
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="card">
                    <h3 className="mb-4">Send us a Message</h3>
                    <ContactForm />
                </div>
            </div>

            {/* Map Embed */}
            <div style={{
                width: '100%',
                height: '400px',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '1px solid var(--border)'
            }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757333646394!2d32.5858!3d0.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjAnMDAuMCJOIDMywrAzNScwOS4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="MarketLink Consulting Location"
                ></iframe>
            </div>
        </div>
    );
}
