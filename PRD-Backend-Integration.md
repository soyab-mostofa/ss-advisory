# Product Requirements Document (PRD)
## SS Advisory Backend Integration System

### Version: 1.0
### Date: January 2025
### Status: Draft

---

## 1. Executive Summary

### 1.1 Project Overview
Integrate a minimal, efficient backend system into the existing SS Advisory Next.js application to handle user inputs, manage data persistence, and provide administrative oversight through a clean dashboard interface.

### 1.2 Business Objectives
- **Primary**: Enable contact form and job application submissions with proper data management
- **Secondary**: Provide administrative tools for managing inquiries and applications
- **Tertiary**: Implement automated email notifications for improved customer communication

### 1.3 Success Metrics
- 100% form submission success rate
- <2 second response time for form submissions
- Zero data loss incidents
- Admin dashboard accessible within 1 second load time

---

## 2. Product Scope

### 2.1 In Scope
✅ Contact form backend integration
✅ Job application system with file uploads
✅ Admin dashboard for managing submissions
✅ Email notification system via Resend
✅ Database schema and data persistence
✅ Basic authentication for admin access
✅ API endpoints for form submissions
✅ File upload handling for resumes/documents

### 2.2 Out of Scope
❌ Advanced CRM features
❌ Multi-user role management
❌ Advanced analytics and reporting
❌ Third-party integrations (beyond Resend)
❌ Mobile app development
❌ Advanced security features (2FA, SSO)

---

## 3. Technical Architecture

### 3.1 Technology Stack

#### Frontend (Existing)
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Package Manager**: pnpm

#### Backend (New)
- **Runtime**: Next.js API Routes (App Router)
- **Database**: SQLite (development) / PostgreSQL (production)
- **ORM**: Prisma
- **File Storage**: Local filesystem (development) / Vercel Blob (production)
- **Email Service**: Resend
- **Authentication**: NextAuth.js v5

### 3.2 Database Schema

#### 3.2.1 Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  agree_to_terms BOOLEAN NOT NULL DEFAULT false,
  status VARCHAR(50) DEFAULT 'new', -- new, in_progress, resolved, closed
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  responded_at TIMESTAMP NULL
);
```

#### 3.2.2 Job Applications Table
```sql
CREATE TABLE job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_title VARCHAR(255) NOT NULL,
  applicant_name VARCHAR(255) NOT NULL,
  applicant_email VARCHAR(255) NOT NULL,
  applicant_phone VARCHAR(50),
  cover_letter TEXT,
  resume_filename VARCHAR(255),
  resume_file_path VARCHAR(500),
  resume_file_size INTEGER,
  status VARCHAR(50) DEFAULT 'new', -- new, reviewing, shortlisted, rejected, hired
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  reviewed_at TIMESTAMP NULL
);
```

#### 3.2.3 Admin Users Table
```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin', -- admin, super_admin
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 3.2.4 Email Notifications Log
```sql
CREATE TABLE email_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  email_type VARCHAR(100) NOT NULL, -- contact_confirmation, application_confirmation, admin_notification
  reference_id UUID, -- Links to contact_submissions or job_applications
  reference_type VARCHAR(50), -- 'contact' or 'application'
  status VARCHAR(50) DEFAULT 'pending', -- pending, sent, failed
  resend_id VARCHAR(255), -- Resend email ID for tracking
  error_message TEXT NULL,
  sent_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.3 Authentication Strategy

#### 3.3.1 Admin Authentication
- **Provider**: NextAuth.js v5 with Credentials provider
- **Session Management**: JWT tokens
- **Password Security**: bcrypt hashing
- **Session Duration**: 24 hours with auto-refresh

#### 3.3.2 Public Form Security
- **Rate Limiting**: 5 submissions per IP per hour
- **CSRF Protection**: Built-in Next.js CSRF tokens
- **Input Validation**: Zod schema validation
- **File Upload Security**: File type and size restrictions

---

## 4. API Specifications

### 4.1 Contact Form API

#### POST /api/contact/submit
```typescript
// Request Body
interface ContactSubmissionRequest {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  agreeToTerms: boolean;
}

// Response
interface ContactSubmissionResponse {
  success: boolean;
  submissionId: string;
  message: string;
}
```

### 4.2 Job Application API

#### POST /api/careers/apply
```typescript
// Request Body (FormData)
interface JobApplicationRequest {
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;
  coverLetter?: string;
  resume: File; // PDF, DOC, DOCX only, max 5MB
}

