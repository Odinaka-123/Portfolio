"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormData = z.infer<typeof formSchema>

// Check if we're in a preview environment
const isPreviewEnvironment = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development"

// Create a mock transporter for preview environments
const createTransporter = () => {
  if (isPreviewEnvironment) {
    console.log("Using mock transporter for preview environment")
    // Create a mock transporter that doesn't actually send emails
    return {
      sendMail: async (mailOptions: any) => {
        console.log("MOCK EMAIL SENT", {
          to: mailOptions.to,
          subject: mailOptions.subject,
          text: mailOptions.text.substring(0, 100) + "...",
        })
        return { messageId: "mock-message-id-" + Date.now() }
      },
    }
  }

  // Create a real transporter for production
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || "smtp.gmail.com",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER || "",
      pass: process.env.EMAIL_PASSWORD || "",
    },
  })
}

export async function submitContactForm(formData: FormData) {
  try {
    console.log("Received form data:", JSON.stringify(formData, null, 2))

    // Validate form data
    const validatedData = formSchema.parse(formData)
    console.log("Validation passed")

    // Create email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Subject:</strong> ${validatedData.subject}</p>
      <h3>Message:</h3>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
    `

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "ezurikeodinaka@gmail.com",
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nSubject: ${validatedData.subject}\n\nMessage:\n${validatedData.message}`,
      html: htmlContent,
    }

    console.log("Attempting to send email with options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
    })

    // Get the appropriate transporter
    const transporter = createTransporter()

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.messageId)

    // Add a note for preview environments
    const successMessage = isPreviewEnvironment
      ? "Message processed successfully! (Note: In preview mode, emails are not actually sent)"
      : "Message sent successfully!"

    return { success: true, message: successMessage }
  } catch (error) {
    console.error("Email sending error:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      const fieldErrors = error.errors.reduce(
        (acc, curr) => {
          const field = curr.path[0] as string
          acc[field] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return { success: false, fieldErrors }
    }

    // Check if it's a nodemailer error
    if (error instanceof Error) {
      const errorMessage = error.message || "Unknown error"

      // Check for preview environment errors
      if (errorMessage.includes("dns.lookup is not implemented")) {
        console.log("DNS lookup error in preview environment - using mock response")
        return {
          success: true,
          message: "Form submission successful! (Note: In preview mode, emails are not actually sent)",
        }
      }

      // Check for common SMTP errors
      if (errorMessage.includes("EAUTH")) {
        return { success: false, message: "Authentication failed. Please check your email credentials." }
      }

      if (errorMessage.includes("ESOCKET") || errorMessage.includes("ECONNECTION")) {
        return { success: false, message: "Could not connect to the email server. Please try again later." }
      }

      // Check for configuration errors
      if (
        !process.env.EMAIL_SERVER ||
        !process.env.EMAIL_PORT ||
        !process.env.EMAIL_USER ||
        !process.env.EMAIL_PASSWORD
      ) {
        return {
          success: false,
          message: "Email configuration is incomplete. Please contact the administrator.",
        }
      }

      return { success: false, message: `Failed to send message: ${errorMessage}` }
    }

    return { success: false, message: "Failed to send message. Please try again later." }
  }
}
