'use client';

import { useEffect } from 'react';

export default function TawkToChat() {
  const tawkToId = process.env.NEXT_PUBLIC_TAWKTO_ID;
  const tawkToPropertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;

  useEffect(() => {
    if (!tawkToId || !tawkToPropertyId) return;

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://embed.tawk.to/${tawkToId}/${tawkToPropertyId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);
  }, [tawkToId, tawkToPropertyId]);

  return null;
}