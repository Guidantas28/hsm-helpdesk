
import { Poppins } from "next/font/google";
import "../app/globals.css";
import AuthProvider from "@/components/AuthProvider";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Help Desk HSM",
  description: "Sistema de chamados do Hospital São Miguel",
};

export default function Root({ children }) {
  return (
      <AuthProvider>
          <Header />
          {children}
      </AuthProvider>
  );
}''