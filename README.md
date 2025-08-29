# MyIntern Hub

A comprehensive intern management and onboarding system for Gator Gleam.

## Features

- **Onboarding System**: Step-by-step checklist for new interns
- **Task Management**: Organized task tracking with filters and search
- **Resource Links**: Quick access to Slack, Drive, Post-Bridge, and Canva
- **Progress Tracking**: Local storage for onboarding completion status

## Important Notes

### Slack Setup
**IMPORTANT**: When joining Slack, interns MUST use their PERSONAL email address to create the account, not a work email.

### Data Structure

- **Tasks**: Located in `/data/tasks.ts` - Contains all intern tasks with categories, weeks, and CTAs
- **Onboarding**: Located in `/data/onboarding.ts` - Step-by-step onboarding checklist

### Navigation Structure

- **Dashboard** (`/`) - Overview and quick access
- **Onboarding** (`/onboarding`) - Step-by-step setup guide
- **Tasks** (`/tasks`) - Task management with filtering
- **Resources** (`/resources`) - Quick links and tools
- **Submissions** (`/submissions`) - Work submission guidelines
- **FAQ** (`/faq`) - Frequently asked questions

## Development

This project uses Next.js with the App Router and Tailwind CSS for styling. The design follows accessibility-first principles with semantic HTML and proper ARIA labels.
