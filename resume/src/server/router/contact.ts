import { z } from "zod";
import { createRouter } from "./context";
import nodemailer from "nodemailer";
import env from "../env";

const transporter = nodemailer.createTransport({
  host: env.EMAIL_HOST,
  port: parseInt(env.EMAIL_PORT),
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASSWORD,
  },
});

export const contactRouter = createRouter().mutation("contact", {
  input: z.object({
    from: z.string().email(),
    subject: z.string(),
    message: z.string(),
  }),
  async resolve({ input }) {
    console.log(input);

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
          <td>${input.from}</td>
        </tr>

        <tr>
          <th>Message</th>
          <td>${input.message}</td>
        </tr>
        </tbody>
      </table>
    </div>
    `;

    console.log(`Received: ${input.from} - ${input.subject}`);
    const result = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to: env.EMAIL_TO,
      subject: input.subject,
      text: `${input.from}: ${input.message}`,
      html,
    });
    console.log("Email sent");
    const failed = result.rejected.concat(result.pending).filter(Boolean);
    if (failed.length) {
      throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
    }
  },
});
