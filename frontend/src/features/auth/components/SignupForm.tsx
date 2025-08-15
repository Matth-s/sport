'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, signupType } from '../schemas/signup-schema';
import SubmitButton from '@/components/SubmitButton';
import { signupAction } from '../services/signup-service';
import FormErrorMessage from '@/components/FormErrorMessage';
import FormSuccessMessage from '@/components/FormSuccessMessage';
import ShowPasswordButton from './ShowPasswordButton';

const SignupForm = () => {
  const [success, setSuccess] = useState<string | undefined>(
    undefined
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<signupType>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signupSchema),
  });

  const {
    formState: {
      isSubmitting: isDisabled,
      errors: { root: rootError },
    },
  } = form;

  const onSubmit = async (data: signupType) => {
    setSuccess(undefined);

    const res = await signupAction(data);

    if (res?.error) {
      form.setError('root', {
        message: res.error,
      });
    }

    if (res?.success) {
      setSuccess(res.success);
    }
  };

  return (
    <Card className="w-xl">
      <CardHeader>
        <CardTitle>Inscrivez-vous sur groupe-sport</CardTitle>
        <CardDescription>
          Utilisez votre email ou Strava pour vous créez un compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-y-4"
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
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

            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d&apos;utilisateur</FormLabel>
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
                      type={showPassword ? 'text' : 'password'}
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
                  <FormLabel>Confirmez le mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <ShowPasswordButton
              setShowPassword={() => setShowPassword((prev) => !prev)}
              showPassword={showPassword}
              text="Afficher les mots de passe"
            />

            <FormErrorMessage message={rootError?.message} />
            <FormSuccessMessage message={success} />

            <SubmitButton
              text="S'inscrire"
              isDisabled={isDisabled}
              className="w-full"
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
