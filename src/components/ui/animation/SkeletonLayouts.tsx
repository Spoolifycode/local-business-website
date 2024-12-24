'use client'

import React from 'react'
import { Skeleton } from './Skeleton'
import { Stack } from '../layout/Stack'
import { Grid } from '../layout/Grid'

export function GarageCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <Stack spacing="md">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Skeleton width={200} height={24} />
            <Skeleton width={160} height={20} />
          </div>
          <Skeleton circle width={40} height={40} />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} width={80} height={24} />
          ))}
        </div>
        <div className="space-y-2">
          <Skeleton width="100%" height={16} />
          <Skeleton width="80%" height={16} />
        </div>
      </Stack>
    </div>
  )
}

export function GarageGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <Grid cols={3} gap="lg">
      {Array.from({ length: count }).map((_, i) => (
        <GarageCardSkeleton key={i} />
      ))}
    </Grid>
  )
}

export function GarageDetailsSkeleton() {
  return (
    <Stack spacing="xl">
      {/* Header */}
      <div className="space-y-4">
        <Skeleton width={300} height={32} />
        <div className="flex gap-4">
          <Skeleton width={100} height={24} />
          <Skeleton width={120} height={24} />
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left column */}
        <div className="col-span-2 space-y-6">
          <Skeleton width="100%" height={400} />
          <div className="space-y-4">
            <Skeleton width="100%" height={20} />
            <Skeleton width="90%" height={20} />
            <Skeleton width="95%" height={20} />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <Skeleton width="100%" height={200} />
          <Stack spacing="sm">
            <Skeleton width="100%" height={40} />
            <Skeleton width="100%" height={40} />
            <Skeleton width="100%" height={40} />
          </Stack>
        </div>
      </div>
    </Stack>
  )
}

export function SearchFormSkeleton() {
  return (
    <div className="space-y-4 p-6 border border-gray-200 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <Skeleton width="100%" height={40} />
        <Skeleton width="100%" height={40} />
      </div>
      <div className="flex gap-4">
        <Skeleton width={120} height={32} />
        <Skeleton width={120} height={32} />
        <Skeleton width={120} height={32} />
      </div>
    </div>
  )
}