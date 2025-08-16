import NewPasswordForm from "@/features/auth/components/NewPasswordForm";
import React from "react";

type NewPasswordPageProps = {
  searchParams: Promise<{
    token?: string;
  }>;
};

const NewPasswordPage = async ({ searchParams }: NewPasswordPageProps) => {
  const token = (await searchParams).token;

  if (!token) {
    return <p> missing token</p>;
  }

  return <NewPasswordForm token={token} />;
};

export default NewPasswordPage;
