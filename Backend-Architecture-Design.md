# Backend Architecture Design
## SS Advisory Minimal Backend System

### Version: 1.0
### Date: January 2025
### Based on: PRD-Backend-Integration.md

---

## 1. Architecture Overview

### 1.1 System Architecture Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js 15)                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ Contact     │  │ Career      │  │ Admin Dashboard     │ │
│  │ Form        │  │ Application │  │ (Protected)         │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Layer (Next.js)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ /api/       │  │ /api/       │  │ /api/admin/         │ │
│  │ contact/    │  │ careers/    │  │ *                   │ │
│  │ submit      │  │ apply       │  │ (Auth Required)     │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Service Layer                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ Contact     │  │ Application │  │ Email Service       │ │
│  │ Service     │  │ Service     │  │ (Resend)            │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Data Layer                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ Prisma ORM  │  │ File        │  │ Authentication      │ │
│  │             │  │ Storage     │  │ (NextAuth.js)       │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              Database (SQLite/PostgreSQL)                  │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack Details

#### Core Technologies
- **Runtime**: Node.js 18+ (Next.js 15)
- **Framework**: Next.js App Router
- **Language**: TypeScript 5+
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- **Authentication**: NextAuth.js v5
- **Email**: Resend API
- **File Storage**: Vercel Blob (prod) / Local FS (dev)
- **Validation**: Zod
- **Rate Limiting**: @upstash/ratelimit

---

## 2. Project Structure

### 2.1 New Folder Structure
```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── contact/
│   │   │   └── submit/
│   │   │       └── route.ts
│   │   ├── careers/
│   │   │   └── apply/
│   │   │       └── route.ts
│   │   └── admin/
│   │       ├── submissions/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       └── dashboard/
│   │           └── route.ts
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── submissions/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── components/
│   │       ├── AdminLayout.tsx
│   │       ├── SubmissionsList.tsx
│   │       ├── SubmissionDetail.tsx
│   │       └── DashboardStats.tsx
│   └── (existing files...)
├── lib/
│   ├── auth/
│   │   ├── config.ts
│   │   └── providers.ts
│   ├── database/
│   │   ├── prisma.ts
│   │   └── migrations/
│   ├── services/
│   │   ├── contact.service.ts
│   │   ├── application.service.ts
│   │   ├── email.service.ts
│   │   └── file.service.ts
│   ├── validation/
│   │   ├── contact.schema.ts
│   │   ├── application.schema.ts
│   │   └── admin.schema.ts
│   ├── utils/
│   │   ├── rate-limit.ts
│   │   ├── file-upload.ts
│   │   └── email-templates.ts
│   └── types/
│       ├── contact.types.ts
│       ├── application.types.ts
│       └── admin.types.ts
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
└── components/
    └── (existing components...)
```

---

## 3. Database Design Implementation

### 3.1 Prisma Schema
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or "sqlite" for development
  url      = env("DATABASE_URL")
}

model ContactSubmission {
  id            String   @id @default(cuid())
  fullName      String
  email         String
  phone         String?
  subject       String
  message       String   @db.Text
  agreeToTerms  Boolean  @default(false)
  status        SubmissionStatus @default(NEW)
  adminNotes    String?  @db.Text
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  respondedAt   DateTime?
  
  // Relations
  emailNotifications EmailNotification[]
  
  @@map("contact_submissions")
  @@index([createdAt(sort: Desc)])
  @@index([status])
}

model JobApplication {
  id              String   @id @default(cuid())
  jobTitle        String
  applicantName   String
  applicantEmail  String
  applicantPhone  String?
  coverLetter     String?  @db.Text
  resumeFilename  String?
  resumeFilePath  String?
  resumeFileSize  Int?
  status          ApplicationStatus @default(NEW)
  adminNotes      String?  @db.Text
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  reviewedAt      DateTime?
  
  // Relations
  emailNotifications EmailNotification[]
  
  @@map("job_applications")
  @@index([createdAt(sort: Desc)])
  @@index([status])
}

model AdminUser {
  id           String   @id @default(cuid())
  email        String   @unique
  name         String
  passwordHash String
  role         AdminRole @default(ADMIN)
  isActive     Boolean  @default(true)
  lastLogin    DateTime?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  
  @@map("admin_users")
}

