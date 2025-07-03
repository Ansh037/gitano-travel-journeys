
# Gitano Travel - Travel & Tourism Website

A modern, responsive travel and tourism website built with React, TypeScript, and Tailwind CSS. This website showcases travel packages, car rental services, and provides an easy way for customers to book their dream vacations.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly hamburger menu
- **Tour Packages**: Separate sections for domestic and international tour packages
- **Car Rental Service**: Dedicated section for car rental bookings
- **Photo Gallery**: Beautiful image gallery showcasing travel destinations
- **Contact System**: Multiple ways for customers to get in touch
- **Booking System**: Easy-to-use enquiry and booking forms

### User Experience
- **Smooth Animations**: Fade-in animations as sections come into view
- **Modern UI**: Clean, modern design with gradient backgrounds and card layouts
- **Toast Notifications**: User-friendly feedback messages for form submissions
- **Modal Forms**: Popup forms for contact and booking enquiries
- **Social Media Integration**: Links to all major social media platforms

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component-Based Architecture**: Modular, reusable React components
- **Responsive Grid Layouts**: CSS Grid and Flexbox for perfect layouts
- **Modern CSS**: Tailwind CSS for rapid styling and consistent design
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **SEO Optimized**: Semantic HTML structure for better search engine visibility

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first CSS
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and building
- **State Management**: React hooks for local state
- **Form Handling**: Controlled components with validation
- **Routing**: React Router for navigation (ready for multi-page expansion)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, forms, etc.)
│   ├── Navigation.tsx   # Main navigation component
│   ├── HeroSection.tsx  # Landing page hero section
│   ├── AboutSection.tsx # About us section
│   ├── DomesticTours.tsx     # Domestic tour packages
│   ├── InternationalTours.tsx # International tour packages
│   ├── CarRental.tsx    # Car rental services
│   ├── Gallery.tsx      # Photo gallery
│   ├── EnquirySection.tsx    # Booking/enquiry form
│   ├── Testimonials.tsx # Customer testimonials
│   └── ContactSection.tsx    # Contact information and form
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Main homepage
│   └── NotFound.tsx     # 404 error page
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd gitano-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📧 Contact Information

**Gitano Travel**
- **Address**: 456 Rajwada Road, Sarafa Bazaar, Indore, Madhya Pradesh - 452001
- **Phone**: +91 98765 43210, +91 87654 32109
- **Email**: info@gitanotravel.com, booking@gitanotravel.com

## 🎨 Customization

### Changing Colors
The website uses a consistent color scheme defined in Tailwind CSS classes:
- Primary: Blue (blue-600)
- Secondary: Teal (teal-400)
- Accent: Purple (purple-500)

### Adding New Tour Packages
1. Open `src/components/DomesticTours.tsx` or `src/components/InternationalTours.tsx`
2. Add new tour objects to the tours array
3. Include image URL, title, description, duration, and price

### Updating Contact Information
1. Open `src/components/ContactSection.tsx`
2. Update the address, phone numbers, and email addresses
3. Update the Google Maps embed URL for the new location

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px to 1919px
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

This website can be deployed to any static hosting service:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Deploy with Firebase CLI

## 📝 License

This project is created for Gitano Travel. All rights reserved.

## 🤝 Contributing

If you're part of the Gitano Travel team and want to contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For technical support or questions about the website:
- Email: info@gitanotravel.com
- Phone: +91 98765 43210

---

**Built with ❤️ for Gitano Travel**
