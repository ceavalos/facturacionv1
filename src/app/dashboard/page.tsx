// app/dashboard/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><a href="/dashboard/users">Mantenimiento de Usuarios</a></li>
        <li><a href="/dashboard/companies">Crear Compañías</a></li>
      </ul>
    </div>
  );
}
