"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "../action";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4 pt-12 max-w-lg">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-bold">Email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="votre@email.com"
          className="border border-soft rounded-lg px-4 py-3 bg-white"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-bold">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Votre message..."
          className="border border-soft rounded-lg px-4 py-3 bg-white resize-y"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="bg-dark text-white rounded-lg px-4 py-3 font-bold cursor-pointer disabled:opacity-50"
      >
        {pending ? "Envoi..." : "Envoyer"}
      </button>
      {state && (
        <p className={state.success ? "text-green-600" : "text-red-600"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
