"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { eventTypes, siteConfig } from "@/lib/site-config";

const initialState: ContactFormState = { status: "idle" };

const inputClassName =
  "w-full bg-charbon border border-or/20 text-blanc font-sans text-base px-4 py-3.5 focus:border-or focus:outline-none focus:ring-1 focus:ring-or/20 placeholder:text-blanc/40";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <section id="contact" className="py-24 md:py-28 px-6 bg-charbon border-t border-or/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Contact</span>
          <h2 className="section-title section-title-dark">Parlons de votre projet</h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="body-text max-w-lg mx-auto">
            Décrivez-nous votre événement. Nous vous répondons sous 48 h avec un devis personnalisé.
          </p>
        </div>

        {state.status === "success" ? (
          <div className="text-center py-16 border border-or/20 px-8">
            <p className="font-serif text-or text-4xl mb-4" aria-hidden>
              ✦
            </p>
            <h3 className="font-serif text-blanc text-2xl mb-3">Message envoyé !</h3>
            <p className="body-text">
              Merci pour votre intérêt. Nous vous répondrons dans les 48 heures.
            </p>
          </div>
        ) : (
          <form action={formAction} className="space-y-5">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="sr-only"
              aria-hidden
            />

            {state.status === "error" && (
              <p role="alert" className="font-sans text-sm text-erreur border border-erreur/30 px-4 py-3">
                {state.message}
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom complet" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Téléphone" name="phone" type="tel" />
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="eventType"
                  className="label-text"
                >
                  Type d&apos;événement
                </label>
                <select id="eventType" name="eventType" className={`${inputClassName} cursor-pointer`}>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Field label="Date prévue" name="date" type="date" />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="label-text">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre projet, vos attentes, le nombre d'invités..."
                className={`${inputClassName} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="label-text">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={inputClassName}
      />
    </div>
  );
}
