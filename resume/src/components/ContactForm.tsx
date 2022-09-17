import { trpc } from "@/utils/trpc";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import FormError from "./FormError";

export default function ContactForm() {
  const contactMutation = trpc.useMutation(["contactRouter.contact"]);

  const onSubmit = (data: FieldValues) => {
    const payload = z
      .object({
        from: z.string().email(),
        subject: z.string(),
        message: z.string(),
      })
      .parse(data);
    console.log(payload);
    contactMutation.mutate(payload);
  };

  const { register, handleSubmit } = useForm();

  if (contactMutation.isSuccess)
    return (
      <div className="w-full h-full text-xl font-bold text-center column center">
        <span className="font-thin text-sm">Your message has been sent.</span>
        <span className="font-bold">Thank you for reaching out!</span>
      </div>
    );

  if (contactMutation.isLoading)
    return (
      <div className="w-full h-full text-xl font-bold animate-pulse text-center">
        Sending email...
      </div>
    );

  return (
    <form className="w-full column center" onSubmit={handleSubmit(onSubmit)}>
      <FormError error={contactMutation.error} />
      <h2 className="text-2xl font-bold text-center">Let&apos;s Talk!</h2>
      <div className="group">
        <label>From</label>
        <input
          type="email"
          placeholder="your.email@example.com"
          required
          max={50}
          {...register("from")}
        />
      </div>
      <div className="group">
        <label>Subject</label>
        <input
          placeholder="Howdy!"
          required
          {...register("subject")}
          max={60}
        />
      </div>
      <div className="group">
        <label>Message</label>
        <textarea
          placeholder="Hey there! ..."
          required
          {...register("message")}
        />
      </div>
      <div className="group">
        <button type="submit" className="primary">
          Send
        </button>
      </div>
    </form>
  );
}
