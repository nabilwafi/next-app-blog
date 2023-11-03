'use client';

import { Input, Radio, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { userRequestProps } from '../create/page';
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const validationSchema = yup.object({
  name: yup.string().required('name is required'),
  email: yup.string().email('must be email').required('name is required'),
  gender: yup.string().required('gender is requird'),
  status: yup.string().required('status is requird'),
});

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [userData, setUserData] = useState<userRequestProps>({
    name: '',
    email: '',
    gender: '',
    status: '',
  });

  const formik = useFormik<userRequestProps>({
    initialValues: userData,
    validationSchema,
    onSubmit: async (values: userRequestProps) => {
      const { name, email, gender, status } = values;

      await axios
        .put(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/public/v2/users/${params.id}`,
          {
            name,
            gender,
            email,
            status,
          },
          {
            headers: {
              authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          toast.success('Successfully Updated User', {
            position: 'top-right',
            autoClose: 5000,
          });
          router.push('/dashboard');
        })
        .catch((err) =>
          toast.error('Failed Updated User', {
            position: 'top-right',
            autoClose: 5000,
          }),
        )
        .finally(() => {
          formik.resetForm();
        });
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/public/v2/users/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
          },
        )
        .then((res) => {
          setUserData(res.data);
          formik.setValues(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <h5 className='text-center text-2xl font-semibold'>Create User</h5>

      <form onSubmit={formik.handleSubmit} className='mt-5'>
        <Input
          onChange={formik.handleChange}
          value={formik.values.name}
          status={
            formik.touched.name && Boolean(formik.errors.name) ? 'error' : ''
          }
          placeholder='Jhon Doe'
          name='name'
          size='large'
          className='mt-5'
        />

        <Input
          onChange={formik.handleChange}
          value={formik.values.email}
          status={
            formik.touched.email && Boolean(formik.errors.email) ? 'error' : ''
          }
          type='email'
          placeholder='JhonDoe@email.com'
          name='email'
          size='large'
          className='mt-5'
        />

        <div className='mt-5'>
          <div className='mb-2'>Gender</div>
          <Radio.Group
            onChange={formik.handleChange}
            value={formik.values.gender}
            name='gender'
          >
            <Radio value={'male'}>Male</Radio>
            <Radio value={'female'}>Female</Radio>
          </Radio.Group>
        </div>

        <div className='mt-5'>
          <div className='mb-2'>Status</div>
          <Radio.Group
            onChange={formik.handleChange}
            value={formik.values.status}
            name='status'
          >
            <Radio value={'active'}>Active</Radio>
            <Radio value={'inactive'}>Inactive</Radio>
          </Radio.Group>
        </div>

        <div className='mt-5'>
          <Button htmlType='submit' loading={formik.isSubmitting}>
            {formik.isSubmitting ? 'loading' : 'submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
