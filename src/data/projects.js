import bduCart from '../assets/images/projects/bdu/bdu-cart.png'
import bduDashboard from '../assets/images/projects/bdu/bdu-dashboard.png'
import bduInventory from '../assets/images/projects/bdu/bdu-inventory.png'
import bduPickup from '../assets/images/projects/bdu/bdu-pickup.png'
import bduPos from '../assets/images/projects/bdu/bdu-pos.png'
import bduProcessing from '../assets/images/projects/bdu/bdu-processing.png'
import bduReports from '../assets/images/projects/bdu/bdu-reports.png'
import bduStore from '../assets/images/projects/bdu/bdu-store.png'
import gmascAdminDashboard from '../assets/images/projects/gmasc/gmasc-admin-dashboard.png'
import gmascEventAttendees from '../assets/images/projects/gmasc/gmasc-event-attendees.png'
import gmascEventRegistration from '../assets/images/projects/gmasc/gmasc-event-registration.png'
import gmascHomepage from '../assets/images/projects/gmasc/gmasc-homepage.png'
import gmascMembershipApplication from '../assets/images/projects/gmasc/gmasc-membership-application.png'
import gmascMembershipReview from '../assets/images/projects/gmasc/gmasc-membership-review.png'
import gmascMembershipStatus from '../assets/images/projects/gmasc/gmasc-membership-status.png'
import gmascReports from '../assets/images/projects/gmasc/gmasc-reports.png'
import gmascTrainingSchedule from '../assets/images/projects/gmasc/gmasc-traning-schedule.png'
import mcAddressInformation from '../assets/images/projects/mc-repair/mc-address-information.png'
import mcBookingInterface from '../assets/images/projects/mc-repair/mc-booking-interface.png'
import mcBookingManagement from '../assets/images/projects/mc-repair/mc-booking-management.png'
import mcCustomerInformation from '../assets/images/projects/mc-repair/mc-customer-information.png'
import mcPaymentProof from '../assets/images/projects/mc-repair/mc-payment-proof.png'
import mcScheduleManagement from '../assets/images/projects/mc-repair/mc-schedule-management.png'
import mcScheduleSelection from '../assets/images/projects/mc-repair/mc-schedule-selection.png'
import mcTechnicianSchedule from '../assets/images/projects/mc-repair/mc-technician-schedule.png'

