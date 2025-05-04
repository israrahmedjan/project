// components/LogRocketInitializer.jsx
'use client';

import { useEffect } from 'react';
import LogRocket from 'logrocket';

export default function LogRocketInitializer() {
  const logRocketId = process.env.NEXT_PUBLIC_LOGROCKET_ID;
  useEffect(() => {
    if (logRocketId) {
      LogRocket.init(logRocketId);
    }
  }, []);

  return null;
}
