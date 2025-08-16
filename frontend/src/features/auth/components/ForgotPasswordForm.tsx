"use client";

import SubmitButton from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  forgotPasswordType,
} from "../schemas/forgot-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormErrorMessage from "@/components/FormErrorMessage";
import FormSuccessMessage from "@/components/FormSuccessMessage";
import { forgotPasswordService } from "../services/forgot-password-service";
import BackToLoginLink from "./BackToLoginLink";

const ForgotPasswordForm = () => {
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const form = useForm<forgotPasswordType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const {
    formState: {
      isSubmitting: isDisabled,
      errors: { root: rootError },
    },
  } = form;

  const onSubmit = async (data: forgotPasswordType) => {
    setSuccess(undefined);

    const res = await forgotPasswordService(data);

    if (res?.error) {
      return form.setError("root", {
        message: res.error,
      });
    }

    setSuccess("Un email vous a été envoyé");
  };

  return (
    <Card className="w-lg">
      <CardHeader>
        <BackToLoginLink />
        <CardTitle>Modifier le mot de passe</CardTitle>
        <CardDescription>
          Entrez votre adresse email pour modifier votre mot de passe
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
            className="flex flex-col gap-y-4"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormSuccessMessage message={success} />
            <FormErrorMessage message={rootError?.message} />
            <SubmitButton
              text="Modifier le mot passe"
              isDisabled={isDisabled}
              className="w-full"
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordForm;
