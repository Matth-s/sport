"use client";

import FormErrorMessage from "@/components/FormErrorMessage";
import FormSuccessMessage from "@/components/FormSuccessMessage";
import SubmitButton from "@/components/SubmitButton";
import {
  Card,
  CardContent,
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
import ShowPasswordButton from "./ShowPasswordButton";
import {
  newPasswordSchema,
  newPasswordType,
} from "../services/new-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordService } from "../services/new-password-service";
import BackToLoginLink from "./BackToLoginLink";

type NewPasswordFormProps = {
  token: string;
};

const NewPasswordForm = ({ token }: NewPasswordFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | undefined>(undefined);

  const form = useForm<newPasswordType>({
    defaultValues: {
      password: "",
      confirmPassword: "",
      token,
    },

    resolver: zodResolver(newPasswordSchema),
  });

  const {
    formState: {
      isSubmitting: isDisabled,
      errors: { root: rootError },
    },
  } = form;

  const onSubmit = async (data: newPasswordType) => {
    setSuccess(undefined);

    const res = await newPasswordService(data);

    if (res?.error) {
      return form.setError("root", {
        message: res.error,
      });
    }
  };

  return (
    <Card className="w-lg">
      <CardHeader>
        <BackToLoginLink />
        <CardTitle>Entrez votre nouveau mot de passe</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
            className="flex flex-col gap-y-4"
          >
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmez le nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ShowPasswordButton
              showPassword={showPassword}
              setShowPassword={() => setShowPassword((prev) => !prev)}
              text="Afficher les mots de passe"
            />

            <FormSuccessMessage message={success} />
            <FormErrorMessage message={rootError?.message} />

            <SubmitButton
              text="Modifier mon mot de passe"
              isDisabled={isDisabled}
              className="w-full"
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewPasswordForm;
