import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white p-4 text-center">
      <p className="mb-2">Connect with us on</p>
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="#" aria-label="Instagram">
          <Instagram className="w-6 h-6" />
        </Link>
        <Link href="#" aria-label="Facebook">
          <Facebook className="w-6 h-6" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter className="w-6 h-6" />
        </Link>
        <Link href="#" aria-label="YouTube">
          <Youtube className="w-6 h-6" />
        </Link>
      </div>
      <div className="text-xs mb-2">
        <Link href="#" className="border-r border-white pr-2 mr-2">
          Privacy Policy
        </Link>
        <Link href="#" className="border-r border-white pr-2 mr-2">
          Terms and Conditions
        </Link>
        <Link href="#">Contact Us</Link>
      </div>
      <p className="text-xs">
        © 2024 The Greatest Show On Earth - All Rights Reserved.
      </p>
    </footer>
  );
}
