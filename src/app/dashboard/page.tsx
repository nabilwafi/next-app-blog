'use client';

import ButtonAction from '@/components/ButtonAction';
import { User } from '@/interfaces/User';
import { Button } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Page = () => {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchUser, setSearchUser] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get('https://gorest.co.in/public/v2/users', {
          params: {
            name: searchUser,
          },
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          },
        })
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [searchUser]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  const handleDelete = async (id: number) => {
    await axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      })
      .then((res) => {
        toast.success('Successfully Deleted User', {
          position: 'top-right',
          autoClose: 5000,
        });

        window.location.reload();
      })
      .catch((err) => {
        toast.success(err?.data?.message, {
          position: 'top-right',
          autoClose: 5000,
        });
      });
  };

  return (
    <div className='relative overflow-x-auto'>
      <div className='mb-2 flex justify-between'>
        <Link href='/dashboard/create'>
          <ButtonAction buttonText='Add User' />
        </Link>

        <input
          onChange={handleChangeSearch}
          name='search'
          type='search'
          id='search'
          className='block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
          placeholder='Search'
        />
      </div>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              User Name
            </th>
            <th scope='col' className='px-6 py-3'>
              User Email
            </th>
            <th scope='col' className='px-6 py-3'>
              User Gender
            </th>
            <th scope='col' className='px-6 py-3'>
              User Status
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <td colSpan={999} className='flex justify-center py-5'>
              <TailSpin
                height='30'
                width='30'
                color='#4fa94d'
                ariaLabel='tail-spin-loading'
                radius='1'
                visible={true}
              />
            </td>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td className='px-6 py-4'>{user.name}</td>
                <td className='px-6 py-4'>{user.email}</td>
                <td className='px-6 py-4'>{user.gender}</td>
                <td className='px-6 py-4'>{user.status}</td>
                <td className='px-6 py-4 flex items-center gap-1'>
                  <Link href={`/dashboard/${user.id}`}>
                    <Button type='default'>Edit User</Button>
                  </Link>
                  <Button onClick={() => handleDelete(user.id)} danger>
                    Delete User
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
