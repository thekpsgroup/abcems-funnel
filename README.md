# ABCEMS Solutions

Veteran-owned EMT and Paramedic prep courses. Pass the NREMT with Confidence. Train Smarter, Not Harder.

## Features

- **Public Site**: Real ABCEMS copy with Stripe payment integration
- **Payment Processing**: Stripe checkout with webhook handling
- **User Management**: NextAuth with email/Google authentication
- **Admin Dashboard**: File uploads, roster management, and analytics
- **Instructor Dashboard**: Attendance tracking and certificate generation
- **Student Dashboard**: Course access and homework downloads
- **Certificate System**: Auto-generated PDF certificates with pdf-lib
- **Email System**: Transactional emails with Resend
- **File Storage**: S3/R2 integration for homework and documents

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Email**: Resend
- **Storage**: Vercel Blob (Free alternative to AWS S3)
- **PDF Generation**: pdf-lib

## Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd abcems
   pnpm install
   ```

2. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   
   Fill in your environment variables:
   - Database URL (PostgreSQL)
   - NextAuth secret and OAuth credentials
   - Stripe keys and webhook secret
   - Resend API key
   - AWS S3 credentials

3. **Database Setup**
   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/abcems"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Resend
RESEND_API_KEY="re_..."

# Vercel Blob (Free alternative to AWS S3)
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Course Structure

### EMT Prep Course - $200
- 3-week program, live Zoom or in-person
- Includes study guide + homework packet
- Free retakes until you pass (if homework complete + attend both days)

### Paramedic Prep Course - $400
- Scenario-based prep with test strategy coaching
- Homework packet + unlimited retakes until pass

### Tutoring (Hourly)
- EMT Tutoring - $40/hr
- Paramedic Tutoring - $60/hr

### Group Discount
- 25% off for 10+ people signing up together

## User Roles

- **ADMIN**: Full access to admin dashboard, file uploads, roster management
- **INSTRUCTOR**: Attendance tracking, certificate generation
- **LEARNER**: Course access, homework downloads, certificate access

## API Endpoints

- `POST /api/checkout` - Create Stripe checkout session
- `POST /api/webhooks/stripe` - Stripe webhook handler
- `POST /api/admin/upload-file` - Upload homework/documents
- `POST /api/admin/upload-roster` - Upload CSV roster
- `POST /api/admin/audit-pack` - Generate audit pack
- `POST /api/instructor/update-attendance` - Update student attendance

## File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   ├── instructor/        # Instructor dashboard
│   ├── dashboard/         # Student dashboard
│   └── auth/              # Authentication pages
├── components/            # React components
├── lib/                   # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Database client
│   ├── stripe.ts         # Stripe integration
│   ├── email.ts          # Email templates
│   ├── storage.ts        # File storage
│   ├── certificates.ts   # PDF generation
│   └── roster.ts         # Roster processing
└── types/                 # TypeScript types
```

## Deployment

1. Set up PostgreSQL database
2. Configure environment variables
3. Run database migrations
4. Deploy to Vercel, Railway, or your preferred platform
5. Set up Stripe webhooks pointing to your domain
6. Get your Vercel Blob token from the Vercel dashboard

## Testing the Complete Flow

1. **Public Site**: Visit homepage, view courses, testimonials
2. **Payment**: Click "Enroll Now" → Stripe checkout → Success page
3. **Admin Upload**: Upload homework PDF → Students can download
4. **Roster Upload**: Upload CSV → Users created, enrollments assigned
5. **Attendance**: Instructor marks attendance → Certificate auto-generated
6. **Audit Pack**: Admin generates roster CSV + certificate PDFs

## Support

For questions or issues, contact the development team or refer to the documentation.