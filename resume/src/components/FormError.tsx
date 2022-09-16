export default function FormError({
  error,
  className,
}: {
  error?: { message: string } | null;
  className?: string;
}) {
  if (!error) return <span></span>;

  try {
    const messages: { message: string }[] = JSON.parse(error.message);
    console.log(messages);
    return (
      <ul className={className}>
        {messages.map((m, idx) => (
          <li key={idx}>{m.message}</li>
        ))}
      </ul>
    );
  } catch {
    return <span className={className}>{error?.message}</span>;
  }
}
