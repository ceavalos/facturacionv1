"use client"
import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import styles from '../styles/sideBarStyles.module.css';
import { Button } from 'primereact/button';   

interface Company {
    id: string;
    codigo: string;
    nombre: string;
    nit: string;
    direccion: string;
    representanteLegal: string;
    telefono: string;
  }


export default function CompaniaList() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(5); // Número de elementos por página
    const [totalItems, setTotalItems] = useState<number>(0);
  
    useEffect(() => {
      const fetchCompanies = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
  
        try {
          const response = await fetch('/dashboard/companies/api', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch companies');
          }
  
          const data = await response.json();
          setCompanies(data.companies);
          setTotalItems(data.total); // Suponiendo que la API también devuelve el total de compañías
        } catch (error) {
          console.error('Error fetching companies:', error);
          //throw new Error('Failed to fetch companies ');
        }
      };
  
      fetchCompanies();
    }, [currentPage]);
  
    // Calcular el índice de los elementos que se van a mostrar en la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedCompanies = companies.slice(startIndex, startIndex + itemsPerPage);
  
    return (
      <div className={`${styles.container} ${styles.mt5}`}>
        <h2 className={styles.title}>Listado de Compañías</h2>
        <div className={`${styles.bgWhite} p-2`}>
          {displayedCompanies.length > 0 ? (
            <ul>
              {displayedCompanies.map((company) => (
                <li key={company.id} className={styles.listItem}>
                  <p>
                    <strong>Código:</strong> {company.codigo}
                  </p>
                  <p>
                    <strong>Nombre:</strong> {company.nombre}
                  </p>
                  <p>
                    <strong>NIT:</strong> {company.nit}
                  </p>
                  <p>
                    <strong>Dirección:</strong> {company.direccion}
                  </p>
                  <p>
                    <strong>Representante Legal:</strong> {company.representanteLegal}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {company.telefono}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p>No se encontraron compañías.</p>
              <Button label="Click Me" icon="pi pi-check" className="p-button-raised p-button-rounded" />
            </>
          )}
          <PaginationControl
            page={currentPage}
            between={4}
            total={totalItems}
            limit={itemsPerPage}
            changePage={(page) => setCurrentPage(page)}
            ellipsis={1}
          />
        </div>
      </div>
    );
}
