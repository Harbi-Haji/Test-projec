"use client";

import { Facebook, Twitter, Instagram, Youtube, Newspaper } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Newspaper className="h-6 w-6" />
              <span className="text-xl font-bold">GlobalNews</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for international and local news coverage.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>International News</li>
              <li>Local News</li>
              <li>Technology</li>
              <li>Business</li>
              <li>Sports</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GlobalNews. All rights reserved.
        </div>
      </div>
    </footer>
  );
}