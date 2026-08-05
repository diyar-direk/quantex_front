import ScrollButton from "@/components/layouts/scroll_button/ScrollButton";
import AppProvider from "@/context/AppContext";
import { routing } from "@/i18n/routing";
import QueryProvider from "@/providers/QueryProvider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Cairo } from "next/font/google";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ToastContainer, Bounce } from "react-toastify";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  return (
    <html lang={locale}>
      <body className={cairo.className}>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <AppProvider token={token}>
              <ScrollButton />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
              />
              {children}
            </AppProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
