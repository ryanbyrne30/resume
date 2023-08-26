import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { Layout } from "@/layouts/Layout";
import { useEffect, useState } from "react";
import { type FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export default function ContactPage() {
  const [error, setError] = useState<string | null>(null);
  const sendMutation = useMutation({
    mutationFn: (data: { from: string; subject: string; message: string }) =>
      fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }),
  });
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      from: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FieldValues) {
    setError(null);
    const parsed = z
      .object({
        from: z.string().trim().email(),
        subject: z.string().trim(),
        message: z.string().trim().min(1, "Message required"),
      })
      .safeParse(data);
    if (!parsed.success) return setError("Message invalid");
    sendMutation.mutate(parsed.data);
  }

  useEffect(() => {
    if (sendMutation.isSuccess) reset({}, { keepIsSubmitted: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendMutation.isSuccess]);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-16">
        <header className="w-full text-left">
          <h1>Send Message</h1>
        </header>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-8"
        >
          <section className="flex w-full flex-col gap-1">
            <label>Your email</label>
            <input
              type="email"
              max={70}
              placeholder="myawesomename@email.com"
              {...register("from")}
            />
          </section>
          <section className="flex w-full flex-col gap-1">
            <label>Subject</label>
            <input
              type="text"
              max={100}
              placeholder="Hey there!"
              {...register("subject")}
            />
          </section>
          <section className="flex w-full flex-col gap-1">
            <label>Message</label>
            <textarea
              minLength={1}
              maxLength={500}
              rows={4}
              placeholder="Just wanted to say hello..."
              {...register("message")}
            />
          </section>
          <section>
            <span className="my-2 italic text-red-500">
              {sendMutation.error as string}
            </span>
            <span className="my-2 italic text-red-500">{error}</span>
          </section>
          <section>
            <PrimaryButton
              disabled={sendMutation.isSuccess}
              className={twMerge(
                sendMutation.isLoading ? "animate-pulse" : "",
                sendMutation.isSuccess
                  ? "border-transparent bg-main-600 text-white hover:bg-main-600 hover:text-white"
                  : ""
              )}
            >
              {sendMutation.isLoading
                ? "Sending"
                : sendMutation.isSuccess
                ? "Sent!"
                : "Send"}
            </PrimaryButton>
          </section>
        </form>
      </div>
    </Layout>
  );
}
