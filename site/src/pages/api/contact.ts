import { env } from "@/env.mjs";
import { type NextApiRequest, type NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Invalid method" });

  console.log("Creating transporter");
  const transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASSWORD,
    },
  });

  const checker = z.object({
    from: z.string().trim().email(),
    subject: z.string().trim(),
    message: z.string().trim().min(1, "Message required"),
  });

  console.log("Checking args");
  const data: unknown = req.body;
  const parsed = checker.safeParse(data);

  if (!parsed.success) {
    console.log("Bad inputs");
    return res.status(400).json({ message: "Could not send message" });
  }

  const html = `
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "5%",
        backgroundColor: "#d2fbfc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <table cellSpacing="10" cellPadding="0" style={{ margin: "auto" }}>
        <tbody>
        <tr>
          <th>From:</th>
          <td>${parsed.data.from}</td>
        </tr>

        <tr>
          <th>Message</th>
          <td>${parsed.data.message}</td>
        </tr>
        </tbody>
      </table>
    </div>
    `;

  console.log("Sending email");
  const result = await transporter.sendMail({
    from: env.EMAIL_FROM,
    to: env.EMAIL_TO,
    subject: parsed.data.subject,
    text: `${parsed.data.from} - ${parsed.data.message}`,
    html,
  });

  console.log("Email sent");
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    console.log("Failed sending email");
    return res
      .status(500)
      .json({ message: `Email(s) (${failed.join(", ")}) could not be sent` });
  }
  return res.json({ message: "ok" });
}