model EmailNotification {
  id                String   @id @default(cuid())
  recipientEmail    String
  subject           String
  emailType         EmailType
  referenceId       String?
  referenceType     ReferenceType?
  status            EmailStatus @default(PENDING)
  resendId          String?
  errorMessage      String?  @db.Text
  sentAt            DateTime?
  createdAt         DateTime @default(now())
  
  // Relations
  contactSubmission ContactSubmission? @relation(fields: [referenceId], references: [id])
  jobApplication    JobApplication?    @relation(fields: [referenceId], references: [id])
  
  @@map("email_notifications")
  @@index([referenceId, referenceType])
}

enum SubmissionStatus {
  NEW
  IN_PROGRESS
  RESOLVED
  CLOSED
}

enum ApplicationStatus {
  NEW
  REVIEWING
  SHORTLISTED
  REJECTED
  HIRED
}

enum AdminRole {
  ADMIN
  SUPER_ADMIN
}

enum EmailType {
  CONTACT_CONFIRMATION
  APPLICATION_CONFIRMATION
  ADMIN_NOTIFICATION
  STATUS_UPDATE
}

enum EmailStatus {
  PENDING
  SENT
  FAILED
}

enum ReferenceType {
  CONTACT
  APPLICATION
}
```

### 3.2 Database Connection
```typescript
// lib/database/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

---

## 4. API Layer Design

### 4.1 Contact Submission API
```typescript
// app/api/contact/submit/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { contactSubmissionSchema } from '@/lib/validation/contact.schema'
import { ContactService } from '@/lib/services/contact.service'
import { EmailService } from '@/lib/services/email.service'
import { rateLimit } from '@/lib/utils/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = await rateLimit(request)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSubmissionSchema.parse(body)

    // Create submission
    const submission = await ContactService.createSubmission(validatedData)

    // Send confirmation email to user
    await EmailService.sendContactConfirmation(submission)

    // Send notification email to admin
    await EmailService.sendAdminNotification(submission, 'contact')

    return NextResponse.json({
      success: true,
      submissionId: submission.id,
      message: 'Your message has been sent successfully. We will get back to you soon.'
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    )
  }
}
```

### 4.2 Job Application API
```typescript
// app/api/careers/apply/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { jobApplicationSchema } from '@/lib/validation/application.schema'
import { ApplicationService } from '@/lib/services/application.service'
import { FileService } from '@/lib/services/file.service'
import { EmailService } from '@/lib/services/email.service'
import { rateLimit } from '@/lib/utils/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = await rateLimit(request)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse form data
    const formData = await request.formData()
    const data = {
      jobTitle: formData.get('jobTitle') as string,
      applicantName: formData.get('applicantName') as string,
      applicantEmail: formData.get('applicantEmail') as string,
      applicantPhone: formData.get('applicantPhone') as string,
      coverLetter: formData.get('coverLetter') as string,
      resume: formData.get('resume') as File
    }

    // Validate data
    const validatedData = jobApplicationSchema.parse(data)

    // Upload resume file
    const fileUploadResult = await FileService.uploadResume(validatedData.resume)

    // Create application
    const application = await ApplicationService.createApplication({
      ...validatedData,
      resumeFilename: fileUploadResult.filename,
      resumeFilePath: fileUploadResult.path,
      resumeFileSize: fileUploadResult.size
    })

    // Send confirmation email to applicant
    await EmailService.sendApplicationConfirmation(application)

    // Send notification email to admin
    await EmailService.sendAdminNotification(application, 'application')

    return NextResponse.json({
      success: true,
      applicationId: application.id,
      message: 'Your application has been submitted successfully. We will review it and get back to you soon.'
    })
  } catch (error) {
    console.error('Job application error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}
```

---

## 5. Service Layer Design

### 5.1 Contact Service
```typescript
// lib/services/contact.service.ts
import { prisma } from '@/lib/database/prisma'
import { ContactSubmissionInput, ContactSubmission } from '@/lib/types/contact.types'

export class ContactService {
  static async createSubmission(data: ContactSubmissionInput): Promise<ContactSubmission> {
    return await prisma.contactSubmission.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        agreeToTerms: data.agreeToTerms
      }
    })
  }

  static async getSubmissions(page = 1, limit = 20) {
    const skip = (page - 1) * limit
    
    const [submissions, total] = await Promise.all([
      prisma.contactSubmission.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          emailNotifications: true
        }
      }),
      prisma.contactSubmission.count()
    ])

    return {
      submissions,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  }

  static async updateSubmissionStatus(
    id: string, 
    status: string, 
    adminNotes?: string
  ) {
    return await prisma.contactSubmission.update({
      where: { id },
      data: {
        status: status as any,
        adminNotes,
        respondedAt: status === 'RESOLVED' ? new Date() : undefined
      }
    })
  }
}
```

