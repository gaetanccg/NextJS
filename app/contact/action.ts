"use server";

export type ContactState = {
  success: boolean;
  message: string;
} | null;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!email || !message) {
    return { success: false, message: "Tous les champs sont requis." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "L'adresse email n'est pas valide." };
  }

  // TODO: envoyer l'email (ex: Resend, Nodemailer, API externe)
  console.log("Contact form:", { email, message });

  return { success: true, message: "Votre message a bien été envoyé !" };
}
