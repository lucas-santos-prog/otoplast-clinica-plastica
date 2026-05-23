"use client";

import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProceduresEnum = z.enum([
  "Otoplastía estética",
  "Otoplastía pediárica",
  "Otoplastía funcional",
  "Correção de orelhas de abano",
  "Avaliação pré-operatória",
  "Outro",
]);

const formSchema = z.object({
  name: z.string().min(5, "O seu nome deve ter ao menos 5 caracteres."),
  email: z.email("Formato de email inválido."), // Corrigido aqui
  phone: z.string().min(11, "O telefone deve ter no mínimo 11 números"),
  procedures: ProceduresEnum,
  message: z.string().min(1, "Por favor, insira uma mensagem."),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSuccess: (name: string) => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      procedures: "Outro",
      message: "",
    },
  });

  // Extrai o estado de envio do formulário
  const { isSubmitting } = form.formState;

  // Função assíncrona para simular uma chamada de API
  async function onSubmit(data: FormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);

      toast.success("Solicitação enviada com sucesso!");
      onSuccess(data.name); // Avisa o pai e passa o nome digitado
    } catch (error) {
      toast.error("Erro ao enviar solicitação.");
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl w-xl"
    >
      <FieldGroup className="grid sm:grid-cols-2 gap-6">
        {/* name field */}
        <div className="space-y-2">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`form-${field.name}-field`}>
                  Nome completo *
                </FieldLabel>
                <Input
                  {...field}
                  id={`form-${field.name}-field`}
                  aria-invalid={fieldState.invalid}
                  placeholder="Seu nome"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* email field */}
        <div className="space-y-2">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`form-${field.name}-field`}>
                  E-mail *
                </FieldLabel>
                <Input
                  {...field}
                  id={`form-${field.name}-field`}
                  aria-invalid={fieldState.invalid}
                  placeholder="seu@email.com"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* phone field */}
        <div className="space-y-2">
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`form-${field.name}-field`}>
                  Telefone *
                </FieldLabel>
                <Input
                  {...field}
                  id={`form-${field.name}-field`}
                  aria-invalid={fieldState.invalid}
                  placeholder="(00) 00000-0000"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* procedures field */}
        <div className="space-y-2">
          <Controller
            name="procedures"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`form-${field.name}-field`}>
                  Procedimento de interesse *
                </FieldLabel>
                <Select>
                  <SelectTrigger className="w-full text-white bg-transparent">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="bg-foreground/90">
                      {ProceduresEnum.options.map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="bg-transparent focus:bg-white focus:text-primary cursor-pointer text-white"
                        >
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* message field */}
        <div className="col-span-2">
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`form-${field.name}-field`}>
                  Mensagem *
                </FieldLabel>
                <textarea
                  {...field}
                  id={`form-${field.name}-field`}
                  aria-invalid={fieldState.invalid}
                  placeholder="Como podemos ajudar você?"
                  disabled={isSubmitting}
                  className="w-full min-h-25 px-3 py-2 rounded-md border border-input bg-transparent placeholder:text-primary placeholder:text-lg text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
                {fieldState.invalid && fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </FieldGroup>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 h-14 text-base flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar Solicitação de Agendamento
          </>
        )}
      </Button>
    </form>
  );
}
