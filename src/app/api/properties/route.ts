import { NextResponse } from 'next/server';
import { mockProperties } from '@/lib/mockData';

export async function GET() {
  try {
    // In production, this would scrape actual data from Property24 and PrivateProperty
    // For now, we're using mock data that represents Michael Maingard's listings
    
    return NextResponse.json({
      success: true,
      properties: mockProperties,
      total: mockProperties.length,
      agent: "Michael Maingard"
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}