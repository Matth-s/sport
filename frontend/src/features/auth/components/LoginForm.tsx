"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/SubmitButton";
import FormErrorMessage from "@/components/FormErrorMessage";
import ShowPasswordButton from "./ShowPasswordButton";
import { loginSchema, loginType } from "../schemas/login-schema";
import { loginService } from "../services/login-service";
import AuthFormLinkFooter from "./AuthFormLinkFooter";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<loginType>({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: {
      isSubmitting: isDisabled,
      errors: { root: rootError },
    },
  } = form;

  const onSubmit = async (data: loginType) => {
    const res = await loginService(data);

    if (res?.error) {
      form.setError("root", {
        message: res.error,
      });
    }

    if (res?.success) {
    }
  };

  return (
    <Card className="w-xl">
      <CardHeader>
        <CardTitle>Connectez-vous sur groupe-sport</CardTitle>
        <CardDescription>
          Utilisez votre email ou nom d&apos;utilisateur ou Strava pour vous
          connectez
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-y-4"
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
          >
            <FormField
              name="identifier"
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

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ShowPasswordButton
              setShowPassword={() => setShowPassword((prev) => !prev)}
              showPassword={showPassword}
              text="Afficher le mot de passe"
            />

            <FormErrorMessage message={rootError?.message} />

            <SubmitButton
              text="Se connecter"
              isDisabled={isDisabled}
              className="w-full"
            />
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <AuthFormLinkFooter
          text="Vous n'avez pas de compte ?"
          href="/authentification/inscription"
          textHref="Inscrivez-vous"
        />
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