// Project-specific stacks stay separate from the portfolio's React/Vite/Tailwind stack.
export const projects = [
  {
    id: 'bdu',
    number: '01',
    slug: 'earist-business-development-unit-system',
    title: 'BDU CONNECT',
    shortTitle: 'BDU CONNECT',
    subtitle: 'EARIST Business Development Unit Integrated Management System',
    type: 'Web-Based Integrated Management System',
    role: 'Programmer',
    status: 'Thesis Defended',
    featured: true,
    shortDescription: 'BDU CONNECT is a web-based integrated management system developed for the Business Development Unit of EARIST Cavite Campus. It integrates online pre-ordering, product and inventory management, point-of-sale transactions, barcode-assisted order pickup, sales monitoring, reporting, and role-based administration using modern web technologies.',
    overview: 'BDU CONNECT is a web-based integrated management system developed to support the operational and administrative processes of the Business Development Unit of EARIST Cavite Campus. The system centralizes product management, inventory monitoring, student online pre-ordering, order processing, point-of-sale transactions, barcode-assisted order pickup, sales monitoring, reporting, and account administration.\n\nBuilt using React, Vite, Tailwind CSS, and Supabase, the system provides dedicated interfaces for administrators, staff, and students. It integrates database management, authentication, role-based access, file storage, and interactive reporting within a unified web application.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Vite', 'Supabase', 'PostgreSQL', 'PostgreSQL Database Functions', 'RPC', 'Supabase Auth', 'Row-Level Security', 'Supabase Storage', 'Visual Studio Code', 'Git', 'GitHub'],
    visibleTechnologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    categories: ['Product & Inventory', 'Online Pre-Ordering', 'Point of Sale', 'Order Fulfillment', 'Administration & Reporting'],
    features: [
      { category: 'COMMERCE', items: ['Product Catalog', 'Shopping Cart', 'Online Pre-Ordering', 'Point-of-Sale Transactions', 'Cash Payment Upon Pickup'] },
      { category: 'OPERATIONS', items: ['Product Management', 'Product Type and Variant Management', 'SKU Management', 'Inventory Management', 'Order Processing', 'Barcode-Assisted Pickup', 'Transaction Management'] },
      { category: 'ADMINISTRATION', items: ['User Account Management', 'Registration and Account Approval', 'Role-Based Access', 'Audit Logs', 'Notifications', 'Messaging', 'Landing Page Management', 'Announcement Management', 'Account Settings'] },
      { category: 'INSIGHTS', items: ['Sales Monitoring', 'Sales Reports', 'Inventory Reports', 'Transaction Reports', 'Product Performance Reports', 'Dashboard Analytics'] },
    ],
    // Future screenshots should be reviewed for student IDs, contact details, credentials, tokens, and private transactions.
    screenshots: [
      { id: 'bdu-dashboard', title: 'Admin Dashboard', description: 'Primary administrative overview.', image: bduDashboard, alt: 'BDU CONNECT admin dashboard' },
      { id: 'bdu-inventory', title: 'Inventory Management', description: 'Inventory monitoring interface.', image: bduInventory, alt: 'BDU CONNECT inventory management' },
      { id: 'bdu-store', title: 'Online Store', description: 'Product browsing and ordering interface.', image: bduStore, alt: 'BDU CONNECT online store' },
      { id: 'bdu-cart', title: 'Cart / Order', description: 'Cart and order workflow interface.', image: bduCart, alt: 'BDU CONNECT cart and order' },
      { id: 'bdu-pos', title: 'POS Interface', description: 'Point-of-sale transaction interface.', image: bduPos, alt: 'BDU CONNECT point-of-sale interface' },
      { id: 'bdu-processing', title: 'Order Processing', description: 'Order processing interface.', image: bduProcessing, alt: 'BDU CONNECT order processing' },
      { id: 'bdu-pickup', title: 'Barcode-Assisted Pickup', description: 'Pickup verification interface.', image: bduPickup, alt: 'BDU CONNECT barcode-assisted pickup' },
      { id: 'bdu-reports', title: 'Reports', description: 'Reporting interface.', image: bduReports, alt: 'BDU CONNECT reports' },
    ],
    challenge: null,
    solution: null,
    learnings: null,
    contributions: [],
    caseStudy: {
      objective: 'To streamline Business Development Unit operations through a centralized digital platform that supports product and inventory management, online pre-ordering, point-of-sale transactions, order fulfillment, sales monitoring, and administrative decision-making.',
      users: [
        { label: 'Administrator', description: 'Manages user accounts and registration approvals, products, product types, variants, inventory, orders, sales, reports, announcements, landing-page content, audit logs, and administrative settings.' },
        { label: 'Staff', description: 'Processes point-of-sale transactions, manages online orders, verifies and releases pickups, monitors products and inventory, and accesses authorized transaction records and reports.' },
        { label: 'Student', description: 'Browses products, adds variants to the cart, submits online pre-orders, monitors order status, receives notifications, uses pickup identification or barcode, and manages account information.' },
      ],
      workflows: [
        { label: 'A / Student online pre-ordering', steps: ['Browse Products', 'Select Product and Variant', 'Add to Cart', 'Submit Pre-Order', 'Order Processing', 'Pickup and Cash Payment'] },
        { label: 'B / Point-of-sale workflow', steps: ['Product Selection', 'Transaction Processing', 'Payment', 'Inventory Update', 'Transaction Record'] },
        { label: 'C / Order pickup workflow', steps: ['Processed Order', 'Barcode-Assisted Verification', 'Pickup Confirmation and Cash Payment', 'Order Release'] },
        { label: 'D / Account registration workflow', steps: ['Student / Staff Registration', 'Email Verification', 'Pending Approval', 'Administrative Review', 'Approved Account Access'] },
      ],
      technologyGroups: [
        { label: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
        { label: 'Build Tool', items: ['Vite'] },
        { label: 'Backend / Services', items: ['Supabase', 'PostgreSQL Database Functions', 'Remote Procedure Calls (RPC)'] },
        { label: 'Database', items: ['PostgreSQL'] },
        { label: 'Authentication / Authorization', items: ['Supabase Auth', 'Role-Based Access Control', 'Row-Level Security (RLS)'] },
        { label: 'File Storage / Tools', items: ['Supabase Storage', 'Visual Studio Code', 'Git', 'GitHub'] },
      ],
      dataDomains: ['User Profiles', 'User Roles', 'Products', 'Product Types', 'Product Variants', 'SKUs', 'Inventory', 'Shopping Cart', 'Orders', 'Order Items', 'Transactions', 'Transaction Items', 'Notifications', 'Messages', 'Announcements', 'Audit Logs'],
      dataRelationships: [
        ['User Profiles', 'Orders', 'Order Items', 'Pickup'],
        ['Product Types', 'Products', 'Variants', 'Inventory'],
        ['Products', 'Transactions', 'Sales Reports'],
        ['Administrative Activities', 'Audit Logs'],
      ],
      technicalHighlights: ['React component-based frontend', 'Vite development and build tooling', 'Tailwind CSS responsive interfaces', 'Supabase authentication', 'PostgreSQL-backed data management', 'Database functions and RPC operations', 'Row-Level Security policies', 'Role-specific application interfaces', 'Supabase Storage integration', 'Product variant and SKU management', 'Barcode-assisted pickup workflows', 'Transaction and inventory management', 'Audit logging', 'Sales reporting and dashboard analytics'],
      technicalLayers: [
        { label: 'Presentation Layer', items: 'React / JavaScript / Tailwind CSS' },
        { label: 'Application Layer', items: 'React Components / Application Workflows / Supabase Client' },
        { label: 'Authentication and Authorization', items: 'Supabase Auth / Role-Based Access / RLS' },
        { label: 'Data and Business Logic', items: 'PostgreSQL / Database Functions / RPC' },
        { label: 'Storage Services', items: 'Supabase Storage' },
        { label: 'Reporting and Analytics', items: 'Sales / Inventory / Transactions / Product Performance' },
      ],
      contribution: 'As a programmer of BDU CONNECT, I contributed to the development of its web application interfaces, database-driven workflows, authentication and authorization, product and inventory management, order processing, and transaction-related functionalities. The project provided practical experience in integrating modern frontend technologies with cloud-based database and application services.',
      reflection: 'Developing BDU CONNECT strengthened my understanding of modern web application development, component-based interfaces, database management, authentication, and role-based system design. Transitioning from a traditional PHP/MySQL implementation to React and Supabase provided practical experience in integrating frontend applications with backend services and managing interconnected business workflows.\n\nThe project also improved my understanding of data consistency, access control, debugging, system testing, and the importance of designing applications around actual operational requirements.',
      learningAreas: ['Component-Based Development', 'Cloud-Backed Data Workflows', 'Authentication & Authorization', 'Role-Based System Design', 'Transaction & Inventory Workflows', 'Application Testing & Debugging'],
    },
  },
  // GMASC's verified stack intentionally excludes Supabase.
  {
    id: 'gmasc',
    number: '02',
    slug: 'gma-sports-club-management-system',
    title: 'GMA Sports Club Management System',
    shortTitle: 'GMASC',
    version: '1.0.0',
    type: 'Full-Stack Sports Club Management Web Application',
    role: 'Programmer',
    status: 'Feature-rich local PHP/MySQL application developed for a XAMPP environment.',
    featured: false,
    shortDescription: 'A PHP/MySQL sports-club management system integrating membership applications, training schedules, event registration, content publishing, inquiries, and administrative reporting.',
    overview: 'The GMA Sports Club Management System combines a public sports-club website with membership processing, training-session scheduling, event registration, content management, inquiries, and administrative reporting. Visitors can explore club information and submit inquiries. Registered users can apply for memberships, active members can register for training sessions and events, and administrators can manage users, memberships, schedules, events, media, inquiries, and reports.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'AJAX / Fetch', 'MySQLi', 'PHP Sessions', 'XAMPP', 'Font Awesome', 'PHPMailer'],
    visibleTechnologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX / Fetch'],
    categories: ['Membership', 'Training', 'Events', 'Content & Communication', 'Administration'],
    features: [
      { category: 'MEMBERSHIP', items: ['User registration and login', 'Membership applications', 'Multi-sport selection', 'Membership duration', 'Payment-proof submission', 'Approval / rejection workflow', 'Membership status', 'Renewal'] },
      { category: 'TRAINING', items: ['Training schedule', 'Session registration', 'Capacity checks', 'Duplicate-registration prevention', 'Cancellation'] },
      { category: 'EVENTS', items: ['Event management', 'Event registration', 'Cancellation', 'Attendee management'] },
      { category: 'CONTENT & COMMUNICATION', items: ['Gallery', 'Vlogs', 'Public club information', 'Inquiry form', 'Administrative replies'] },
      { category: 'ADMINISTRATION', items: ['User management', 'Member management', 'Reports', 'Activity logs', 'Dashboard statistics'] },
    ],
    // Future screenshots should anonymize names, contact details, addresses, birth dates, account IDs, credentials, and payment data.
    screenshots: [
      { id: 'gmasc-homepage', title: 'Public Homepage', description: 'Public club homepage.', image: gmascHomepage, alt: 'GMASC public homepage' },
      { id: 'gmasc-membership-application', title: 'Membership Application', description: 'Membership application interface.', image: gmascMembershipApplication, alt: 'GMASC membership application' },
      { id: 'gmasc-admin-dashboard', title: 'Admin Dashboard', description: 'Administrative dashboard interface.', image: gmascAdminDashboard, alt: 'GMASC admin dashboard' },
      { id: 'gmasc-membership-review', title: 'Membership Review', description: 'Membership review interface.', image: gmascMembershipReview, alt: 'GMASC membership review' },
      { id: 'gmasc-membership-status', title: 'Membership Status', description: 'Member status interface.', image: gmascMembershipStatus, alt: 'GMASC membership status' },
      { id: 'gmasc-training-schedule', title: 'Training Schedule', description: 'Training schedule interface.', image: gmascTrainingSchedule, alt: 'GMASC training schedule' },
      { id: 'gmasc-event-registration', title: 'Event Registration', description: 'Event registration interface.', image: gmascEventRegistration, alt: 'GMASC event registration' },
      { id: 'gmasc-event-attendees', title: 'Event Attendee Management', description: 'Event attendee management interface.', image: gmascEventAttendees, alt: 'GMASC event attendee management' },
      { id: 'gmasc-reports', title: 'Reports & Activity Logs', description: 'Reports and activity logs interface.', image: gmascReports, alt: 'GMASC reports and activity logs' },
    ],
    challenge: null,
    solution: null,
    learnings: null,
    contributions: [],
    caseStudy: {
      purpose: 'To centralize the club\'s public information and core digital workflows, including membership processing, training schedules, event registration, content management, inquiries, and administrative monitoring, within one web-based system.',
      sports: ['Basketball', 'Volleyball', 'Swimming', 'Chess', 'Boxing', 'Arnis'],
      roles: [
        { label: 'Guest / Public Visitor', description: 'Browses club information, sports offerings, gallery content, vlogs, location details, inquiries, and account access.' },
        { label: 'Registered User / Applicant', description: 'Manages account information, submits membership applications, selects sports and duration, submits payment proof, and tracks application status.' },
        { label: 'Active Member', description: 'Accesses membership status, reviews training schedules, registers for sessions and events, and manages cancellations.' },
        { label: 'Administrator', description: 'Manages users, memberships, schedules, events, content, inquiries, reports, and operational records.' },
      ],
      membershipWorkflow: ['User Registration', 'Profile Completion', 'Membership Application', 'Sport Selection', 'Membership Duration', 'Payment Method / Proof', 'Administrative Review', 'Approval or Rejection', 'Membership Status'],
      membershipHighlights: [
        { label: 'Multi-sport application', detail: 'Related sport selections are grouped under one membership application.' },
        { label: 'Duration options', detail: 'Membership applications support 1-6 month selections or 12 months.' },
        { label: 'Payment methods', detail: 'Payment-method options include GCash, PayMaya, PayPal, and payment-proof upload.' },
        { label: 'Status workflow', detail: 'Applications support review, approval, rejection reason, dates, expiry, and renewal-related status.' },
      ],
      training: {
        adminFields: ['Sport', 'Date', 'Time', 'Venue', 'Coach information', 'Capacity', 'Gender eligibility', 'Age-group eligibility', 'Status'],
        memberWorkflow: ['Active Member', 'Browse Training Schedule', 'Review Session', 'Eligibility / Availability Check', 'Register', 'Training Signup'],
        highlights: ['Duplicate-registration prevention', 'Capacity checks', 'Training registration cancellation'],
      },
      events: {
        workflow: ['Admin Creates Event', 'Event Published', 'Active Member Browses', 'Register / Cancel', 'Attendee Management'],
        features: ['Event creation and management', 'Event image', 'Event status', 'Event filters', 'Member event registration', 'Registration cancellation', 'Administrative attendee list'],
      },
      content: {
        areas: ['Gallery', 'Vlogs', 'Public Club Information', 'Google Maps Location'],
        inquiryWorkflow: ['Visitor Submits Inquiry', 'Admin Opens Inquiry', 'Inquiry Marked / Managed', 'Admin Replies', 'Resolved'],
        communication: 'PHPMailer can support email delivery, with a local fallback email-file mechanism in the application workflow.',
      },
      administration: {
        areas: ['Dashboard', 'User Management', 'Member Management', 'Membership Applications', 'Training Management', 'Event Management', 'Content Management', 'Inquiry Management', 'Reports', 'Activity Logs', 'Email Settings', 'Profile / Settings'],
        reporting: ['Dashboard statistics', 'Revenue summaries', 'Revenue trends', 'Membership distribution', 'Operational statistics', 'Activity logs', 'CSV member export'],
      },
      technologyGroups: [
        { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'AJAX / Fetch'] },
        { label: 'Backend', items: ['PHP', 'Procedural PHP', 'PHP Sessions', 'MySQLi'] },
        { label: 'Database', items: ['MySQL'] },
        { label: 'Communication', items: ['PHPMailer'] },
        { label: 'Interface Support', items: ['Font Awesome'] },
        { label: 'Development Environment', items: ['XAMPP', 'phpMyAdmin'] },
      ],
      dataDomains: [
        { label: 'Identity', items: ['users'] },
        { label: 'Membership', items: ['sports', 'memberships'] },
        { label: 'Training', items: ['activities', 'activity_signups'] },
        { label: 'Events', items: ['events', 'event_registrations'] },
        { label: 'Content', items: ['gallery', 'vlogs'] },
        { label: 'Communication', items: ['inquiries', 'email_settings'] },
        { label: 'Audit', items: ['activity_logs'] },
      ],
      databaseCharacteristics: ['MySQL database', 'utf8mb4', 'Foreign keys', 'Unique constraints', 'Enum usage', 'Schema plus migrations'],
      technicalHighlights: ['Server-rendered PHP', 'MySQL database', 'PHP session authentication', 'Password hashing', 'Role-based access', 'Prepared statements in many database operations', 'AJAX / Fetch interactions', 'File upload workflows', 'Multi-sport membership processing', 'Training capacity checks', 'Duplicate signup prevention', 'Event registration', 'Activity logging', 'Dark / light theme', 'Responsive interface'],
      authentication: 'Username/email login, password_hash(), password_verify(), PHP sessions, admin/user roles, and active/inactive account status support authenticated access.',
      contribution: 'As a programmer for GMASC, I contributed to the development and implementation of the web-based system and its application workflows.',
      reflection: 'Developing GMASC provided practical experience working with a multi-role, database-driven web application that combines public-facing content with authenticated operational workflows. The project brought together membership processing, scheduling, event registration, content management, administrative tools, and data-driven features within a single PHP/MySQL application. It also provided experience managing interactions between user roles, application state, database records, and administrative workflows.',
      learningAreas: ['Multi-Role Web Applications', 'Membership Workflows', 'Scheduling & Capacity Logic', 'Event Registration', 'Database-Driven Content', 'Administrative Interfaces', 'Authentication Workflows', 'Responsive UI Development'],
    },
  },
  {
    id: 'mc-repair',
    number: '03',
    slug: 'mc-watch-repair-scheduling-system',
    title: 'MC Watch Repair Scheduling System',
    shortTitle: 'MC Watch Repair',
    type: 'Web-Based Repair Appointment and Scheduling System',
    role: 'Programmer',
    status: 'Repair appointment and scheduling application',
    featured: false,
    shortDescription: 'A PHP/MySQL repair-booking system for managing customer appointments, technician schedules, service time slots, downpayment verification, and booking administration.',
    overview: 'MC Watch Repair Scheduling System is a web-based appointment and repair-scheduling application designed to organize customer bookings and technician schedules for watch-repair services. The system supports booking workflows, technician scheduling, customer address information, service time-slot management, payment-proof handling, and booking administration.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
    visibleTechnologies: ['PHP', 'MySQL', 'JavaScript'],
    categories: ['Booking', 'Scheduling', 'Payment Workflow', 'Administration'],
    features: [
      { category: 'BOOKING', items: ['Repair appointment booking', 'Customer information', 'Address information', 'Booking management'] },
      { category: 'SCHEDULING', items: ['Technician scheduling', 'Available service slots', '1-2 hour scheduling intervals', 'Sunday booking restriction'] },
      { category: 'PAYMENT WORKFLOW', items: ['50% downpayment requirement', 'Payment-proof submission'] },
      { category: 'ADMINISTRATION', items: ['Booking review', 'Booking management', 'Schedule management'] },
    ],
    // Future screenshots should remove names, addresses, payment proofs, booking references, and private customer details.
    screenshots: [
      { id: 'mc-booking-interface', title: 'Booking Interface', description: 'Repair booking interface.', image: mcBookingInterface, alt: 'MC Watch Repair booking interface' },
      { id: 'mc-customer-information', title: 'Customer Information', description: 'Customer information interface.', image: mcCustomerInformation, alt: 'MC Watch Repair customer information' },
      { id: 'mc-address-information', title: 'Address Information', description: 'Address information interface.', image: mcAddressInformation, alt: 'MC Watch Repair address information' },
      { id: 'mc-schedule-selection', title: 'Schedule Selection', description: 'Service schedule selection interface.', image: mcScheduleSelection, alt: 'MC Watch Repair schedule selection' },
      { id: 'mc-technician-schedule', title: 'Technician Schedule', description: 'Technician schedule interface.', image: mcTechnicianSchedule, alt: 'MC Watch Repair technician schedule' },
      { id: 'mc-payment-proof', title: 'Downpayment / Payment Proof', description: 'Payment-proof interface.', image: mcPaymentProof, alt: 'MC Watch Repair payment proof' },
      { id: 'mc-booking-management', title: 'Booking Management', description: 'Booking management interface.', image: mcBookingManagement, alt: 'MC Watch Repair booking management' },
      { id: 'mc-schedule-management', title: 'Schedule Management', description: 'Schedule management interface.', image: mcScheduleManagement, alt: 'MC Watch Repair schedule management' },
    ],
    challenge: null,
    solution: null,
    learnings: null,
    contributions: [],
    caseStudy: {
      bookingWorkflow: ['Customer Details', 'Address Information', 'Repair Appointment', 'Schedule Selection', 'Downpayment', 'Payment Proof', 'Booking Review', 'Confirmed Appointment'],
      scheduling: {
        rules: [
          { label: 'Service window', value: '1-2 Hour Scheduling Intervals' },
          { label: 'Technician', value: 'Schedule-Based Assignment / Availability' },
          { label: 'Restriction', value: 'Sunday Booking Restricted' },
          { label: 'Management', value: 'Booking and Schedule Administration' },
        ],
        highlights: ['Technician scheduling', 'Available service time slots', 'Booking schedule management'],
      },
      paymentWorkflow: ['Booking Details', '50% Downpayment Requirement', 'Payment Proof Submission', 'Administrative Review'],
      administration: ['Booking Review', 'Booking Management', 'Schedule Management', 'Technician Scheduling', 'Payment-Proof Handling'],
      technologyGroups: [
        { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
        { label: 'Backend', items: ['PHP'] },
        { label: 'Database', items: ['MySQL'] },
        { label: 'Development Environment', items: ['XAMPP'] },
      ],
      technicalFlow: [
        { label: 'Customer interface', items: 'Booking / Customer Details / Schedule' },
        { label: 'Application logic', items: 'PHP / JavaScript' },
        { label: 'Booking data', items: 'MySQL' },
        { label: 'Administration', items: 'Booking / Technician / Schedule / Payment Proof' },
      ],
      technicalHighlights: ['PHP-based web application', 'MySQL-backed data storage', 'JavaScript interface behavior', 'Database-driven booking workflows', 'Schedule-based appointment handling', 'Technician scheduling', 'Booking restrictions', 'Payment-proof workflow'],
      contribution: 'As a programmer for the project, I contributed to the development and implementation of the web-based booking and scheduling system.',
      reflection: 'Developing the MC Watch Repair Scheduling System provided practical experience in building a focused, database-driven service application centered on appointments, scheduling rules, technician availability, and payment-related workflows. The project also provided experience connecting customer-facing booking processes with administrative scheduling and booking management.',
      learningAreas: ['Appointment-Based Systems', 'Scheduling Logic', 'Database-Driven Workflows', 'Form Processing', 'Booking Restrictions', 'Administrative Interfaces', 'Customer-to-Admin Workflow Design'],
    },
  },
]
