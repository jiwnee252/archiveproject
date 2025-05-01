import type { NextConfig } from 'next'
import remotePatterns from './withRemotePatterns'

// const backendHost = process.env.NEXT_PUBLIC_BACKEND_HOST || 'localhost'

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
}

export default nextConfig
