'use client';

import { useState, type FormEvent } from 'react';
import { site, web3formsKey } from '@/data/site';
import { SectionHeading } from './Section';
import { Reveal } from './Reveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Builds a mailto: fallback so a lead is never lost if JS fetch fails or no key
// is configured. (§2)
function mailtoFallback(data: Record<string, string>) {
  const subject = encodeURIComponent('Home Valuation / Consultation Request — ulyanaestates.com');
  const body = encodeURIComponent(
    [
      `Name: ${data.name || ''}`,
      `Email: ${data.email || ''}`,
      `Phone: ${data.phone || ''}`,
      `Property Address: ${data.address || ''}`,
      '',
      data.message || '',
    ].join('\n'),
  );
  return `mailto:${site.agent.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bots fill hidden fields; humans never see it.
    if (fd.get('company')) return;

    if (!fd.get('consent')) {
      setStatus('error');
      setErrorMsg('Please agree to the contact consent to continue.');
      return;
    }

    const data = Object.fromEntries(
      ['name', 'email', 'phone', 'address', 'message'].map((k) => [k, String(fd.get(k) ?? '')]),
    );

    // If no form key is configured, go straight to the mailto: fallback.
    if (!web3formsKey) {
      window.location.href = mailtoFallback(data);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      // FORM ENDPOINT — Web3Forms (no backend of ours). Swap for Formspree/Getform
      // or a CRM webhook (Follow Up Boss / kvCORE) later.
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: 'New lead — ulyanaestates.com',
          from_name: 'Ulyana Estates Website',
          ...data,
          consent: 'Yes — TCPA consent given',
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch {
      // Network/endpoint failure → graceful mailto: fallback.
      setStatus('error');
      setErrorMsg('Something went wrong. Opening your email client instead…');
      window.location.href = mailtoFallback(data);
    }
  }

  return (
    <section id="contact" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="What’s My Home Worth?"
            title="Let’s start with a conversation."
            intro="Want to know what your home is worth, or just have questions? Send a note — it comes straight to me, and I answer every one."
          />
          <Reveal delay={0.1} className="mt-10 space-y-5">
            <a
              href={`tel:${site.agent.phoneHref}`}
              className="block font-serif text-3xl text-ink transition-colors hover:text-brass"
            >
              {site.agent.phone}
            </a>
            <a
              href={`mailto:${site.agent.email}`}
              className="block font-sans text-base text-ink/70 underline-offset-4 hover:text-brass"
            >
              {site.agent.email}
            </a>
            <p className="pt-2 font-sans text-[0.85rem] leading-relaxed text-ink/50">
              {site.broker.office}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-7" noValidate>
            {/* Honeypot field (visually hidden, off-screen, not focusable). */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">
                  Name
                </label>
                <input id="name" name="name" required className="field-input" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="field-label">
                  Email
                </label>
                <input id="email" name="email" type="email" required className="field-input" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="field-label">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className="field-input" placeholder="(000) 000-0000" />
              </div>
              <div>
                <label htmlFor="address" className="field-label">
                  Property Address <span className="lowercase tracking-normal text-ink/35">(optional)</span>
                </label>
                <input id="address" name="address" className="field-input" placeholder="Street, City" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Message <span className="lowercase tracking-normal text-ink/35">(optional)</span>
              </label>
              <textarea id="message" name="message" rows={3} className="field-input resize-none" placeholder="How can I help?" />
            </div>

            {/* TCPA consent (§4) — required. */}
            <label className="flex cursor-pointer items-start gap-3 font-sans text-[0.78rem] leading-relaxed text-ink/60">
              <input type="checkbox" name="consent" className="mt-1 h-4 w-4 shrink-0 accent-brass" />
              <span>
                I agree to be contacted by Estate Properties via call, email, and
                text at the number/email provided, including by automated means;
                consent is not a condition of purchase; message/data rates may
                apply; reply STOP to opt out.
              </span>
            </label>

            {/* hCaptcha / reCAPTCHA placeholder (optional, client-side).
                To enable: add the widget here and require its token before submit.
            <div className="h-captcha" data-captcha="true" /> */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" disabled={status === 'submitting'} className="btn-solid disabled:opacity-60">
                {status === 'submitting' ? 'Sending…' : 'Request Consultation'}
              </button>

              {status === 'success' && (
                <p className="font-sans text-[0.85rem] text-sage" role="status">
                  Thank you — your message is on its way. Ulyana will be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="font-sans text-[0.85rem] text-brass" role="alert">
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
