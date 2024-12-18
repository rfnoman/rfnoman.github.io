'use client';

import { useEffect, useState } from 'react';

interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="py-8 px-4 text-center text-gray-400">
        <p> {name}. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <footer className="py-8 px-4 text-center text-gray-400">
      <p> {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}
