import React, { Suspense } from 'react';
import Loader from '../Load/Loader';

export default function LazyWrapper({ children, overlay = false, fallback = null }) {
  return <Suspense fallback={fallback ?? <Loader overlay={overlay} />}>{children}</Suspense>;
}
