"use client";
import React, { useState, useEffect } from 'react';
import { columns } from './components/columns';
import { PaginatedCategory } from '@/types/category';
import { DataTable } from '@/components/Data-table';
import { getCategories } from '@/api/category/actions';
import Pagination from '@/components/Pagination';

async function getData(skip: number, limit: number): Promise<PaginatedCategory> {
  const data = await getCategories(skip, limit);
  return data;
}

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<PaginatedCategory | null>(null);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const skip = (currentPage - 1) * limit;
      const result = await getData(skip, limit);
      setData(result);
    };

    fetchData();
  }, [currentPage]);

  const totalPages = data ? Math.ceil(data.total / limit) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-10">
      {data && (
        <>
          <DataTable columns={columns} data={data.categories} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default Page;
