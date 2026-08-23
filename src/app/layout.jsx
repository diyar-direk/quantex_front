import "@/styles/index.css";

export const metadata = {
  title: {
    default: "Quantex | Software & Digital Solutions",
    template: "%s | Quantex",
  },
  description:
    "كوانتكس شركة برمجية وتقنية متخصصة في تطوير الحلول الرقمية الحديثة، تطبيقات الويب والموبايل، والخدمات التقنية المبتكرة.",
  keywords: [
    "Quantex",
    "Software Company",
    "Technology Solutions",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Digital Solutions",
    "Software Development",
  ],
  authors: [{ name: "Quantex" }],
  creator: "Quantex",
  publisher: "Quantex",

  metadataBase: new URL("https://quantex.com"),

  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ar: "/ar",
      ku: "/ku",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantex.com",
    siteName: "Quantex",
    title: "Quantex | Software & Digital Solutions",
    description:
      "كوانتكس شركة برمجية وتقنية متخصصة في تطوير الحلول الرقمية الحديثة، تطبيقات الويب والموبايل، والخدمات التقنية المبتكرة.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Quantex - Software & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Quantex | Software & Digital Solutions",
    description:
      "Modern software and digital solutions built to help businesses innovate and grow.",
    images: ["/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return children;
}
