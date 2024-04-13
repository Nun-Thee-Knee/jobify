'use client'
import CreateJobForm from "@/components/CreateJobForm"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

function AddJob() {
  const queryClient = new QueryClient();
  return (
    <>
    <HydrationBoundary state={dehydrate}>
    <CreateJobForm/>
    </HydrationBoundary>
    </>
  )
}

export default AddJob
