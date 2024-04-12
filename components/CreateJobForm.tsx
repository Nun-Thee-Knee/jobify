'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  JobStatus,
  JobMode,
  createAndEditJobSchema,
  createAndEditJobType
} from '@/utils/types';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { CustomFormField, CustomFormSelect } from './FormComponents';

const CreateJobForm = () => {
  const form = useForm<createAndEditJobType>({
    resolver:zodResolver(createAndEditJobSchema)
  })
  return (
    <div>CreateJobForm</div>
  )
}

export default CreateJobForm