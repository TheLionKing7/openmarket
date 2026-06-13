import { redirect } from 'next/navigation';

/** Legacy preview URL — production home is now / */
export default function V2LegacyRedirect() {
  redirect('/');
}