### 5.2 Email Service
```typescript
// lib/services/email.service.ts
import { Resend } from 'resend'
import { prisma } from '@/lib/database/prisma'
import { ContactSubmission, JobApplication } from '@prisma/client'
import { 
  contactConfirmationTemplate, 
  applicationConfirmationTemplate,
  adminNotificationTemplate 
} from '@/lib/utils/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export class EmailService {
  static async sendContactConfirmation(submission: ContactSubmission) {
    try {
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: submission.email,
        subject: 'Thank you for contacting SS Advisory',
        html: contactConfirmationTemplate(submission)
      })

      // Log email notification
      await prisma.emailNotification.create({
        data: {
          recipientEmail: submission.email,
          subject: 'Thank you for contacting SS Advisory',
          emailType: 'CONTACT_CONFIRMATION',
          referenceId: submission.id,
          referenceType: 'CONTACT',
          status: error ? 'FAILED' : 'SENT',
          resendId: data?.id,
          errorMessage: error?.message,
          sentAt: error ? null : new Date()
        }
      })

      return { success: !error, data, error }
    } catch (error) {
      console.error('Email sending error:', error)
      return { success: false, error }
    }
  }

  static async sendApplicationConfirmation(application: JobApplication) {
    try {
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: application.applicantEmail,
        subject: `Application Received - ${application.jobTitle}`,
        html: applicationConfirmationTemplate(application)
      })

      // Log email notification
      await prisma.emailNotification.create({
        data: {
          recipientEmail: application.applicantEmail,
          subject: `Application Received - ${application.jobTitle}`,
          emailType: 'APPLICATION_CONFIRMATION',
          referenceId: application.id,
          referenceType: 'APPLICATION',
          status: error ? 'FAILED' : 'SENT',
          resendId: data?.id,
          errorMessage: error?.message,
          sentAt: error ? null : new Date()
        }
      })

      return { success: !error, data, error }
    } catch (error) {
      console.error('Email sending error:', error)
      return { success: false, error }
    }
  }

  static async sendAdminNotification(
    submission: ContactSubmission | JobApplication, 
    type: 'contact' | 'application'
  ) {
    try {
      const subject = type === 'contact' 
        ? 'New Contact Form Submission'
        : `New Job Application - ${(submission as JobApplication).jobTitle}`

      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.ADMIN_EMAIL!,
        subject,
        html: adminNotificationTemplate(submission, type)
      })

      // Log email notification
      await prisma.emailNotification.create({
        data: {
          recipientEmail: process.env.ADMIN_EMAIL!,
          subject,
          emailType: 'ADMIN_NOTIFICATION',
          referenceId: submission.id,
          referenceType: type === 'contact' ? 'CONTACT' : 'APPLICATION',
          status: error ? 'FAILED' : 'SENT',
          resendId: data?.id,
          errorMessage: error?.message,
          sentAt: error ? null : new Date()
        }
      })

      return { success: !error, data, error }
    } catch (error) {
      console.error('Admin notification error:', error)
      return { success: false, error }
    }
  }
}
```

---

## 6. Validation Layer

### 6.1 Contact Form Validation
```typescript
// lib/validation/contact.schema.ts
import { z } from 'zod'

export const contactSubmissionSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(255, 'Full name must be less than 255 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  
  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[1-9][\d]{1,14}$/.test(val), {
      message: 'Please enter a valid phone number'
    }),
  
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(500, 'Subject must be less than 500 characters'),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  
  agreeToTerms: z.boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the terms and conditions'
    })
})

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>
```

### 6.2 Job Application Validation
```typescript
// lib/validation/application.schema.ts
import { z } from 'zod'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

export const jobApplicationSchema = z.object({
  jobTitle: z.string()
    .min(2, 'Job title must be at least 2 characters')
    .max(255, 'Job title must be less than 255 characters'),
  
  applicantName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(255, 'Name must be less than 255 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  applicantEmail: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  applicantPhone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[1-9][\d]{1,14}$/.test(val), {
      message: 'Please enter a valid phone number'
    }),
  
  coverLetter: z.string()
    .optional()
    .refine((val) => !val || val.length <= 5000, {
      message: 'Cover letter must be less than 5000 characters'
    }),
  
  resume: z.instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'Resume file size must be less than 5MB'
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: 'Resume must be a PDF, DOC, or DOCX file'
    })
})

export type JobApplicationInput = z.infer<typeof jobApplicationSchema>
```

---

## 7. Authentication Design

