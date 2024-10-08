import React, { useState } from 'react';

export default function CompaniaForm() {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');
  const [direccion, setDireccion] = useState('');
  const [representante, setRepresentante] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/companias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ codigo, nombre, nit, direccion, representante, telefono })
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} placeholder="Código Empresa" />
      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre Empresa" />
      <input type="text" value={nit} onChange={e => setNit(e.target.value)} placeholder="NIT" />
      <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} placeholder="Dirección" />
      <input type="text" value={representante} onChange={e => setRepresentante(e.target.value)} placeholder="Representante Legal" />
      <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder="Teléfono de Contacto" />
      <button type="submit">Crear Compañía</button>
    </form>
  );
}
