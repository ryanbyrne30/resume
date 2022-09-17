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

  if (contactMutation.isSuccess) {
    alert("Thank you for your message!");
    window.location.reload();
  }

  if (contactMutation.isLoading)
    return <div className="w-full h-full">loading</div>;

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
