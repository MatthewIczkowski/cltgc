import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
}) => (
  <div>
    <h1>New Sign Up!</h1>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);