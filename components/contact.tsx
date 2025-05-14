"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send, Github, Linkedin, Twitter, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions/contact"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

type FieldErrors = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    isPreview?: boolean
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    // Clear form status when user makes changes
    if (formStatus) {
      setFormStatus(null)
    }
  }

  // Client-side validation function
  const validateForm = (): boolean => {
    const errors: FieldErrors = {}
    let isValid = true

    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
      isValid = false
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.subject || formData.subject.trim().length < 5) {
      errors.subject = "Subject must be at least 5 characters"
      isValid = false
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
      isValid = false
    }

    setFieldErrors(errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Perform client-side validation first
    if (!validateForm()) {
      return // Stop submission if validation fails
    }

    setIsSubmitting(true)
    setFieldErrors({})
    setFormStatus(null)

    try {
      // Ensure we're sending trimmed values to prevent whitespace issues
      const trimmedData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      }

      const result = await submitContactForm(trimmedData)

      if (result.success) {
        // Check if we're in preview mode based on the message
        const isPreview = result.message.includes("preview mode") || result.message.includes("not actually sent")

        setFormStatus({
          success: true,
          message: result.message,
          isPreview,
        })

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        toast({
          title: isPreview ? "Preview Mode" : "Message sent!",
          description: result.message,
        })
      } else {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors)
        } else {
          setFormStatus({
            success: false,
            message: result.message,
          })

          toast({
            title: "Error",
            description: result.message,
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })

      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-center">
            <h3 className="mb-4 text-3xl font-bold tracking-tight">Get in Touch</h3>
            <p className="mb-8 text-muted-foreground">I'm open to opportunities and collaborations. Reach out!</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below or email me directly at{" "}
                <a href="mailto:ezurikeodinaka@gmail.com" className="font-medium text-primary hover:underline">
                  ezurikeodinaka@gmail.com
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formStatus?.message && (
                <Alert
                  className={`mb-6 ${
                    formStatus.success
                      ? formStatus.isPreview
                        ? "bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
                        : "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300"
                      : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300"
                  }`}
                >
                  {formStatus.isPreview && <AlertTriangle className="mr-2 h-4 w-4 inline" />}
                  <AlertDescription>{formStatus.message}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={fieldErrors.name ? "text-destructive" : ""}>
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={fieldErrors.name ? "border-destructive" : ""}
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      required
                      minLength={2}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="text-sm text-destructive">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={fieldErrors.email ? "text-destructive" : ""}>
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={fieldErrors.email ? "border-destructive" : ""}
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      required
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className={fieldErrors.subject ? "text-destructive" : ""}>
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={fieldErrors.subject ? "border-destructive" : ""}
                    aria-invalid={!!fieldErrors.subject}
                    aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                    required
                    minLength={5}
                  />
                  {fieldErrors.subject && (
                    <p id="subject-error" className="text-sm text-destructive">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className={fieldErrors.message ? "text-destructive" : ""}>
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className={fieldErrors.message ? "border-destructive" : ""}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    required
                    minLength={10}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 flex justify-center space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:ezurikeodinaka@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
