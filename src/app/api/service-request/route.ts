import { NextResponse } from 'next/server';
import { handleServiceRequest } from '@/lib/utils/emailService';
import { validateContactForm } from '@/lib/utils/formValidation';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const errors = validateContactForm(data);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const success = await handleServiceRequest(data);

    if (!success) {
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Service request error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 