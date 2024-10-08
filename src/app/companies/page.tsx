'use client';

import { useState } from 'react';

export default function Companies() {
  const [company, setCompany] = useState({
    code: '',
    name: '',
    nit: '',
    address: '',
    legalRepresentative: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company),
    });

    if (res.ok) {
      alert('Company created');
    } else {
      alert('Error creating company');
    }
  };

  return (
    <div>
      <h1>Crear Compañía</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Code"
          value={company.code}
          onChange={(e) => setCompany({ ...company, code: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={company.name}
          onChange={(e) => setCompany({ ...company, name: e.target.value })}
        />
        {/* Agregar los otros campos */}
        <button type="submit">Crear Compañía</button>
      </form>
    </div>
  );
}
