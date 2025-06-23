import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    const { data, error } = await resend.emails.send({
      from: 'Charlotte Golf Club <waitlist@resend.dev>',
      to: ['iczkom13@gmail.com'],
      cc: ['miczkows@gmail.com'],
      subject: "New Waitlist Signup",
      react: EmailTemplate({ email: email, name: name || 'there' }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}