// Response
interface JobApplicationResponse {
  success: boolean;
  applicationId: string;
  message: string;
}
```

### 4.3 Admin Dashboard APIs

#### GET /api/admin/submissions
```typescript
interface SubmissionsResponse {
  contacts: ContactSubmission[];
  applications: JobApplication[];
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}
```

#### PATCH /api/admin/submissions/[id]
```typescript
interface UpdateSubmissionRequest {
  status: string;
  adminNotes?: string;
}
```

---

## 5. User Experience Requirements

### 5.1 Form Submission Flow
1. User fills out contact form or job application
2. Client-side validation occurs in real-time
3. Form submission triggers loading state
4. Success message displays with confirmation
5. Automatic email confirmation sent to user
6. Admin notification email sent

### 5.2 Admin Dashboard Requirements
- **Login Page**: Simple, clean authentication form
- **Dashboard Overview**: Summary cards showing submission counts
- **Submissions List**: Filterable, sortable table view
- **Detail View**: Full submission details with status management
- **Responsive Design**: Works on desktop and tablet devices

### 5.3 Email Notification Requirements
- **User Confirmations**: Professional, branded email templates
- **Admin Notifications**: Immediate alerts for new submissions
- **Status Updates**: Optional follow-up emails for status changes

---

## 6. Implementation Phases

### Phase 1: Core Backend Setup (Week 1)
- Database schema implementation with Prisma
- Basic API routes for form submissions
- File upload handling for job applications
- Input validation and error handling

### Phase 2: Email Integration (Week 1)
- Resend integration setup
- Email template creation
- Notification trigger implementation
- Email delivery tracking

### Phase 3: Admin Dashboard (Week 2)
- Authentication system setup
- Admin dashboard UI components
- Submission management functionality
- Status update capabilities

### Phase 4: Testing & Deployment (Week 2)
- Comprehensive testing suite
- Production environment setup
- Performance optimization
- Security audit and hardening

---

## 7. Security Considerations

### 7.1 Data Protection
- **Encryption**: All sensitive data encrypted at rest
- **HTTPS**: Enforce HTTPS for all communications
- **Input Sanitization**: Prevent XSS and injection attacks
- **File Upload Security**: Virus scanning and type validation

### 7.2 Access Control
- **Admin Authentication**: Secure login with session management
- **Rate Limiting**: Prevent spam and abuse
- **CORS Configuration**: Restrict cross-origin requests
- **Environment Variables**: Secure credential management

---

## 8. Performance Requirements

### 8.1 Response Times
- Form submission: <2 seconds
- Admin dashboard load: <1 second
- File upload: <5 seconds for 5MB files
- Email delivery: <30 seconds

### 8.2 Scalability
- Support up to 1000 submissions per month
- Handle concurrent form submissions
- Efficient database queries with proper indexing
- Optimized file storage and retrieval

---

## 9. Monitoring and Analytics

### 9.1 Key Metrics
- Form submission success rate
- Email delivery success rate
- Admin dashboard usage
- System response times
- Error rates and types

### 9.2 Logging Requirements
- Application logs for debugging
- Security event logging
- Performance monitoring
- Email delivery tracking

---

## 10. Deployment Strategy

### 10.1 Development Environment
- Local SQLite database
- Local file storage
- Development Resend API keys
- Hot reload for rapid development

### 10.2 Production Environment
- PostgreSQL database (Vercel Postgres)
- Vercel Blob storage for files
- Production Resend API keys
- Environment-specific configurations

---

## 11. Risk Assessment

### 11.1 Technical Risks
- **Database Migration**: Risk of data loss during schema changes
- **File Upload**: Potential security vulnerabilities
- **Email Delivery**: Dependency on third-party service
- **Authentication**: Session management complexity

### 11.2 Mitigation Strategies
- Comprehensive backup strategy
- Thorough security testing
- Fallback email providers
- Simple, proven authentication patterns

---

## 12. Success Criteria

### 12.1 Functional Requirements
✅ All forms submit successfully to backend
✅ Admin can view and manage all submissions
✅ Email notifications work reliably
✅ File uploads process correctly
✅ Authentication system is secure

### 12.2 Non-Functional Requirements
✅ System handles expected load without degradation
✅ All data is properly secured and backed up
✅ User experience remains smooth and responsive
✅ Admin interface is intuitive and efficient

---

## 13. Appendices

### 13.1 Database Indexes
```sql
-- Performance optimization indexes
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX idx_job_applications_status ON job_applications(status);
CREATE INDEX idx_email_notifications_reference ON email_notifications(reference_id, reference_type);
```

### 13.2 Environment Variables
```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"

# Email Service
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="noreply@ssadvisory.com"
ADMIN_EMAIL="admin@ssadvisory.com"

# File Storage
BLOB_READ_WRITE_TOKEN="vercel_blob_..."

# Security
RATE_LIMIT_MAX="5"
RATE_LIMIT_WINDOW="3600"
MAX_FILE_SIZE="5242880" # 5MB
```

---

**Document Prepared By**: AI Assistant  
**Review Required By**: Development Team  
**Approval Required By**: Project Stakeholder  
**Next Review Date**: Upon Phase 1 Completion