### 7.1 NextAuth Configuration
```typescript
// lib/auth/config.ts
import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/database/prisma'

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.adminUser.findUnique({
          where: { 
            email: credentials.email as string,
            isActive: true
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        )

        if (!isPasswordValid) {
          return null
        }

        // Update last login
        await prisma.adminUser.update({
          where: { id: user.id },
          data: { lastLogin: new Date() }
        })

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    })
  ],
  pages: {
    signIn: '/admin/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60 // 24 hours
  }
}
```

---

## 8. Utility Functions

### 8.1 Rate Limiting
```typescript
// lib/utils/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { NextRequest } from 'next/server'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
  analytics: true
})

export async function rateLimit(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  return await ratelimit.limit(ip)
}
```

### 8.2 File Upload Utility
```typescript
// lib/utils/file-upload.ts
import { put } from '@vercel/blob'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'

export async function uploadFile(file: File, folder: string) {
  const filename = `${randomUUID()}-${file.name}`
  
  if (process.env.NODE_ENV === 'production') {
    // Use Vercel Blob in production
    const blob = await put(filename, file, {
      access: 'public'
    })
    
    return {
      filename: file.name,
      path: blob.url,
      size: file.size
    }
  } else {
    // Use local filesystem in development
    const uploadDir = join(process.cwd(), 'uploads', folder)
    await mkdir(uploadDir, { recursive: true })
    
    const filepath = join(uploadDir, filename)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    await writeFile(filepath, buffer)
    
    return {
      filename: file.name,
      path: `/uploads/${folder}/${filename}`,
      size: file.size
    }
  }
}
```

---

## 9. Error Handling Strategy

### 9.1 Global Error Handler
```typescript
// lib/utils/error-handler.ts
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { Prisma } from '@prisma/client'

export function handleApiError(error: unknown) {
  console.error('API Error:', error)

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      },
      { status: 400 }
    )
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A record with this information already exists' },
        { status: 409 }
      )
    }
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
}
```

---

## 10. Performance Optimizations

### 10.1 Database Optimizations
- **Indexes**: Created on frequently queried fields (createdAt, status)
- **Connection Pooling**: Prisma handles connection pooling automatically
- **Query Optimization**: Use `select` and `include` strategically
- **Pagination**: Implement cursor-based pagination for large datasets

### 10.2 Caching Strategy
- **Static Data**: Cache job listings and FAQ data
- **API Responses**: Cache admin dashboard data with short TTL
- **File Uploads**: Use CDN for file delivery in production

### 10.3 Monitoring and Logging
- **Application Logs**: Structured logging with Winston or similar
- **Performance Monitoring**: Vercel Analytics integration
- **Error Tracking**: Sentry integration for production
- **Database Monitoring**: Prisma metrics and slow query logging

---

## 11. Security Measures

### 11.1 Input Security
- **Validation**: Zod schemas for all inputs
- **Sanitization**: HTML sanitization for text inputs
- **File Upload Security**: Type and size validation
- **Rate Limiting**: Per-IP request limiting

### 11.2 Authentication Security
- **Password Hashing**: bcrypt with salt rounds
- **Session Management**: JWT with secure httpOnly cookies
- **CSRF Protection**: Built-in Next.js CSRF tokens
- **Environment Variables**: Secure credential storage

### 11.3 Data Protection
- **Encryption at Rest**: Database-level encryption
- **HTTPS Enforcement**: Redirect all HTTP to HTTPS
- **CORS Configuration**: Restrict cross-origin requests
- **SQL Injection Prevention**: Prisma ORM parameterized queries

---

## 12. Deployment Configuration

### 12.1 Environment Variables
```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ssadvisory"

# Authentication
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="https://your-domain.com"

# Email Service
RESEND_API_KEY="re_your_resend_api_key"
RESEND_FROM_EMAIL="noreply@ssadvisory.com"
ADMIN_EMAIL="admin@ssadvisory.com"

# File Storage (Production)
BLOB_READ_WRITE_TOKEN="vercel_blob_token"

# Rate Limiting (Production)
UPSTASH_REDIS_REST_URL="https://your-redis-url"
UPSTASH_REDIS_REST_TOKEN="your-redis-token"

# Security
RATE_LIMIT_MAX="5"
RATE_LIMIT_WINDOW="3600"
MAX_FILE_SIZE="5242880"
```

### 12.2 Build Configuration
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  },
  images: {
    domains: ['your-blob-domain.com']
  }
}

export default nextConfig
```

---

This architecture provides a solid foundation for the minimal backend system while maintaining scalability, security, and maintainability. The modular design allows for easy extension and modification as requirements evolve.