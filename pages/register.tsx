import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import Link from "next/link";

const RegisterPage: NextPageWithLayout = () => {
  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-8 text-2xl font-bold">Inscription</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-project-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-project-black"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-project-black"
        />
        <button
          type="submit"
          className="rounded-full bg-project-black px-6 py-2.5 text-sm font-medium text-project-white transition-opacity hover:opacity-90"
        >
          S&apos;inscrire
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-500">
        Déjà un compte ?{" "}
        <Link href="/login" className="text-project-black underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default RegisterPage;
