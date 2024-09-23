import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white p-4 text-center">
      <p className="mb-2 text-xs">Connect with us on</p>
      <div className="flex justify-center space-x-3 mb-4">
        <Link
          href="https://www.instagram.com/the_greatestshowonearth/"
          aria-label="Instagram"
          className="border-r border-white pr-4"
        >
          <Instagram className="w-5 h-5" />
        </Link>
        <Link href="https://www.facebook.com/dp2022" aria-label="Facebook">
          <Facebook className="w-5 h-5" />
        </Link>
      </div>
      <div className="text-xs mb-2">
        <Link href="#" className="border-r border-white pr-2 mr-2">
          Privacy Policy
        </Link>
        <Link href="#" className="border-r border-white pr-2 mr-2">
          Terms and Conditions
        </Link>
        <Link href="mailto:contact@gsoedurgapuja.com">Contact Us</Link>
      </div>
      <p className="text-xs">
        © 2024 The Greatest Show On Earth - All Rights Reserved.
      </p>
    </footer>
  );
}
