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

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createJobAction } from '@/utils/action';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const CreateJobForm = () => {
  const form = useForm<createAndEditJobType>({
    resolver:zodResolver(createAndEditJobSchema),
    defaultValues:{
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime
    }
  })

  const queryClient = useQueryClient();
  const {toast} = useToast();
  const router = useRouter();
  const {mutate, isPending} = useMutation({
    mutationFn:(values:createAndEditJobType)=>createJobAction(values),
    onSuccess:(data)=>{
      if(!data){
        toast({description: "There was an error"});
        return;
      }
      toast({description:'Job created'})
      queryClient.invalidateQueries({queryKey:['jobs']});
      queryClient.invalidateQueries({queryKey:['stats']});
      queryClient.invalidateQueries({queryKey:['charts']});
      router.push('/jobs');
    }
  })

  function onSubmit(values: createAndEditJobType) {
    mutate(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className='bg-muted p-8 rounded'
      action="">
        <h2 className="capitalize font-semibold text-4xl mb-6">
          Add Job
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* position */}
          <CustomFormField name='position' control={form.control}/>
          {/* company */}
          <CustomFormField name='company' control={form.control}/>
          {/* location */}
          <CustomFormField name='location' control={form.control}/>
          {/* job status */}
          <CustomFormSelect name='status' control={form.control} labelText="Job Status" items={Object.values(JobStatus)}/>
          {/* job MODE */}
          <CustomFormSelect name='mode' control={form.control} labelText="Job Mode" items={Object.values(JobMode)}/>
          <Button type='submit' className="self-end capitalize" disabled={isPending}>
            {isPending?'loading':'Create Job'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateJobForm